//Currying vs Partial application


//Partial Application
function sum(a){
  return function(b,c){
    return a+ b +c;
  }
}

const x = sum(5)

console.log(x(2,4));

// or

console.log(sum(5)(2,4))

//curring

function sum2(a)
{
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}

console.log(sum2(5)(4)(2))


// differnce 

//partail application passing three argument and  has two nested function 
//curring passing three argument and has three nested function