/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let len1 = m - 1
//   let len2 = n - 1
//   let len = m + n - 1

//   while (len1 >= 0 && len2 >= 0) {
//     nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
//   }

//   if (len2 >= 0) {
//     nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
//   }

//   return nums1
// }

var merge = function (nums1, m, nums2, n) {
  nums1.length = m
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
  return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([0], 0, [1], 1))
