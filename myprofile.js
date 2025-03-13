const fileInput = document.getElementById("fileInput");
let profileImage = localStorage.getItem('profileimage');
const profileimg = document.getElementById('profileimg');
const editprofilecontainer = document.getElementById('editprofilecontainer');

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
    console.log('function')
}

loadProfile();