function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let hashmap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let complement = target - num;
    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }
    hashmap.set(num, i);
  }
  return [];
}

let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target));

target = 23;
console.log(twoSum(numbers, target));
