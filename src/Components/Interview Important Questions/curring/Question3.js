// infinte curring sum(1)(2)(3)...()


function add(a){
  return function (b)
  {
    if (b) return add(a+b)
    return a
  }
 
}

console.log(add(5)(2)(4)(8)());