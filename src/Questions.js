export const QUESTIONS = [
  {
    question: `
    function sum(a, ...b, c) {
      let sum = a + c;
      for(let i = 0; i < b.length; i++) {
        sum = sum + b[i];
      }
      return sum;
    }

    Output of sum(1, 2, 3, 4, 5) ?
    `,
    answer: "error",
  },
  {
    question: `
    function helloYou(obj) {
      obj = {
        name: "You",
        surname: "Yourself"
      };
    }
    
    function greetYou(obj) {
      if(obj.name === "You") {
        console.log("Hello You. You are greeted.");
      } else {
        console.log("Who are you!?");
      }
    }
    
    const me = {
      name: "Me",
      surname: "Myself"
    };
    
    helloYou(me);
    greetYou(me);

    What is the output?
    `,
    answer: "who are you!?"
  },
  {
    question: `
    function getFuncs() {
      const funcs = [];
      for(var i = 0; i < 10; i++) {
        funcs[i] = function() {
            return i;
        }
      }
      return funcs;
    }
    
    const funcs = getFuncs();

    What is the output of funcs[6]() ?
    `,
    answer: "10"
  },
  {
    question: `
    const obj = {
      num: 6,
      doubleNum: function() {
        function exec() {
            return this.num * 2;
        }
      }
    }
  
    const b = obj.doubleNum();
    console.log(b);
    `,
    answer: "undefined"
  },
  {
    question: `
    this.name = "Messi";

    const obj = {
      name: "Ronaldo",
      logName1() {
        setTimeout(() => console.log(this.name), 3000);
      },
      logName2: () => console.log(this.name)
    }

    obj.logName1();
    setTimeout(obj.logName2, 3000);

    What is the output of the above 2 statements?
    `,
    answer: "ronaldo,messi"
  },
  {
    question: `
    const number = {
      x: 5,
      sum() {
        let res = this.x;
        const args = [1,2,3];
        for(let i of args)
            res = res + i;
        return res;
      }
    }
    
    const sumFunc = number.sum.bind({x: 2});
    const result1 = sumFunc.bind({x: 4})();
    const result2 = sumFunc.apply({x: 4});
    console.log(result1 === result2, result1, result2);

    What is the output?
    `,
    answer: "true,8,8"
  },
  {
    question: `
    var length = 4;

    function callback() {
      console.log(this.length);
    }

    const object = {
      length: 5,
      method() {
        const func = arguments[0];
        func();
        arguments[0]();
      }
    };

    object.method(callback, 1, 2);

    What is the output?
    `,
    answer: "4,3"
  },
];
