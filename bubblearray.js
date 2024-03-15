// Learn these sorting algorithms and apply them to an unsorted array: Selection Sort
// Insertion Sort
// Bubble Sort



const  input = require("readline-sync")
let n = input.questionInt("Enter the size of array: ")
let array=[];
let i=0;

while( i<n )
{
    let a = input.questionInt("enter the number: ")
    array[i]=a;
    i++
     
}
  let j = 0 ;
    while(j<n-1){
        let k=0;
        while(k<n-1-j){
       if(array[k]>array[k+1]) {
       let p=array[k];
        array[k]=array[k+1]
        array[k+1]=p
       }
       k++
    }
    j++
}
 
 console.log("sorted array: ",array);
