//listing the Array prototype

const arr = [1, 2, 3];

const ArrObj = Object.getOwnPropertyNames(Array.prototype);

//using for loop
for (const func in ArrObj) {
  console.log(ArrObj[func]);
}

//using map
ArrObj.map((a) => {
  console.log(a);
});
