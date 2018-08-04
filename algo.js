// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Naive solution  Time Complexity O(N **2)


// ---------------------------------------------------------------------
// Solution 1:
// ---------------------------------------------------------------------

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if ((nums[i] + nums[j]) === target) {
                return [i,j];
            }
        }
    }
    return false;
};

// ---------------------------------------------------------------------
 // Solution 2:
// ---------------------------------------------------------------------


var twoSum = function(nums,target) {
  let resultHash = {};
  for(let i=0; i<nums.length; i++){
    resultHash[nums[i]] = i;
    let complement = target - nums[i];
    if (typeof resultHash[complement] !== 'undefined' &&
    resultHash[complement] !== i) return [resultHash[complement],i];
  }
  return false;
};


// ---------------------------------------------------------------------


// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}
 */

 // This solution wont work for a linked list having 32 bit system or even
 // a 64 bit system. So the 2nd solution wherein we add the numbers in the
 // linked list itself is the only one that will work.

// ---------------------------------------------------------------------
// Solution 1
// ---------------------------------------------------------------------

var addTwoNumbers = function(l1, l2) {
    let result = linkedListToNum(l1) + linkedListToNum(l2);
    let arr1 = [];
    result.toString().split('').forEach(val => arr1.unshift(parseInt(val)));
    function linkedListToNum(l1) {
      let arr = [];
      while (true) {
        if (l1 === null) break;
        arr.unshift(l1.val.toString());
        l1 = l1.next;

      }
        return parseInt(arr.join(''));
    }
   return arr1;
};

// ---------------------------------------------------------------------
// Solution 2
// ---------------------------------------------------------------------

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

 var addTwoNumbers = function(l1, l2) {

   let final  = new ListNode(0);
   let result = final;
   let carryOver = 0;
   while (l1 !== null || l2 !== null) {
     let x;
     let y;
     if (l1 !== null) {
       x = l1.val;
     } else x = 0;
     if (l2 !== null)  {
       y = l2.val;
     } else y = 0;

     let sum = carryOver + x + y;

     carryOver = Math.floor(sum / 10);
     result.next = new ListNode(sum % 10);
     result = result.next;

     if (l1 != null) l1 = l1.next;
     if (l2 != null) l2 = l2.next;

   }

   if (carryOver > 0) {
       result.next = new ListNode(carryOver);
   }
   return final.next;

 };

// ---------------------------------------------------------------------

// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
//


// ---------------------------------------------------------------------
// Solution 1
// ---------------------------------------------------------------------


var lengthOfLongestSubstring = function(s) {
 if (s === " ") return 1;
 let counterhash = {};
 let arr = [];
 let count = 0;
 let maxLength = 0;
 for(let i=0; i<s.length; i++){
   if ((count === 0) || (typeof counterhash[s[i]] === 'undefined')) {
       counterhash[s[i]] = count;
       arr.push(s[i]);
       count += 1;
       if (count > maxLength) maxLength = count;
   } else {
       let repeatingIndex = counterhash[s[i]];
       arr.push(s[i]);
       arr = arr.slice(repeatingIndex+1);
       counterhash = {};

       for(let idx = 0; idx < arr.length; idx++){
         counterhash[arr[idx]] = idx;
       }
       count = arr.length;

       if (count > maxLength) maxLength = count;
   }
 }
  return maxLength;
};


// ------------------------------------------------------------------------

// Create a function that takes two or more arrays and returns an array
// of the symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
// the mathematical term "symmetric difference" of two sets is the set of
// elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
// For every additional symmetric difference you take (say on a set D = {2, 3}),
// you should get the set with elements which are in either of the two the
// sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
// The resulting array must contain only unique values (no duplicates).

// ---------------------------------------------------------------------
// Solution 1
// This solution has time complexity of O(n**3)
// ---------------------------------------------------------------------



function sym(args) {
  let resultHash = {};

  //converted arguments into an array
  let array = Array.from(arguments);

  // Got unique elements in each sub array and then put them in a counter hash
  array.forEach((arr)=> {
    let uniqueArr = [];
    arr.forEach((el)=>{
      if (!uniqueArr.length || !uniqueArr.includes(el)){
        uniqueArr.push(el);
      }
    });
    uniqueArr.forEach((el)=> {
      if (typeof resultHash[el] === 'undefined'){
        resultHash[el] = 1;

      } else {
        console.log(resultHash[el]);
        resultHash[el] += 1;
      }
    });
  });

  // Got array of all keys and then filtered based on values for each keys in the resultHash
  let result = Object.keys(resultHash);
  return  result.filter(el => resultHash[el]%2 !== 0).map(el => parseInt(el));
}

// ------------------------------------------------------------------------

// Compare and update the inventory stored in a 2D array against a second
// 2D array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be
// in alphabetical order by item.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
// Write your own code.

// ---------------------------------------------------------------------
// Solution 2
// This solution has time complexity of O(n**3)
// ---------------------------------------------------------------------



