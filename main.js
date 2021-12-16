const age = document.querySelector('#userAge')
const year = document.querySelector('#futureYear')
const goBtn = document.querySelector('#goBtn')
const resetBtn = document.querySelector('#resetBtn')
const resultTxt = document.querySelector('#resultTxt')
const yearBornTxt = document.querySelector('#yearBorn')
const year100Txt = document.querySelector('#year100')
const retirementTxt = document.querySelector('#retirement')
const daysPassedTxt = document.querySelector('#daysPassed')

// Focus the age field after the page loads
window.addEventListener('load', function(){
    age.focus()
})

// Calculate after pressing the Enter key
document.addEventListener('keydown', function(e){
    if (e.key == 'Enter'){
        calculateYear()
    }
})

// Deleting content after pressing the Delete key
document.addEventListener('keydown', function(e){
    if (e.key == 'Delete'){
        clearFields()
    }23
})

// Function for clearing the content
function clearFields(){
    age.value = ''
    year.value = ''
    age.focus()
    resultTxt.innerHTML = ''
    yearBornTxt.innerHTML = ''
    year100Txt.innerHTML = ''
    retirementTxt.innerHTML= ''
}

// Function which makes all the calculations
function calculateYear(){
    currentAge = parseInt(age.value)
    futureYear = parseInt(year.value)
    if (isNaN(currentAge) || isNaN(futureYear)){
        resultTxt.innerHTML = 'Please enter numbers.'
    }
    else {
        // Calculations
        result = parseInt((futureYear - 2021) + currentAge)
        resultDays = parseInt(futureYear - 2021) * 365
        birthDate = parseInt(2021 - currentAge)
        daysGone = parseInt(currentAge * 365)
        yearOneHundred = parseInt(100 - currentAge) + 2021
        yearOneHundredDays = parseInt(100 - currentAge) * 365
        retirementAge = parseInt(65 - currentAge) + 2021
        retirementDays = parseInt(65 - currentAge) * 365
        
        // Printing calculations
        resultTxt.innerHTML = `You will be ${result} years old in ${futureYear}. That's in ~ ${resultDays} days.`
        yearBornTxt.innerHTML = `You were born in ${birthDate}.`
        year100Txt.innerHTML = `You will be 100 years old in ${yearOneHundred}. That's in ~ ${yearOneHundredDays} days.`
        retirementTxt.innerHTML = `You will retire in ${retirementAge}. That's in ~ ${retirementDays} days.`
        daysPassedTxt.innerHTML = `Approximately ${daysGone} days have passed since you were born.`
    }
}      

//  Event listeners for the buttons
goBtn.addEventListener('click', calculateYear)
resetBtn.addEventListener('click', clearFields)