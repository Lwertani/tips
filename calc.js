let bill = 100;
console.log('Your bill = '+ ' ' + bill);
let calcTip = (bill >= 50 && bill <= 300 ) ? bill / 10 : bill / 15;
console.log( 'tip ='+' '+calcTip)

const bills = [265 , 80 , 560]
console.log(bills)


const tip = [ bills[0], bills[1],bills[2]]
console.log(tip)
function clcTip() { if (bills >= 50 && bills <= 300 ){
    return
    console.log( bills / 10);
}
}

/*
    else
    console.log( bills / 15)
}
}
/*
const firstBill = clcTip(bills[0]) 
const secondBill = clcTip(bills[1])
const thirdBill = clcTip(bills[2])
console.log(firstBill, secondBill, thirdBill)

function clcTips() { if (bills >= 50 && bills <= 300 ){
    return
    console.log( (bills / 10) + bills);
    else
    console.log( (bills / 15) + bills)
}

const firstBill = clcTips(bills[0]) 
const secondBill = clcTips(bills[1])
const thirdBill = clcTips(bills[2])
console.log(firstBill, secondBill, thirdBill)
*/