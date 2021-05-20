/* Question 1: Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.*/

let convertFahrToCelsius = (fahr) => {
  // checking if the fahr is a valid input
  if (isNaN(Number(fahr))){
    // fahr is not a valid input
    return `${JSON.stringify(fahr)} is not a valid number but a/an ${Array.isArray(fahr) ? "array": "object"}.`
  } else {
    // fahr is a valid input
    let c = (fahr - 32) * (5/9)
    return Number(c.toFixed(4));
  }
}  //end of function


/* Question 2: Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.*/

let checkYuGiOh = (n) => {
  // Checking for invalid parameter
  if ( isNaN(Number(n)) ) {
    // n is not a number, hence return invalid parameter
    return `invalid parameter: ${n}`
  } //end of if function
  // helper function
  let getYuGiOh = (number) => {
    let answer = "";
    if ( number % 2 === 0){
    
      answer +="yu";
    } //end of if statement
    if ( number % 3 === 0) {
      
      answer = ( answer)? answer+"-"+"gi" : "gi";
    } // end of if statement
    if ( number % 5 === 0) {
      
      answer = ( answer ) ? answer+"-"+"oh" : "oh";
    } //end of if statement
    
    return (answer) ? answer : number; 
  } //end of getYuGiOh

  let result_Arr = [] 
  let processed_n = parseInt(n)  
  for (let number = 1; number <= processed_n; number++) {
  
    result_Arr.push( getYuGiOh(number) )
  } // End of forloop
  return result_Arr
} // End of the checkYuGiOh

