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
