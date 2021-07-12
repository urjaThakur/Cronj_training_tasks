import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import currencies from "./Components/currencies";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCode: "AED",
      usdDescription: "",
      gbpDescription: "",
      eurDescription: "",
      usdBefore: 0,
      gbpBefore: 0,
      eurBefore: 0,
      usdCurrent: 0,
      gbpCurrent: 0,
      eurCurrent: 0,
      codeBefore: 0,
      codeCurrent: 0,
      oldCode: "",
      description: "",
    };
    this.onRefreshHandler = this.onRefreshHandler.bind(this);
    this.currencyChangeHandler = this.currencyChangeHandler.bind(this);
    this.onRefreshHandle = this.onRefreshHandle.bind(this);
  }

  componentDidMount() {
    this.onRefreshHandler();
    this.currencyChangeHandler();
  }

  onRefreshHandler() {
    const {
      usdCurrent,
      gbpCurrent,
      eurCurrent,
      usdBefore,
      gbpBefore,
      eurBefore,
    } = this.state;
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        const bpi = response.data.bpi;
        this.setState({
          usdBefore: usdCurrent === bpi.USD.rate ? usdBefore : usdCurrent,
          gbpBefore: gbpCurrent === bpi.GBP.rate ? gbpBefore : gbpCurrent,
          eurBefore: usdCurrent === bpi.USD.rate ? eurBefore : eurCurrent,
          usdCurrent: bpi.USD.rate,
          gbpCurrent: bpi.GBP.rate,
          eurCurrent: bpi.EUR.rate,
          usdDescription: bpi.USD.description,
          gbpDescription: bpi.GBP.description,
          eurDescription: bpi.EUR.description,
        });
      })
      .catch((err) => console.log(err));
  }

  currencyChangeHandler() {
    const { oldCode, codeBefore, codeCurrent, currentCode } = this.state;
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/currentprice/${this.state.currentCode}.json`
      )
      .then((response) => {
        const bpi = response.data.bpi;
        this.setState({
          description: bpi[currentCode].description,
          codeCurrent: bpi[currentCode].rate,
          codeBefore:
            oldCode !== currentCode
              ? 0
              : bpi[currentCode].rate === codeCurrent
              ? codeBefore
              : codeCurrent,
          oldCode: bpi[currentCode].code,
        });
      })
      .catch((err) => console.log(err));
  }

  onCurrencyChanged = (e) => {
    this.setState({ currentCode: e.target.value }, () =>
      this.currencyChangeHandler()
    );

    //console.log(e.target.value);
    e.preventDefault();
  };

  onRefreshHandle() {
    this.onRefreshHandler();
    this.currencyChangeHandler();
  }

  render() {
    const {
      currentCode,
      usdBefore,
      usdCurrent,
      gbpBefore,
      gbpCurrent,
      eurBefore,
      eurCurrent,
      eurDescription,
      usdDescription,
      gbpDescription,
      description,
      codeBefore,
      codeCurrent,
    } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="mt-5">
          <table className="table table-hover mx-auto ">
            <thead className="thead">
              <tr className="text-white">
                <th>Code</th>
                <th>Description</th>
                <th>Before</th>
                <th>Current Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fa fa-usd"></i>
                </td>
                <td>{usdDescription}</td>
                <td>{usdBefore}</td>
                <td>{usdCurrent}</td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-gbp"></i>
                </td>
                <td>{gbpDescription}</td>
                <td>{gbpBefore}</td>
                <td>{gbpCurrent}</td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-eur"></i>
                </td>
                <td>{eurDescription}</td>
                <td>{eurBefore}</td>
                <td>{eurCurrent}</td>
              </tr>
              <tr>
                <td>
                  <select value={currentCode} onChange={this.onCurrencyChanged}>
                    {currencies.map((currency) => (
                      <option key={currency.currency} value={currency.currency}>
                        {currency.currency}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{description}</td>
                <td>{codeBefore}</td>
                <td>{codeCurrent}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={this.onRefreshHandle}
          className="button mt-3"
          type="submit"
        >
          Refresh
        </button>
      </div>
    );
  }
}

export default App;
