
//Get the variable for the HTML documents
document.addEventListener('DOMContentLoaded', () => {
    const percents = document.querySelectorAll('.percent');
    const tipBtn = document.querySelectorAll('.tip-btn')
    const inputMoney = document.querySelector('.input-money');
    const inputPeople = document.querySelector('.input-people');
    const displayTips = document.querySelector('.tip-total-amount');
    const totalTips = document.querySelector('.tip-final-total');
    const custom = document.getElementById('custom');
    const resetBtn = document.querySelector('.reset-btn');
    const cannotBeZero = document.querySelector('.cannot-be-zero');


    //Calculate 
    function calculateTip(inputMoneyValue, spanValue) {
        return (Number(inputMoneyValue) * Number(spanValue)/100)
    }

    
    function splitTip(calculatedTip, inputPeopleValue){
        if(inputPeopleValue > 0){
            console.log('hello')
            return parseFloat(calculatedTip /inputPeopleValue).toFixed(2)
        } else if(!isNaN(inputPeopleValue || inputPeopleValue === 0)){
            console.log('hello')
            return parseFloat(calculatedTip / 1).toFixed(2)
    
        } 
    }
    function displayTip(splitedTip){
        let finalResult = displayTips.textContent = `$${splitedTip}`
        
        console.log(finalResult)
    }

    function total(splitedTip){
        let totalMoney = parseFloat(Number(splitedTip) + Number(inputMoney.value)).toFixed(2);
        return totalTips.textContent = `$${totalMoney}`;
        
    }

    
      
        let selectedTipPercent = null
    tipBtn.forEach(percent => {
        percent.addEventListener('click', (e) => {
            // console.log(e.currentTarget)
            const span = e.currentTarget;
            const spanValue = Number(span.querySelector('.percent').textContent);
            selectedTipPercent = spanValue;
            console.log(inputMoney.value)
            console.log(spanValue)
            


            let calculatedTip = calculateTip(inputMoney.value, spanValue) 
            let splitedTip = splitTip(calculatedTip, Number(inputPeople.value));
            let displayedTip = displayTip(splitedTip)
            total(splitedTip)
           
            console.log(calculatedTip)
            console.log(inputPeople.value)
        });


    });

    custom.addEventListener('input', (e)=>{        
        let customTipValue = Number(custom.value);
        let customTip = calculateTip(inputMoney.value, customTipValue)
        selectedTipPercent = customTipValue;
        let splitedTip = splitTip(customTip, Number(inputPeople.value));
        let displayedTip = displayTip(splitedTip)
        total(splitedTip)
    })
    
    inputPeople.addEventListener('input', (e)=>{
        let calculatedTip;
        console.log(Number(inputPeople.value));
        // if(spanValue){
        //     inputPeopleNumber = calculateTip(inputMoney.value, spanValue)
        // } else if(customTipValue){
        //     inputPeopleNumber = calculateTip(inputMoney.value, customTipValue) 
        // } else {
        //     inputPeopleNumber = 0
        // }

        if(Number(inputPeople.value) == 0){
            cannotBeZero.style.display = 'block'
            inputPeople.style.border = '2px solid rgba(255, 0, 0, 0.695)'
            
        } else if(isNaN(Number(inputPeople.value))){
            cannotBeZero.style.display = 'none'
            inputPeople.style.border = 'none'

            console.log('hello');
            
        }else{
            cannotBeZero.style.display = 'none'
            inputPeople.style.border = 'none'


        }

        if (selectedTipPercent) {
            calculatedTip = calculateTip(inputMoney.value, selectedTipPercent); 
        } else {
            calculatedTip = 0;  
        }

        let splitedTip = splitTip(calculatedTip, Number(inputPeople.value) );
        let displayedTip = displayTip(splitedTip)
        total(splitedTip)
    })

    resetBtn.addEventListener('click', (e)=>{
        displayTips.textContent = '$0.00';
        totalTips.textContent = '$0.00'; 

        inputMoney.value = ''; 
        inputPeople.value = ''; 
        custom.value = ''; 
    })

});




// console.log(displayTips)

