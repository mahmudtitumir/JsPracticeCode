console.log(sum([12, 4, 9, 5]));

function sum(...nums) {
  if (nums.length === 1 && Array.isArray(nums)) nums = [...nums[0]];
  return nums.reduce((a, b) => a + b);
}
