// Basic structure

// (function () {
//   // declare private vars and functions

//   return {
//     // declare public vars and functions
//   };
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = "Hello World";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN

// const ItemCtrl = (function () {
//   let data = [];

//   function add(item) {
//     data.push(item);
//     console.log("item added....");
//   }

//   function get(id) {
//     return data.find((item) => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get,
//   };
// })();

// ItemCtrl.add({ id: 1, name: "john" });
// ItemCtrl.add({ id: 2, name: "mark" });
// console.log(ItemCtrl.get(1));

// SINGLETON PATTERN

// const Singleton = (function () {
//   let instance;

//   function createInstance() {
//     const object = new Object({ name: "brad" });
//     return object;
//   }

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     },
//   };
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB);
// console.log(instanceA);

// FACTORY PATTERN

// function MemberFactory() {
//   this.createMember = function (name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMembership(name);
//     } else if (type === "standard") {
//       member = new StandardMembership(name);
//     } else if (type === "super") {
//       member = new SuperMembership(name);
//     }

//     member.type = type;

//     member.define = function () {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };

//     return member;
//   };
// }

// const SimpleMembership = function (name) {
//   this.name = name;
//   this.cost = "$5";
// };

// const StandardMembership = function (name) {
//   this.name = name;
//   this.cost = "$10";
// };

// const SuperMembership = function (name) {
//   this.name = name;
//   this.cost = "$15";
// };

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember("John Doe", "simple"));
// members.push(factory.createMember("Mary Smith", "standard"));
// members.push(factory.createMember("William lin", "super"));

// //console.log(members);

// members.forEach(function (member) {
//   member.define();
// });

//MEDIATOR PATTERN

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");
const mary = new User("Mary");

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);
chatroom.register(mary);

brad.send("hello jeff", jeff);
jeff.send("hey everyone!!");
