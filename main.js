const age = document.querySelector('#userAge')
const year = document.querySelector('#futureYear')
const goBtn = document.querySelector('#goBtn')
const resetBtn = document.querySelector('#resetBtn')
const resultTxt = document.querySelector('#resultTxt')

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
    resultTxt.textContent = 'Result will appear here.'
}

function calculateYear(){
    currentAge = parseInt(age.value)
    futureYear = parseInt(year.value)
    if (isNaN(currentAge) || isNaN(futureYear)){
        resultTxt.innerHTML = 'Please enter numbers.'
    }
    else {
        result = parseInt((futureYear - 2021) + currentAge) 
        resultTxt.innerHTML = `You will be ${result} years old in ${futureYear}!`
    }
}      

goBtn.addEventListener('click', calculateYear)
resetBtn.addEventListener('click', clearFields)




