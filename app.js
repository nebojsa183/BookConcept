const signUpButtonNav = document.getElementById('sign-up-button-nav')
const signUpButtonFirstPage = document.getElementById('sign-up-button-first-page')
const signUpSection = document.getElementById("sign-up-section")
const signUpForm = document.getElementById("sign-up-form")

const logInButtonNav = document.getElementById('log-in-button-nav')
const logInSection = document.getElementById("log-in-section")
const logInForm = document.getElementById("log-in-form")


let members = []
let localStorageData = JSON.parse(localStorage.getItem('members'))


signUpButtonNav.addEventListener('click', (e) => {
    e.preventDefault()
    signUpForm.reset()
    signUpSection.style.display = 'block'
    logInSection.style.display = 'none'
})

signUpButtonFirstPage.addEventListener('click', (e) => {
    e.preventDefault()
    signUpForm.reset()
    signUpSection.style.display = 'block'
    logInSection.style.display = 'none'
})

logInButtonNav.addEventListener('click', (e) => {
    e.preventDefault()
    logInForm.reset()
    logInSection.style.display = 'block'
    signUpSection.style.display = 'none'
})

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(localStorageData === null) {
        members.push({
            email: e.target.elements.email.value,
            password: e.target.elements.pass1.value
        })
        alert('You have successfuly signed in.')
    } else {
        members = localStorageData
        members.forEach((member) => {
            if(member.email === e.target.elements.email.value) {
                alert ('User with this email allready exists.')
                signUpForm.reset()
            }
        })
        members.push({
            email: e.target.elements.email.value,
            password: e.target.elements.pass1.value
        })
        alert('You have successfuly signed in.')
        
    }
    localStorage.setItem('members', JSON.stringify(members))
    signUpForm.reset()
    signUpSection.style.display = 'none'
})

logInForm.addEventListener('submit',  (e) => {
    e.preventDefault()
    results = []
    members = localStorageData
    members.forEach((member) => {
        results.push(member.email === e.target.elements.logInEmail.value && member.password === e.target.elements.logInPassword.value)
    })
    if(results.includes(true)) {
        alert ('You have successfuly loged in.')
        logInForm.reset()
        logInSection.style.display = 'none'
    } else {
        alert ('Check your email adress and password.')
        logInForm.reset()
    }
    
})



