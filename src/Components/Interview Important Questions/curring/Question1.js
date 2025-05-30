

//Convert sum(2,6,1) to sum(2)(6)(1)

//Normal way : 

function sum (a,b,c){
  return a+b+c
}


console.log(sum(2,6,1))

//curring function

function sum2(a){
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}

console.log(sum2(2)(6)(1))

