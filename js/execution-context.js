
const runHoistingDemo = () => {
    console.log("========================================");
    console.log("1. HOISTING DEMO");
    console.log("========================================");
    
    
    console.log("Accessing 'x' before declaration (var):", x); // undefined
    var x = 10;
    console.log("After assignment:", x); // 10
    
    let y = 20;
    console.log("let variable after declaration:", y);
    
    const z = 30;
    console.log("const variable after declaration:", z);
    
    console.log("");
    console.log("Key Takeaway:");
    console.log("- var is hoisted and initialized to undefined");
    console.log("- let and const are in Temporal Dead Zone until declaration");
    console.log("========================================\n");
};

const runFunctionHoistingDemo = () => {
    console.log("========================================");
    console.log("2. FUNCTION HOISTING DEMO");
    console.log("========================================");
    
  
    console.log("Calling sayHello() before declaration:");
    sayHello(); 
    
    function sayHello() {
        console.log("Hello from a function declaration!");
    }
    
    console.log("");
    console.log("Function Expression (not hoisted):");
  
    var sayGoodbye = function() {
        console.log("Goodbye from a function expression!");
    };
    
    console.log("Calling sayGoodbye() after declaration:");
    sayGoodbye();
    
    console.log("");
    console.log("Arrow Function (not hoisted):");
    
    
    const greet = () => console.log("Hi from an arrow function!");
    console.log("Calling greet() after declaration:");
    greet();
    
    console.log("");
    console.log("Key Takeaway:");
    console.log("- Function declarations are fully hoisted");
    console.log("- Function expressions and arrow functions are NOT hoisted");
    console.log("========================================\n");
};

const runCallStackDemo = () => {
    console.log("========================================");
    console.log("3. CALL STACK DEMO");
    console.log("========================================");
    
    console.log("Watch the call stack in browser DevTools:");
    console.log("");
    
    function first() {
        console.log("1. first() - START (pushed to stack)");
        second();
        console.log("5. first() - END (popped from stack)");
    }
    
    function second() {
        console.log("2. second() - START (pushed to stack)");
        third();
        console.log("4. second() - END (popped from stack)");
    }
    
    function third() {
        console.log("3. third() - ONLY (pushed then popped)");
    }
    
    first();
    
    console.log("");
    console.log("Call Stack Visualization:");
    console.log("┌─────────────┐");
    console.log("│  third()    │ ← Top (currently executing)");
    console.log("├─────────────┤");
    console.log("│  second()   │");  
    console.log("├─────────────┤");
    console.log("│  first()    │");
    console.log("├─────────────┤");
    console.log("│  Global     │ ← Bottom");
    console.log("└─────────────┘");
    console.log("");
    console.log("Key Takeaway:");
    console.log("- LIFO: Last In, First Out");
    console.log("- Each function call adds to the stack");
    console.log("- When function returns, it's removed from stack");
    console.log("========================================\n");
};

const runScopeDemo = () => {
    console.log("========================================");
    console.log("4. GLOBAL vs FUNCTION SCOPE DEMO");
    console.log("========================================");
    

    var globalVar = "I'm global (var)";
    let globalLet = "I'm global (let)";
    const globalConst = "I'm global (const)";
    
    console.log("Global Scope Variables:");
    console.log("- globalVar:", globalVar);
    console.log("- globalLet:", globalLet);
    console.log("- globalConst:", globalConst);
    console.log("");
    
    function checkScope() {
  
        var functionVar = "I'm function scoped (var)";
        let functionLet = "I'm block scoped (let)";
        const functionConst = "I'm block scoped (const)";
        
        console.log("Inside checkScope() function:");
        console.log("- Can access globalVar:", globalVar);
        console.log("- functionVar:", functionVar);
        console.log("- functionLet:", functionLet);
        
        if (true) {
        
            let blockLet = "I'm block scoped in if";
            var blockVar = "I ignore block scope (var)";
            const blockConst = "I'm block scoped in if";
            
            console.log("");
            console.log("Inside if block:");
            console.log("- blockLet:", blockLet);
            console.log("- blockVar:", blockVar);
        }
        
      
        console.log("");
        console.log("Outside if block (but inside function):");
        console.log("- blockVar accessible:", blockVar);
    }
    
    checkScope();
    
    console.log("");
    console.log("Outside function:");
    console.log("- globalVar still accessible:", globalVar);
  
    
    console.log("");
    console.log("Scope Chain:");
    console.log("┌────────────────────────────┐");
    console.log("│  Block Scope (if/for/etc)  │");
    console.log("│  - let, const respected    │");
    console.log("│  - var ignores this        │");
    console.log("├────────────────────────────┤");
    console.log("│  Function Scope            │");
    console.log("│  - All vars here           │");
    console.log("├────────────────────────────┤");
    console.log("│  Global Scope              │");
    console.log("│  - Accessible everywhere   │");
    console.log("└────────────────────────────┘");
    console.log("========================================\n");
};


