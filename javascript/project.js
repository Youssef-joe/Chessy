let liButton = document.querySelector('.liButton')
let loader = document.querySelector('.loading')
let center2 = document.querySelector('.center2')
let centerImage = document.querySelector('.centerImage')

// Start Light and Dark Mood (The bonus)
liButton.addEventListener('click', function(){
   
    let theme = document.body.getAttribute('theme')
    switch(theme) {
        case 'light':
            document.body.setAttribute('theme', 'dark');
            liButton.innerHTML = 'Dark'
            break;
        
        case 'dark':
            document.body.setAttribute('theme', 'light');
            liButton.innerHTML = 'light'
            break;
    }

})
// End Light and Dark Mood (The bonus)


// Navbar changes on scroll
const navBar = document.querySelector('.nav')
function scrollNavChange() { 
   document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 50) {
            navBar.classList.add(`scrolled`)
     
        } else {
            navBar.classList.remove(`scrolled`)
        }
       })

   })
  
}        

scrollNavChange();



// Start images changer behind Gallery

const wallpaperChanger = [               // Sample array of image URLs
    `url(../photos/chessWallpapers.jpg)`,
    `url(../photos/chessWallpapers2.jpg)`,
    `url(../photos/chesswallpapers3.jpg)`,
    `url(../photos/chesswallpapers4.jpg)`
]

const wallpaper = document.getElementById(`chessWallpaper`)
let counter = 0

setInterval(() => {
    wallpaper.style.backgroundImage = wallpaperChanger[counter]
    wallpaper.style.backgroundSize = `cover`
    // counter++

    if (counter > wallpaperChanger.length - 1) {
        counter = 0
    } else {
        counter++
    }
}, 2000)




const about = document.getElementById('about') // This is about button in nav bar which i need to make it go into about section

about.addEventListener('click', function(){
    window.scrollTo({
        top:2000,
        behavior: "smooth"

    })

})

const home = document.getElementById('home');
home.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})




// Start Login operations


const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const pop = document.querySelector('.popup')
const login = document.getElementById('login')
const submition = document.getElementById('submitBtn')



submition.addEventListener('click', function() {
   let exitingData = JSON.parse(window.localStorage.getItem('userData')) || [] //"If there is existing data in local storage, use it. Otherwise, initialize existingData as an empty array."

   let newData = {
    user_name: userName.value,
    user_pass: password.value,
    user_email: email.value
}

    exitingData.push(newData)
   
    window.localStorage.setItem('userData', JSON.stringify(exitingData))
    userName.value = ``
    password.value = `` 
    email.value = ``

    validInputs();
 
})

login.addEventListener('click', function(){
    pop.style.display = 'flex'
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

const closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', function(){
    pop.style.display = 'none'
})




function validInputs() { //Start regex operations
    const usernameRegex =  /^[a-zA-Z0-9][a-zA-Z0-9-_]{1,18}[a-zA-Z0-9]$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    
    function validateUsername(userName) {
       return usernameRegex.test(userName)
    }
    function validateEmail(email){
        return emailRegex.test(email)
    }
    function validatePassword(password){
        return passwordRegex.test(password)
    }

    if (validateUsername(userName.value)) {
        console.log('userName is valid')
    } else {
        console.log(`username isn't valid`)
    }
    if (validateEmail(email.value)) {
        console.log(`email is valid`)
    } else {
        console.log(`email isn't valid`)
    }
    if (validatePassword(password.value)){
        console.log(`validate password`)
    } else {
        console.log(`not validate pass`)
    }
}



// End login operations


// Start up button code
function upBtnFun() {
    const upButton = document.querySelector('.upButton');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    });

    upButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

upBtnFun();

// End up button code



// Feedback
function postFeedback() {
    let Feedback = document.getElementById(`feedbackInput`)
    let feedbackBtn = document.getElementById(`feedbackBtn`)
    

    feedbackBtn.addEventListener(`click`, function(){
        
        let exitingFeedback = JSON.parse(window.localStorage.getItem(`userFeedback`)) || []
        let newFeedback = Feedback.value

        exitingFeedback.push(newFeedback)
        window.localStorage.setItem(`userFeedback`, JSON.stringify(exitingFeedback))
        Feedback.value = ``

        let feedbackParagraph = document.getElementById(`feedbackParagraph`)
        feedbackParagraph.innerHTML = newFeedback
    })
    
    
}
postFeedback();


// profile popup
const profilePop = document.querySelector('.profile');
const profileBtn = document.getElementById('profile');

profileBtn.addEventListener('click', function () {
    if (window.localStorage.getItem('userData')) {
        let data = JSON.parse(window.localStorage.getItem('userData'));
        let profilePopup = document.getElementById('profilePopup');
        
        profilePopup.innerHTML = `
            <p>user name: ${data.userName}</p>
            <p>user E-mail: ${data.user_email}</p>
            <button id="closeProfile">close</button>
        `;

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Move closeBtn declaration outside the if block
        let closeBtn = document.getElementById('closeProfile');

        closeBtn.addEventListener('click', function () {
            profilePop.style.display = 'none';
        });
    }
    
    profilePop.style.display = 'flex';
});



