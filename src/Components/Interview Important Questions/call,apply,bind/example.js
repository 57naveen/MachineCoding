let name  = { 
  firstname :  "naveen",
  lastname: "kishore",
}

let name2 = {
  firstname:"Sachine",
  lastname:"Tendulkar"
}

let name3 = {
  firstname:"Sam",
  lastname:"vel"
}

let printfulName = function (hometwon,state){
  console.log(this.firstname +  " "  + this.lastname + " from " + hometwon  + "," + state );
}

//function borrowing

//using call passing the extra argument in the comma seperated 
printfulName.call(name,'chennai','tamilnadu')

//using apply passing the extra argument in the array format 
printfulName.apply(name3,['chennai','tamilnadu'])

//using bind passing the extra argument  same like call but we need to call the function seperatly 
let printMyName = printfulName.bind(name2,'chennai','tamilnadu')

printMyName()