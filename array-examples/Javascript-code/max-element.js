/* 
finding maximum element in an array

Input:
n = 5
A[] = {1, 8, 7, 56, 90}
Output:
90
Explanation:
The largest element of given array is 90. 
*/

// writing a function to find maximum element in a given array

class Solution {
    largest_solution1(arr, n) {
       return  arr.reduce((prev, curr) => prev <= curr ? curr : prev);
    }
    largest_solution2(arr, n){
        return Math.max(...arr);
    }
}

