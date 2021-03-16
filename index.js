// Junior Dev Struggle Bus MeetUp
// Monday, March 15
// Lead by Kirk Hilse

// 1. Sort a string of characters alphabetically

// "xirb" => "birx"
// "e" => "e"
// "" => ""

// Can't use the Sort method
// Bubble Sort 

// make an array of all the characters
// iterate over input string
// check to see if following character has a lower index in alphabet 
// swap using ES6 swap
// exit while loop once sorting is complete

// "x i r b"
//  0 1 2 3
// "i x r b"
// "i r x b" decrement index by 1
// "i r b x"

let str = "xirb"

str.split("")



// 2. Given a 2D array of numbers, find a sub-array of numbers, if it exists in the larger array, then return the top-left number 

// Split our 2D array into chunks of some size and distribute them
// Unroll the sub-array.
// Iterate through the entire 2D array and note where ever number in the 1D array is.
// If we encounter a number in the sub-array, search based on its nearest neighbors.
// 
// 



// 3. Given a string of characters and one character in particular, find the number of times that character appears in the source string 

let myStr = "The dog eats his food."
let myChar = "."
// find "s"

function countTheLetter(string, c){
  let d = new Object()

  for (i=0; i<string.length; i++){
    if (d[string[i]]){
      d[string[i]] = d[string[i]] + 1
    } else { 
    d[string[i]] = 1
    }
  }
  return d[c]
}

countTheLetter(myStr, myChar)



// 4. Given an input number greater than one, print out the fibonacci sequence up to that number
//Fibonacci: 1, 2, 3, 5, 8, 13, 21, 34, ect.
//
function upToFib(n){
  let arr = [1, 1]
  //while the last item in the array is less than or equal to n, continue building the Fib sequence array
  while(arr[arr.length - 1] < n){
    //take the last item in the array and add the second to last item in the array, then append that number to the array 
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr
}

upToFib(34)



// 5. Tell me whether a particular integer is prime. Prime means it can't be divided by anything other than one and itself

// Ex1. input = 27
// Ex1. output = true

// Ex2. input = 33
// Ex2. output = false

function isPrime(n){
  for (i=2; i<n ; i++){
    if (n % i === 0){
      return false
    }
    return true
  }
}

isPrime(83)


// 6. for any list of numbers, give me the sum of all of the numbers divisible by 4

// input: [44, 55, 63, 80, 33, 120]
// 44 + 80 + 120
// output: 244
let A = [44, 55, 63, 80, 33, 120]

function divisibleByFour(arr){
  let sum = 0

  arr.forEach(function(n){
    if(n % 4 === 0){
      sum += n
    }
  })

  return sum
}

divisibleByFour(A)