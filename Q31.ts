/*      Question 31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let user_names = ["Admin", "Adeel", "Usman", "Haseeb", "Muhib"];

// to remove all members
user_names = []
console.log(user_names);

if(user_names.length > 0) {
    for(let i = 0; i< user_names.length; i++) {
        if(user_names[i] == "Admin") {
            console.log(`Hello ${user_names[i]} would you like to see a status report?\n`);
        } else {
            console.log(`Hello ${user_names[i]} thank you for logging in again!`);
        }
    }
} else {
    console.log(`We need to find some users`);
}
// ------------------------------------------------------------------//