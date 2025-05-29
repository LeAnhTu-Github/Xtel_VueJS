// 1.1 Tìm số lớn nhất và nhỏ nhất trong mảng
const arr = [5, 2, 9, 1, 7, 6, 3];
function findMinMax(arr) {
  return Math.max(...arr);
}

// 1.2 Tính trung bình cộng của mảng
function calculateAverage(arr) {
  // Code của bạn
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// 1.3 Đảo ngược mảng mà không dùng reverse()
function reverseArray(arr) {
  // Code của bạn
  const result = [];
  arr.forEach((_, i) => {
    result.push(arr[arr.length - 1 - i]);
  });
  return result;
}

console.log("1.1 Number max:", findMinMax(arr));

console.log("1.2 Number Average:", calculateAverage(arr));

console.log("1.3 Array Reverse:", reverseArray(arr));
