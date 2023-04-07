console.log("This is a typescript file!!!")

interface User {
    name: string;
    id: number;
    isAdmin: boolean;
};

let newUser: User = {
    name: "Jane",
    id: 1,
    isAdmin: false
};

// let name1: any = "hello";
// name1 = 42;
// name1 = false;

// function printHello(): void {
//     console.log("Hello!");
//   }

// printHello();

// function throwError(): never {
//     throw new Error("An error occurred!");
//   }

//   throwError();

function addUser(user: User): string {
    return user.name + " added successfully";
}
console.log(addUser(newUser));