function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let arrayHash = {};

    arr1.forEach((el,idx) => {
      arrayHash[el[1]] = [el[0],idx,'array1'];
    });

    arr2.forEach((el,idx)=> {
      if (typeof arrayHash[el[1]]=== 'undefined'){
        arrayHash[el[1]] = [el[0],arr1.length,'array2'];
        arr1.push(el);
      } else if(arrayHash[el[1]][2]=== 'array1'){
        let index = arrayHash[el[1]][1];
        let prevVal = arr1[index][0];
        arrayHash[el[1]][2] = 'array2';
        arr1[index] = [prevVal+el[0],el[1]];
      } else if(arrayHash[el[1]][2]=== 'array2'){
        let index = arrayHash[el[1]][1];
        let prevVal = arr1[index][0];
        let newVal = el[0];
        arr1[index] = [prevVal+newVal,el[1]];
      }
    });
    return arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1);

}

// ------------------------------------------------------------------------

// A binary gap within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a
// binary gap of length 2. The number 529 has binary representation
// 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one binary
// gap of length 1. The number 15 has binary representation 1111 and has
// no binary gaps. The number 32 has binary representation 100000 and has
// no binary gaps.
//
// Write a function:
//
// function solution(N);
//
// that, given a positive integer N, returns the length of its longest
// binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has
// binary representation 10000010001 and so its longest binary gap is of
// length 5. Given N = 32 the function should return 0, because N has
// binary representation '100000' and thus no binary gaps.

function solution(N) {
    let binaryGap = 0;
    let foundBinaryGap = false;
    let i=0;
    while(N > 0){
        // if N is divisible by 2,this means, it will convert to 0. But since we want it to be enclosed
        // between 1, we will keep a count on 0s with i and calculate binary gap only when foundBinaryGap
        // is true (this flag is turned on only when we encounter a number that will return 1 when % 2 is
        // used.)
        if (N % 2 === 0) {
            i += 1;
        } else {
           if(i > binaryGap && foundBinaryGap===true) {
            binaryGap = i;
          }

          foundBinaryGap = true;
          i = 0;
        }
        N = Math.floor(N/2);
    }
    return binaryGap;
}


// ------------------------------------------------------------------------


// Using the JavaScript language, have the function FirstReverse(str) take the
// str parameter being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders" then your
// program should return the string sredoC dna dlroW olleH.
// Sample Test Cases
// Input:"coderbyte"
//
// Output:"etybredoc"
//
//
// Input:"I Love Code"
//
// Output:"edoC evoL I"

function FirstReverse(str) {

  // code goes here
  let result = [];
  str.split(' ').forEach((char) => {
      result.unshift(reverse(char));
  });

  function reverse(char){
      char = char.split('');
      for(let i=0; i<char.length/2; i++){
          [char[i],char[char.length-i-1]] = [char[char.length-i-1],char[i]];
      }
      return char.join('');
  }
  return result.join(' ');

}

// ------------------------------------------------------------------------

// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.
//
// string_include_key?("cadbpc", "abc") => true
// string_include_key("cba", "abc") => false

function stringIncludeKey(string, key) {
  if (!key.length) return true;
  let firstKey = key[0];
  let firstIndex = string.indexOf(firstKey);
  if (firstIndex < 0) return false;
  return stringIncludeKey(string.slice(firstIndex+1),key.slice(1));
}

// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

function deepDup(arr) {
  let result = [];
  arr.forEach((el) => {
    if (el.constructor.name === 'Array') {
      result.push(deepDup(el));
    } else result.push(el);
  });
  return result;
}

// ------------------------------------------------------------------------

// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
  if (num === 0) return [];
  if (num === 1) return [1];
  let prevFact = factorialsRec(num-1);
  return prevFact.concat(prevFact[prevFact.length-1] * (num-1));

}

// ------------------------------------------------------------------------

// Return the number of total permutations of the provided string that don't
// have repeated consecutive letters. Assume that all characters in the provided
// string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't
// have the same letter (in this case a) repeating.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
// Write your own code.

// -------helper function------

function permutations(str){
  let array = str.split('');
  let result = [];

  function perms(arr,temp = []){
    if(!arr.length) {
      result.pust(temp);
    } else {
      for(let i = 0; i< arr.length; i++){
        let curr = arr.slice();
        let nextVal = curr.splice(i,1);
        perms(curr,temp.concat(nextVal));
      }
    }
    return result;
  }

  return perms(array);

}

// ------------------------------------------------------------------------

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.


var findMedianSortedArrays = function(nums1, nums2) {
   let result = [];
   while (nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
          result.push(nums1.shift());
      } else result.push(nums2.shift());
   }
    result = (result.concat(nums1)).concat(nums2);
    let midIdx = Math.floor(result.length/2);
    if (result.length % 2 === 0) {
      return (result[midIdx-1] + result[midIdx])/2;
    } else {
      return result[midIdx];
    }
};


// ------------------------------------------------------------------------
