var fruits=['apple','banana','kiwi','orange','lichi']

var len=fruits.length  //to find length of the array
console.log(len); 

fruits.push("grapes")  //to add element at the end
console.log(fruits);

fruits.pop()   //to delete element at the last
console.log(fruits); 

fruits.unshift("pine")
console.log(fruits);  //to add element at the beginning

fruits.shift()
console.log(fruits);  //to delete element from beginning

fruits.splice(3,0,'papaya')  //to add papaya at index 3 and delete nothing
console.log(fruits);

fruits.reverse()    //it will reverse the entire array
console.log(fruits);

var fruits2=['mango','berry']
var friuts3=fruits.concat(fruits2)  //to merge two arrays
console.log(friuts3);

//Loops-iterating over each element of the array
 for(var i=0;i<=friuts3.length-1;i++){  //declaring an array
 console.log(friuts3[i]);               //printing elements of the array
 }
