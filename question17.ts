
let guest_List: string[] = ["Aisha", "usama", "tayyab", "Imran", "muawiya", "Zainab"];

for (const guest of guestList) {
    console.log(`Dear ${guest},\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]`);
}


console.log("\nGreat news! We found a bigger dinner table!\n");

// new guests in to the list
const new_Guests: string[] = ["Ali", "Sara"];
guestList.unshift(newGuests[0]);  
guestList.splice(Math.floor(guestList.length / 2), 0, newGuests[1]);  
guestList.push("Ahmed"); 

// invitations to each person
for (const guest of guestList) {
    console.log(`Dear ${guest},\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]`);
}


console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");


while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}


for (const remainingGuest of guestList) {
    console.log(`Dear ${remainingGuest},\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [HifzaZafar]`);
}


guest_List = [];


console.log("\nRemaining guest list:", guestList);
