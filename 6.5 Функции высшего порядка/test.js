function sum(a, b) {
      return a + b;
    }
    
    function subtraction(a, b) {
      return a - b;
    }
    
    function doubleOperator(f, a, b) {
      return f(a, b) * 2;
    }
    
    console.log(doubleOperator(sum, 3, 1)) 
    console.log(doubleOperator(subtraction, 3, 1))



 