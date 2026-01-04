// 1. Deposit money ✅
// 2. No. of lines ✅
// 3. Collect a bet amount ✅
// 4. Spin ✅
// 5. Check if won -> give winning ✅
// 6.. play again ✅

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

const SYMBOLS_VALUE = {
    'A': 5,
    'B': 4,
    'C': 3,
    'D': 2
};

function deposit() {
    while(true) {
        const depositAmt = prompt("Enter deposit amount: ");
        const numAmt = parseFloat(depositAmt);

        if(isNaN(numAmt) || numAmt <= 0){
            console.log("Invalid amount! Enter again.");
        } else{
            return numAmt;
        }
    }
};

const getLines = () => {
    while(true){
        const lines = prompt("Enter number of lines you want to bet on (1-3): ");
        const numLines = parseFloat(lines);

        if(isNaN(numLines) || numLines > 3 || numLines <= 0){
            console.log("Invalid number of lines! Enter again.");
        } else{
            return numLines;
        }
    }
};

const getBet = (balance, numLines) => {
    while(true){
        const bet = prompt("Enter bet amount per line: ");
        const numBetAmt = parseFloat(bet);

        if(isNaN(numBetAmt) || numBetAmt * numLines > balance || numBetAmt <= 0){
            console.log("Invalid betAmt! Enter again.");
        } else{
            return numBetAmt;
        }
    }
};

const spin = () => {
    const symbols = [];
    for(let [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [];
    for(let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIdx = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIdx];

            reels[i].push(selectedSymbol);

            reelSymbols.splice(randomIdx, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
} 

const printRows = (rows) => {
    
    
    for(const row of rows){
        let rowStr = "";
        for(const [i,symbol] of row.entries()){
            rowStr += symbol;
            if(i != row.length-1){
                rowStr += " | ";
            }
        }
        console.log(rowStr);
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for(let symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if(allSame){
            winnings += bet * SYMBOLS_VALUE[symbols[0]];
        } 
    }

    return winnings;
}

const game = () => {
    let balance = deposit();

    while(true){
        console.log("Current balance : $" + balance.toString());
        const lines = getLines();
        const betAmt = getBet(balance, lines);
        balance -= betAmt * lines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, betAmt, lines);
        console.log("You won $" + winnings.toString());
        balance += winnings;

        if(balance <= 0){
            console.log("Zero Balance!");
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ")

        if(playAgain != 'y'){
            console.log("Game  finished.");
            break;
        }
    }
}

game();