// 4. Bài tập về shopping cart
const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
  { id: 2, name: "Phone", price: 500, category: "Electronics", stock: 10 },
  { id: 3, name: "Book", price: 20, category: "Books", stock: 50 },
  { id: 4, name: "Tablet", price: 300, category: "Electronics", stock: 8 },
];

const cart = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 5 },
  { productId: 4, quantity: 1 },
];

// 4.1 Tính tổng giá trị giỏ hàng
function calculateCartTotal(cart, products) {
  // Return tổng giá trị
  return cart.reduce((total, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    total += item.quantity * product.price;
    return total;
  }, 0);
}

console.log("4.1 -> Total Cart: ", calculateCartTotal(cart, products));

// 4.2 Kiểm tra stock có đủ cho cart không
function validateCartStock(cart, products) {
  // Return true/false và danh sách các sản phẩm không đủ stock
  return cart.every((item) => {
    const product = products.find((prod) => prod.id === item.productId);
    return product && item.quantity <= product.stock;
  });
}
console.log("4.2 -> IsValidate: ", validateCartStock(cart, products));

// 4.3 Tạo báo cáo mua hàng theo category
function createPurchaseReport(cart, products) {
  // Output: { Electronics: { items: 3, total: 2300 }, Books: { items: 5, total: 100 } }
  return cart.reduce((acc, item) => {
    const product = products.find((prod) => prod.id === item.productId);
    if (!acc[product.category]) {
      acc[product.category] = { items: 0, total: 0 };
    }
    acc[product.category].items += item.quantity;
    acc[product.category].total += product.price * item.quantity;
    return acc;
  }, {});
}

console.log(
  "4.3 -> Report by Category: ",
  createPurchaseReport(cart, products)
);
