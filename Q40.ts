/*      Question 40
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album. */

// Simple
function myAlbum(artist:string, title:string) {
    return {artist, title}
}
let album1 = myAlbum("Ali", "Rang-e-Mohabbat");
let album2 = myAlbum("Talha", "Balli");
let album3 = myAlbum("Younus", "Karachi");

console.log(album1);
console.log(album2);
console.log(album3); 

// Adding optional Parameter
// Note: To add an optional parameter must use ? in the end of parameter otherwise error.
function myAlbum1(artist:string, title:string, Tracks?: number) {
    return {artist, title, Tracks}
}
let album4 = myAlbum1("Ahad", "Dunya", 30);
let album5 = myAlbum1("Talat", "Mausam", 55);
let album6 = myAlbum1("Azan", "Hyderabad");

console.log(album4);
console.log(album5);
console.log(album6);
// -------------------------------------------------------------------------//












