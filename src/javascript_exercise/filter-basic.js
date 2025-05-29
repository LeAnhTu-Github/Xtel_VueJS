// 5.1 Sắp xếp mảng objects theo thuộc tính
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
function sortByProperty(arr, prop) {
  // Code của bạn
  return arr.sort((a, b) => {
    let result = [];
    typeof a[prop] === "string"
      ? (result = a[prop].localeCompare(b[prop]))
      : (result = a[prop] - b[prop]);
    return result;
  });
}

// 5.2 Nhóm các objects theo thuộc tính
function groupByProperty(arr, prop) {
  // Code của bạn
  return arr.reduce((acc, cur) => {
    const key = cur[prop];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});
}

// Sử dụng:
// console.log("Sort by Age", sortByProperty(users, "age"));
// [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

// console.log("Sort by Name", sortByProperty(users, "name"));
// [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'John', age: 30 }]

// console.log("Group by age", groupByProperty(users, "age"));
/* Output:
{
    "25": [{ name: 'Alice', age: 25 }],
    "30": [{ name: 'John', age: 30 }],
    "35": [{ name: 'Bob', age: 35 }]
}
*/

// 5.3 Lọc và biến đổi dữ liệu
const products = [
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Book", price: 20, category: "Books" },
];
// Sử dụng:
const calculateTotalByCategory = (products) => {
  return products.reduce((acc, cur) => {
    if (!acc[cur.category]) {
      acc[cur.category] = 0;
    }
    acc[cur.category] += cur.price;
    return acc;
  }, {});
};
// console.log(calculateTotalByCategory(products));
/* Output: 
{
    "Electronics": 1500,
    "Books": 20
}
*/

const getProductStats = (products) => {
  return products.reduce((acc, cur) => {
    if (!acc[cur.category]) {
      acc[cur.category] = { count: 0, total: 0 };
    }
    acc[cur.category].count++;
    acc[cur.category].total += cur.price;
    return acc;
  }, {});
};
// console.log(getProductStats(products));
/* Output:
{
    "Electronics": {
        count: 2,
        total: 1500
    },
    "Books": {
        count: 1,
        total: 20
    }
}
*/
const filterProducts = (products, objFilter) => {
  const { minPrice, category } = objFilter;
  return products.filter(
    (product) => product.category === category && product.price >= minPrice
  );
};
console.log(
  filterProducts(products, { minPrice: 500, category: "Electronics" })
);
/* Output:
[
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Laptop', price: 1000, category: 'Electronics' }
]
*/

// ==========
