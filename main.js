const age = document.querySelector('#userAge')
const year = document.querySelector('#futureYear')
const goBtn = document.querySelector('#goBtn')
const resetBtn = document.querySelector('#resetBtn')
const resultTxt = document.querySelector('#resultTxt')
const yearBornTxt = document.querySelector('#yearBorn')
const year100Txt = document.querySelector('#year100')
const retirementTxt = document.querySelector('#retirement')

window.addEventListener('load', function(){
    age.focus()
})

document.addEventListener('keydown', function(e){
    if (e.key == 'Enter'){
        calculateYear()
    }
})

document.addEventListener('keydown', function(e){
    if (e.key == 'Delete'){
        clearFields()
    }23
})

function clearFields(){
    age.value = ''
    year.value = ''
    age.focus()
    resultTxt.innerHTML = ''
    yearBornTxt.innerHTML = ''
    year100Txt.innerHTML = ''
    retirementTxt.innerHTML= ''
}

function calculateYear(){
    currentAge = parseInt(age.value)
    futureYear = parseInt(year.value)
    if (isNaN(currentAge) || isNaN(futureYear)){
        resultTxt.innerHTML = 'Please enter numbers.'
    }
    else {
        result = parseInt((futureYear - 2021) + currentAge) 
        birthDate = parseInt(2021 - currentAge)
        yearOneHundred = parseInt(100 - currentAge) + 2021
        retirementAge = parseInt(65 - currentAge) + 2021
        resultTxt.innerHTML = `You will be ${result} years old in ${futureYear}!`
        yearBornTxt.innerHTML = `You were born in ${birthDate}.`
        year100Txt.innerHTML = `You will be 100 years old in ${yearOneHundred}.`
        retirementTxt.innerHTML = `You will retire in ${retirementAge}.`
    }
}      

goBtn.addEventListener('click', calculateYear)
resetBtn.addEventListener('click', clearFields)




