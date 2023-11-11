// Original guest list
var guestList = ["Aisha", "usama", "tayyab", "Imran", "muawiya", "Zainab"];
// Print invitations to each person
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]"));
}
// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table!\n");
// Add new guests to the list
var newGuests = ["Ali", "Sara"];
guestList.unshift(newGuests[0]); // Add to the beginning of the list
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]); // Add to the middle of the list
guestList.push("Ahmed"); // Add to the end of the list
// Print invitations to each person
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]"));
}
// Inform that only two people can be invited
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
// Remove guests until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the remaining two guests
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var remainingGuest = guestList_3[_b];
    console.log("Dear ".concat(remainingGuest, ",\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [HifzaZafar]"));
}
// Remove the last two names from the list
guestList = [];
// Print the empty list
console.log("\nRemaining guest list:", guestList);
