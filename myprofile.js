const fileInput = document.getElementById("fileInput");
let profileImage = localStorage.getItem('profileimage');
const profileimg = document.getElementById('profileimg');
const editprofilecontainer = document.getElementById('editprofilecontainer');
const notescontainer = document.getElementById('notescontainer');
const notes = document.getElementById('notes');
const editnotes = document.getElementById('editnotes');
const date = new Date().toLocaleDateString();

/* Stat values */
const pointsnumber = document.getElementById('pointsnumber');
const assistsnumber = document.getElementById('assistsnumber');
const orebnumber = document.getElementById('orebnumber');
const drebnumber = document.getElementById('drebnumber');
const stealsnumber = document.getElementById('stealsnumber');
const blocksnumber = document.getElementById('blocksnumber');
const turnoversnumber = document.getElementById('turnoversnumber');
const foulsnumber = document.getElementById('foulsnumber');
const rec_date = document.getElementById('rec_date');


/* Load profile image if it exists */
if (profileImage){
    profileimg.src = profileImage;
    profileimg.style.padding = '5px';
} else {
    profileimg.src = './assets/person.png';
}


function selectImage(){
    fileInput.click();
}

    // Handle image selection
    fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileimg.src = e.target.result;
            profileimg.style.padding = '5px';
            localStorage.setItem("profileimage", reader.result);
        };
        reader.readAsDataURL(file);
    }
});

function cancel(){
    editprofilecontainer.style.display = 'none';
}

function openEdit(){
    editprofilecontainer.style.display = 'flex';
}

function loadProfile(){
    const myplayer = JSON.parse(localStorage.getItem("myplayer")) || []; /* Gets the saved list and parses it to JSON */
    const last_item = myplayer.length - 1; 

        /* hide notes if it does not exist */
    if (myplayer[last_item].notes){
        notescontainer.style.display = "block";
        notes.textContent = myplayer[last_item].notes;
    } else {
        notescontainer.style.display = "none";
    }

    /* Load the items from the localstorage */
    if (!localStorage.getItem("myplayer")){
        pointsnumber.textContent = 0;
        assistsnumber.textContent = 0;
        orebnumber.textContent = 0;
        drebnumber.textContent = 0;
        stealsnumber.textContent = 0;
        blocksnumber.textContent = 0;
        turnoversnumber.textContent = 0;
        foulsnumber.textContent = 0;
        rec_date.textContent = 0;
    } else {
        pointsnumber.textContent = myplayer[last_item].pointsnumber;
        assistsnumber.textContent = myplayer[last_item].assistsnumber;
        orebnumber.textContent = myplayer[last_item].orebnumber;
        drebnumber.textContent = myplayer[last_item].drebnumber;
        stealsnumber.textContent = myplayer[last_item].stealsnumber;
        blocksnumber.textContent = myplayer[last_item].blocksnumber;
        turnoversnumber.textContent = myplayer[last_item].turnoversnumber;
        foulsnumber.textContent = myplayer[last_item].foulsnumber;
        rec_date.textContent = myplayer[last_item].rec_date;
    }
}

function save(){
    const myplayer = JSON.parse(localStorage.getItem("myplayer")) || []; /* Gets the saved list and parses it to JSON */

    myplayer.push ({
        pointsnumber: pointsentry.value,
        assistsnumber: assistsentry.value,
        orebnumber: orebentry.value,
        drebnumber: drebentry.value,
        stealsnumber: stealsentry.value,
        blocksnumber: blocksentry.value,
        turnoversnumber: turnoversentry.value,
        foulsnumber: foulsentry.value,
        'rec_date': date,
        notes: editnotes.value
    })


    //Save the updated array to localStorage
    localStorage.setItem('myplayer', JSON.stringify(myplayer));
    loadProfile();
    editprofilecontainer.style.display = 'none';
    /* console.log(localStorage.getItem("myplayer")) */
}

loadProfile();

/* localStorage.removeItem('myplayer')
console.log(localStorage.getItem('myplayer')); */