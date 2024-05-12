/*      Question 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium 
shirt with the default message, and a shirt of any size with a different message. */

function makeshirt(size: string, label: string){

    return `My Shirt size is ${size} and label is ${label}`
}
let myFunction = makeshirt("large", "I love TypeScript");
console.log(myFunction);



// --- Default Large Size Function

function makeshirt1(label: string, size: string = "Large"){

    return `My Shirt size is ${size} and label is ${label}`
}
let myfunction = makeshirt1("I love JavaScript");
console.log(myfunction);
// Remember default value should be in last otherwise error!



// --- Default Medium Size Function
function makeshirt2(label: string, size: string = "Medium"){

    return `My Shirt size is ${size} and label is ${label}`
}
let my_function = makeshirt2("I love Python");
console.log(my_function);



function makeshirt3(label: string, size: string){

    return `My Shirt size is ${size} and label is ${label}`
}
let my_Function = makeshirt3("I love CSS", "Any Size");
console.log(my_Function);
// -----------------------------------------------------------//













