/**String Manipulation Functions: */

// function rev(str) {
//     revS='';
//     for (let i = str.length - 1; i >= 0; i--){
//       revS+=str[i];
//     }
//    return revS; 
// }
// const rep = rev('hello');
// console.log(rep)
/*_________________________________________________________*/
 
// function countS(str) {
//     let c=0;
//     let i=0;
//     while (str[i]) {
//         c++;
//         i++;
//     }
//     return c ;
// }

// const con = countS('hello')
// console.log(con);

/*________________________________________________________*/


// function capitalizeWords(sentence) {
//     return sentence
//       .split(' ') 
//       .map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  
//       )
//       .join(' '); 
// }
  
// const sentence = "oumayma is hero.";
// const capitalizedSentence = capitalizeWords(sentence);
// console.log(capitalizedSentence);
  

/*_________________________________________________________*/


/**Array Functions: */

// function MaxMin(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]> max){
//             max = arr[i];
//         }
//         if(arr[i]< min){
//             min = arr[i]
//         }
//     }
//     return  [max,min];
// }

// const app=[4,10,20,30,6,80];
// const opp= MaxMin(app);
// console.log(opp);
/*________________________________________________________________*/

// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];  
//     }
//     return sum;
// }

// const arry=[10,20,30,40];
// const err = sumArray(arry);
// console.log(err);
/*_________________________________________________________________*/

// function filterArray(arr, f) {
//     let arrfil=[];
//     for(let i=0; i < arr.length;i++){
//         console.log(arr[i], f(arr[i]))
//         if(f(arr[i])){
//             arrfil.push(arr[i])
//         }
//     }
//     console.log(arrfil)
//    return arrfil ; 
// }
// function isPair(x){
    
//     return x % 2 === 0;    
    
// }
// const arry=[10,13,7, 20];
// const err = filterArray(arry, isPair);
// console.log(err);
/*_________________________________________________________________*/

/**Mathematical Functions: */

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;  
//     }
//     return result;
// }

// let dd = factorial(6);
// console.log(dd);
/*________________________________________________________________*/

// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= n/2; i++) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }
    
//     return true;  
// }

// let rr = isPrime(8)
// console.log(rr);
/*____________________________________________________________________*/

// function generateFibonacci(n) {
//     let fibonacci = [];

//     if (n <= 0) {
//         return fibonacci;
//     }
//     else if(n<2) {
//         fibonacci.push(0);  
//         return fibonacci;  
//     }
//     else if(n<3) {
//         fibonacci.push(0,1)
//         return fibonacci;  
//     }
//     else{
//         fibonacci.push(0,1)
//         for (let i = 2; i < n; i++) {
//             fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//         }
//         return fibonacci;
//     }
// }

// let hh = generateFibonacci(6);
// console.log(hh);

