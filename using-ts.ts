//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output


//  Declaring three constants.  
//  The ! operator tells TS that the element WILL exist (ignores possible null check)
//  as HTMLInputElement is type-casting.  Casting the element into HTMLInputEleemnt

const btn1 = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;


//  Declaring basic function
//  Function Name: add
//  Parameters?  num1 and num2, both are number datatypes
//  Return a number
function add(num1: number, num2: number) : number {
  return num1 + num2;
}

//  Add a listener for the click event on button.  Write the output to the console
//  + operator before the element converts the data to number format (string to number)
btn1.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
