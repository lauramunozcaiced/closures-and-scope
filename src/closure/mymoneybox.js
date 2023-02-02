/*function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5);
moneyBox(5);

No funcionó*/

//Con Closure

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins+= coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
const mymoneyBox = moneyBox(); 
mymoneyBox(5);
mymoneyBox(5);
mymoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);