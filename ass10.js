const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('orderPlaced', (orderId, item) => {
console.log(` Order Received! ID: ${orderId}, Item: ${item}`);
eventEmitter.emit('prepareFood', orderId, item);
});
eventEmitter.on('prepareFood', (orderId, item) => {
console.log(` Preparing your ${item}...`);
setTimeout(() => {
console.log(` ${item} is ready!`);
eventEmitter.emit('packFood', orderId, item);
}, 2000);
});
eventEmitter.on('packFood', (orderId, item) => {
console.log(` Packing your ${item}...`); 
setTimeout(() => {
console.log(` ${item} has been dispatched for delivery!`);
eventEmitter.emit('deliverFood', orderId, item);
}, 1500);
});
eventEmitter.on('deliverFood', (orderId, item) => {
console.log(` ${item} delivered successfully! Order ID: ${orderId}`);
console.log(`--------------------------------------`);
});
console.log(" Welcome to NodeFood Delivery System!\n");
eventEmitter.emit('orderPlaced', 101, 'Pizza');
eventEmitter.emit('orderPlaced', 102, 'Burger');
eventEmitter.emit('orderPlaced', 103, 'Pasta');