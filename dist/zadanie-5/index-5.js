// // 1 enum
// enum UserType {
// }
// const user: UserType = UserType.SuperAdmin
// // 2 enum
// function checkUserType(type: UserType): unknown {
//     if (type === UserType.SuperAdmin) {
//         return 0
//     }
//     if (type === UserType.Admin) {
//         return 1
//     }
//     if (type === UserType.Manager) {
//         return 2
//     }
//     if (type === UserType.User) {
//         return 3
//     }
// }
// checkUserType(1);
// checkUserType(2);
// checkUserType(3);
// checkUserType(4);
// // 2 enum 
// export enum Size {
// }
// function displayString(s: string): void {
//     console.log(s);
// }
// function checkSize(size: unknown): unknown {
//     if (size === Size.Small) {
//         displayString(size);
//     }
//     if (size === Size.Medium) {
//         displayString(size);
//     }
//     if (size === Size.Large) {
//         displayString(size);
//     }
// }
// checkSize(Size.Small);
// checkSize(Size.Medium);
// checkSize(Size.Large);
