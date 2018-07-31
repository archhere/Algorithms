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
