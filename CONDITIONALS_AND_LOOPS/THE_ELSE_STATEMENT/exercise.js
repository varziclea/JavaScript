/*
The current world record for high jumping is 2.45 meters.
You are given a program that receives as input a number that represents the height of the jump.

Task
Complete the code to:
1. output to the console "new record" if the number is more than 2.45,
2. output to the console "not this time" in other cases.

Sample Input
2.49

Sample Output
new record
*/

var height = parseFloat(readLine(), 10)
//your goes code here
if (height > 2.45) {
    console.log("new record")
}
else {
    console.log("not this time")
}