const runThisDemo = () => {
    console.log("========================================");
    console.log("5. 'this' KEYWORD DEMO");
    console.log("========================================");
    

    console.log("In global context (module), 'this' is:", this);
    console.log("(In browser global scope, this === window)");
    console.log("");
    
    
    const person = {
        name: "Ali",
        age: 25,
  
        greet: function() {
            console.log("In regular method:");
            console.log("- this.name:", this.name); // "Ali"
            console.log("- this refers to:", this);
        },
        greetArrow: () => {
            console.log("In arrow function method:");
            console.log("- this.name:", this?.name); 
            console.log("- Arrow function uses enclosing 'this'");
        }
    };
    
    console.log("Calling person.greet() - regular function:");
    person.greet();
    console.log("");
    
    console.log("Calling person.greetArrow() - arrow function:");
    person.greetArrow();
    console.log("");
    
    
    function User(name) {
        this.name = name;
        this.display = function() {
            console.log("Constructor this.name:", this.name);
        };
    }
    
    const user1 = new User("Mona");
    console.log("Constructor function (new keyword):");
    user1.display();
    console.log("");
    

    const obj = {
        name: "MyObject",
        delayedRegular: function() {
            setTimeout(function() {
                console.log("Regular function in setTimeout:");
                console.log("- this.name:", this?.name); 
            }, 100);
        },
        delayedArrow: function() {
            setTimeout(() => {
                console.log("Arrow function in setTimeout:");
                console.log("- this.name:", this.name);
            }, 200);
        }
    };
    
    console.log("setTimeout example (check console after 200ms):");
    obj.delayedRegular();
    obj.delayedArrow();
    
    console.log("");
    console.log("'this' Summary:");
    console.log("┌────────────────────────────────────────┐");
    console.log("│ Context          │ 'this' value        │");
    console.log("├────────────────────────────────────────┤");
    console.log("│ Global           │ window (browser)    │");
    console.log("│ Object method    │ The object          │");
    console.log("│ Arrow function   │ Enclosing scope     │");
    console.log("│ Constructor      │ New instance        │");
    console.log("│ Event handler    │ Element             │");
    console.log("└────────────────────────────────────────┘");
    console.log("========================================\n");
};

const runES6Demo = () => {
    console.log("========================================");
    console.log("6. ES6 FEATURES USED IN PROJECT");
    console.log("========================================");
    
    
    console.log("1. let & const:");
    let mutableVar = "can change";
    mutableVar = "changed!";
    const immutableVar = "cannot reassign";
    console.log("- let (reassigned):", mutableVar);
    console.log("- const:", immutableVar);
    console.log("");
    
  
    console.log("2. Arrow Functions:");
    const add = (a, b) => a + b;
    const square = x => x * x;
    const sayHi = () => "Hi!";
    console.log("- add(3, 4):", add(3, 4));
    console.log("- square(5):", square(5));
    console.log("- sayHi():", sayHi());
    console.log("");
    
  
    console.log("3. Template Literals:");
    const name = "World";
    const greeting = `Hello, ${name}! Today is ${new Date().toDateString()}`;
    console.log("- Result:", greeting);
    console.log("");
    
  
    console.log("4. Destructuring:");
    const [first, second, third] = [1, 2, 3];
    console.log("- Array [first, second, third]:", first, second, third);
    
    const { fname, age, city = "Unknown" } = { fname: "Ali", age: 25 };
    console.log("- Object { fname, age, city }:", fname, age, city);
    console.log("");
    

    console.log("5. Spread Operator:");
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log("- [...arr1, 4, 5]:", arr2);
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    console.log("- { ...obj1, c: 3 }:", obj2);
    console.log("");
    
  
    console.log("6. Rest Parameters:");
    const sumAll = (...numbers) => numbers.reduce((a, b) => a + b, 0);
    console.log("- sumAll(1, 2, 3, 4, 5):", sumAll(1, 2, 3, 4, 5));
    console.log("");
    
  
    console.log("7. Default Parameters:");
    const greet = (name = "Guest") => `Hello, ${name}!`;
    console.log("- greet():", greet());
    console.log("- greet('Mona'):", greet("Mona"));
    console.log("");
    
    
    console.log("8. Array Methods (map, filter, reduce):");
    const numbers = [1, 2, 3, 4, 5];
    
    const doubled = numbers.map(n => n * 2);
    console.log("- map (n => n * 2):", doubled);
    
    const evens = numbers.filter(n => n % 2 === 0);
    console.log("- filter (n % 2 === 0):", evens);
    
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log("- reduce (sum):", sum);
    console.log("");
    
    
    console.log("9. Object Shorthand:");
    const x = 10, y = 20;
    const point = { x, y }; 
    console.log("- { x, y }:", point);
    console.log("");
    
  
    console.log("10. Enhanced Object Literals:");
    const calculator = {
        
        add(a, b) { return a + b; },
        
        ["operation" + "Type"]: "math"
    };
    console.log("- calculator.add(5, 3):", calculator.add(5, 3));
    console.log("- calculator.operationType:", calculator.operationType);
    
    console.log("");
    console.log("========================================");
    console.log("All ES6 features demonstrated!");
    console.log("========================================\n");
};


const initDemoPage = () => {
    
    const hoistingBtn = document.getElementById('hoisting-demo');
    if (hoistingBtn) {
        hoistingBtn.addEventListener('click', runHoistingDemo);
    }

    const functionHoistingBtn = document.getElementById('function-hoisting-demo');
    if (functionHoistingBtn) {
        functionHoistingBtn.addEventListener('click', runFunctionHoistingDemo);
    }

    const callStackBtn = document.getElementById('callstack-demo');
    if (callStackBtn) {
        callStackBtn.addEventListener('click', runCallStackDemo);
    }

    const scopeBtn = document.getElementById('scope-demo');
    if (scopeBtn) {
        scopeBtn.addEventListener('click', runScopeDemo);
    }


    const thisBtn = document.getElementById('this-demo');
    if (thisBtn) {
        thisBtn.addEventListener('click', runThisDemo);
    }

    const es6Btn = document.getElementById('es6-demo');
    if (es6Btn) {
        es6Btn.addEventListener('click', runES6Demo);
    }

    console.log("========================================");
    console.log("Execution Context Demo Page Loaded!");
    console.log("Click the buttons to run each demo.");
    console.log("========================================\n");
};

document.addEventListener('DOMContentLoaded', initDemoPage);

export {
    runHoistingDemo,
    runFunctionHoistingDemo,
    runCallStackDemo,
    runScopeDemo,
    runThisDemo,
    runES6Demo
};
