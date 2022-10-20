import { getAutomaticTypeDirectiveNames } from "../node_modules/typescript/lib/typescript";

let test = 'Darek'

test = '1'
test = 'false'

const getHeight = ({height}) => {

    return height;

}

getHeight({height: 10})

const s:string = "string"

type Count = number 

const count: Count =  8

const arr: (number | string)[] = [1, 2, 3]

type FruitAndStrings = (number | string |object)[]

const arr2: FruitAndStrings = ['banana', 1, 3, [] ]


type Names = (string)[]

const imiona: Names = ['Iwona', 'Ewa', 'Maciek', 'Robert']

imiona[0]

type User = {

    name: string; 
    age: number;
    isAdmin?: boolean; 
    // isAdmin: boolean | undefined;
}

const user: User = {

    name: "Iwona", 
    age: 40, 
    isAdmin: true
}

type UserList = User[] 
const userList: UserList = [user, {name: "Maciek", age: 30}]

function test2(s: string): number {
    return s.length;
}

test2("halo")

function checkUser(user: User):boolean {
    return user.isAdmin

}

type Callback = (s:string) => void;

type RunCallback = {
    callback(Callback)
}

let id:number = 123
let name2: string = "Steve"

let employees: [number, string] = [id, name2]

enum PrintMedia {

    Newspaper, //0
    Newsleller, //1
    Magazine, //2 
    Book //3

}

enum PersonType {

    Admin,
    User,
    Manager,
}

type Person = {

    name: string;
    surname: string;
    job: PersonType;
}

const person: Person = {

    name: "Janek",
    surname: "Gonera", 
    job: PersonType.User
}


function checkAccess(user: Person) { //tu mozna zdestrukturyzowac usera

    if (user.job === PersonType.Manager){
        console.log("jestem Managerem")
    }

}