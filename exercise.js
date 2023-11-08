//  Create a function to convert Excel sheet column title to its corresponding column number.

function convertExcel(column) {
    column = column.toUpperCase()
    let cl_no = 0
    let len = column.length;
    for (let i = 0; i < len; i++) {
        cl_no += (Math.pow(26, (len - i - 1)) * (column.charCodeAt(i) - 64));
    }
    return cl_no;
}
column = "C"
console.log("Kolom: " +column)
console.log( "Berada di nomor: " + convertExcel(column));
column = "AA"
console.log("Kolom: " +column)
console.log("Berada di nomor: "+convertExcel(column));
column = "AB"
console.log("Kolom: " +column)
console.log("Berada di nomor: "+convertExcel(column)); 

// Soal no 2
// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one ?

// Number
let num1 = [ 2,2,1 ]; num2 = [4,1,2,1,2]; num3 = [1]

// panjang Looping
let bnykData1 = 3; 
let bnykData2 = 5;
let bnykData3 = 3;

    // Function to find the 
    function findSingle(A, number) 
{ 
  
    // Iterate over every element 
    for (let i = 0; i < number; i++) { 
  
        // Initialize count to 0 
        let count = 0; 
        for (let j = 0; j < number; j++) { 
  
            // Count the frequency 
            // of the element 
            if (A[i] == A[j]) { 
                count++; 
            } 
        } 
  
        // jika frekuensi elemennya satu
        if (count == 1) { 
            return A[i]; 
        } 
    } 
  
    // jika tidak ada elemen yang ada paling banyak satu kali 
    return -1; 
} 
// Pemanggilan Function
console.log("Angka yang muncul satu kali adalah angka = " + findSingle(num1, bnykData1 )); 
console.log("Angka yang muncul satu kali adalah angka = " + findSingle(num2, bnykData2));
console.log("Angka yang muncul satu kali adalah angka = " + findSingle(num3, bnykData3));  


// Saol no 3
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once


function isAnagram(str1, str2) {
  // Menghapus spasi dan mengubahnya menjadi huruf kecil
  str1 = str1.replace(/\s/g, '').toLowerCase()
  str2 = str2.replace(/\s/g, '').toLowerCase()
  
  console.log([str1, str2])

  if (str1.length !== str2.length) {
    return false
  }

  // Urutkan karakter dalam string yang diberikan
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')

  // Compare the sorted String

  return str1 === str2
}

const checkOne = isAnagram('anagram','nagaram')
console.log(checkOne) // True
const checkTwo = isAnagram('rat','car')
console.log(checkTwo) // False

// Soal Nomor 4
// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top

// *Cara Pertama
function fib(n) 
{ 
if (n <= 1) 
    return n; 
return fib(n - 1) +  
       fib(n - 2); 
} 
  
// Returns number of  
// ways to reach s'th stair 
function countWays(s) 
{ 
    return fib(s + 1); 
} 
  
// Driver Code 
let dataSatu = 2; 
console.log("Number of ways = " + countWays(dataSatu));

let dataDua = 3;
console.log("Number of ways = " + countWays(dataDua));

// * Cara Kedua
function countWays(n) 
{ 
    let dp = []; 
    dp[0] = 1;  
    dp[1] = 1; 
    for (let i = 2; i <=n; i++) 
    { 
        dp[i]=dp[i-1]+dp[i-2]; 
    } 
    return dp[n]; 
} 
  
  
    // Driver Code 
    let n=2; 
    console.log("Number of ways = " + countWays(n));



function climStar(N) {
    if (N < 2) {
        return 1
        
    } else {
        return climStar (N-1) + climStar (N-2)
        
    }
    
   
}
 let result = 4
    console.log();
  
 
 
 



