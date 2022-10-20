// // 1
// function betterSlice(s: unknown, index: unknown): unknown {
//     return s.slice(index);
// }
// betterSlice('Hello', 1);
// betterSlice('World', 3);
// // 2- type GroupBy - tylko 4 możliwości
// const groupBy: unknown = 'second';
// const groupBy2: unknown = 'minute';
// const groupBy3: unknown = 'hour';
// const groupBy4: unknown = 'day';
// // 3
// function toString(n: unknown): unknown {
//     return String(n);
// }
// toString(1);
// toString(2);
// toString(300);
// // 4
// const age: unknown = 18;
// const count: unknown = 0;
// const infinity: unknown = Infinity;
// const binary: unknown = 0b1010101;
// // 5
// const isAdmin: unknown = true;
// const isOpen: boolean = false;
// // 6
// function checkIsAdmin(user: unknown): unknown {
//     return user.isAdmin;
// }
// checkIsAdmin({
//     name: 'Adam',
//     surname: 'Kowalski',
//     age: 18,
//     isAdmin: false
// })
