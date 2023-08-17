# Array

## Array Intialization

- initialize array with zero elements
        
        let arr1 = [];  // blank array.
        let arr2 = new Array();  // blank array.

- initialize array with some elements.

        let arr1 = [1, 2, 3, 4, 5];  // array containing five elements.
        let arr2 = new Array(1, 2, 3, 4, 5);  // array containing five elements.

- initialize array with one element.

        let arr1 = [2];  // array containing one element.
        let arr2 = new Array(2);  // array containing two undefined element.

- initialize array with one element, except integer elements.

        let arr2 = new Array("two");  // array containing one element.

## Array Traversing

- using "for" loop (other loops working are same)
        
        for(let index=0; index<arr.length; index++) {
            arr[index];  // accessing every element of array
        }

- using "for-in" loop
        
        for(let index in arr) {
            arr[index];  // accessing every element of array
        }

- using "for-of" loop
        
        for(let value in arr) {
            value;  // accessing every element of array
        }

- using "for-of" loop with index
        
        for(let [index, value] in arr) {
            value;  // accessing every element of array
            index;  // accessing every index of array
        }

- using "for-each" function

        arr.forEach((element, index) => {
            element;  // accessing every element of array
            index;  // accessing every index of array
        });

- check that every element of array pass a test or not
  
        arr.every(val => val < 10);  // true, if every element is less than 10, else false.

- check that some element of array pass a test
        
        arr.some(val => val < 10);  // true, if any element is less than 10, else false.

- Filter the array on conditions

        arr.filter(val => val % 2);  // return an array of odd eleemnt

- Reduce the array

        // adding all element of array
        arr.reduce((prev, curr) => prev+curr);  // curr: arr[i] and prev: arr[i-1]

- using "map" function (returns new array)

        arr.map((element, index) => {
            element;  // accessing every element of array
            index;  // accessing every index of array
        });