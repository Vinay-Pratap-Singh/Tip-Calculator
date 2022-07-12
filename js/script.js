setInterval(() => {

    plusBtn.onclick = () => {
        totalPeople.innerText = Number(totalPeople.innerText) + 1
    }

    minusBtn.onclick = () => {
        if((totalPeople.innerText) > 1){
            totalPeople.innerText = Number(totalPeople.innerText) - 1
        }
    }

    let bill = billText.value
    let tip = tipText.value
    let people = Number(totalPeople.innerText)

    if(bill != '' && tip != ''){
        totalAmount.value = ((Number(bill) + Number(tip)) / people).toFixed(2)
    } 
    else if(bill != '' && tip == ''){
        totalAmount.value = Number(bill) / people.toFixed(2)
    }
    else if(bill == '' && tip != ''){
        totalAmount.value = Number(tip) / people.toFixed(2)
    }
    else if(bill == '' && tip == ''){
        totalAmount.value = 0
    }

}, );