/*      Question 14
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
three perople you'd like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner. */

const myFrnd:string [] = ["Adeel", "Muhib", "Haseeb", "Usman", "Shoib", "Shariq"];
//1st Method
for(let i=0; i < myFrnd.length; i++){
    console.log(`Mr. ${myFrnd[i]}! you are invited to dinner at my house on Monday.\n`)
}
// 2nd method
myFrnd.map((ib)=>{
    console.log(`Mr. ${ib}! you are invited to dinner at my house on Monday.`)
})
// -------------------------------------------------------//