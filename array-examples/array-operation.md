## Finding maximum element in an array

        let arr = [82, 5, 6, 46, 23];

- using "reduce" method

        arr.reduce((prev, curr) => prev <= curr ? curr : prev);

- using "Math.max" function

        Math.max(...arr);




