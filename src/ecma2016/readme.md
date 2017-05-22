# ECMA 2016 Features

####    Array.prototype.includes

        `Array.prototype.includes(value : any) : boolean`

        Examples:

        ```
            > ['a', 'b', 'c'].includes('a')
            true
            > ['a', 'b', 'c'].includes('d')
            false
        ```

####    Exponentiation operator (**)

        An infix operator for exponentiation

        produces the same result as

        `Math.pow(x, y)`

        Examples:
        ```
        let squared = 3 ** 2; // 9

        let num = 3;
        num **= 2;
        console.log(num); // 9

        ```

(If you're interested, try it in Chrome)
