export default class Greeter {
    constructor(userName = '') {
      this.userName = userName;
    }
  
    getGreeting() {
      if (this.userName) {
        return `Hello, ${this.userName}`;
      } else {
        return `Hello, Anonymous`;
      }
    }
  
    async getGreetingAsync() {
      return this.getGreeting();
    }
  }