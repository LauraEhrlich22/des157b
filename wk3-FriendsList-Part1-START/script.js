// JS here
Parse.initialize("56sWb6AgDAgqT6FARRvVePTWadwSaXKMgLsLQG8U", "LQOBQzaHnLZoiHMLlDh44wMSCvAKgedCZdsKPVjZ")
const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lname').find();
    console.log(results);
   }
   displayFriends();

   async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lname').find();
    //console.log(results);
    results.forEach( function(eachFriend) {
    const id = eachFriend.id;
    const lname = eachFriend.get('lname');
    const fname = eachFriend.get('fname');
    const email = eachFriend.get('email');
    const facebook = eachFriend.get('facebook');
    const twitter = eachFriend.get('twitter');
    const instagram = eachFriend.get('instagram');
    const linkedin = eachFriend.get('linkedin');
    });
   }
   

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
   })
   addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-offscreen";
   });

   for( let i=0; i<editBtns.length; i++ ){
    editBtns[i].addEventListener("click", function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-onscreen";
    })
   }
   editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-offscreen";
   });

   

