// // 1
// function betterSlice(s: string, index: number): string {
//     return s.slice(index);
// }

// betterSlice('Hello', 1);
// betterSlice('World', 3);


// // 2- type GroupBy - tylko 4 możliwości

// type GroupBy = 'second' | 'minute' | 'hour' | 'day'

// const groupBy: GroupBy = 'second';
// const groupBy2: GroupBy = 'minute';
// const groupBy3: GroupBy = 'hour';
// const groupBy4: GroupBy = 'day';


// // 3
// function toString(n: number): string {
//     return String(n);
// }

// toString(1);
// toString(2);
// toString(300);


// // 4
// const age: number = 18;
// const count: number = 0;
// const infinity: number = Infinity;
// const binary: number = 0b1010101;

// // 5
// const isAdmin: boolean = true;
// const isOpen: boolean = false;

// // 6
// function checkIsAdmin(user:{name: string, surname: string, age: number, isAdmin: boolean}): boolean {
//     return user.isAdmin;
// }

// checkIsAdmin({
//     name: 'Adam',
//     surname: 'Kowalski',
//     age: 18,
//     isAdmin: false
// })