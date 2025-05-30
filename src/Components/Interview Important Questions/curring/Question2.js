// evaluate(“sum”)(4)(2)  => 6 
// evaluate(“multiply”)(4)(2)  => 8
// evaluate(“divide”)(4)(2)  => 2 
// evaluate(“substract”)(4)(2)  => 2


 function evaluate(opertions){
  return function(a){
    return function(b){
       if(opertions === "sum") return a + b;
       else if(opertions === "multiply") return a * b;
       else if(opertions === "divide") return a / b;
       else if(opertions === "substract") return a - b
       else return "invalid operation"
    }
  }
 }

 console.log(evaluate("sum")(4)(2))
 console.log(evaluate("multiply")(4)(2));
 console.log(evaluate("divide")(4)(2));
 console.log(evaluate("substract")(4)(2));