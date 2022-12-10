const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = id + 2;

    const putCredits = (money) => {
        if (money > 0) {
            balance += money;
        } else {
            console.error('Write positive sum');
        }
        historyLogs.push({operationType: 'Put credits', credits: money, operationTime: new Date()});
    }

    const takeCredits = (money) => {
        if (money <= balance && money <= transactionLimit) {
            balance -= money;
        } else {
            console.error('Not enough money or bigger than limit');
        }
        historyLogs.push({operationType: 'Take credits', credits: money, operationTime: new Date()});
    }

    const setTransactionLimit = (newLimit) => {
        if (newLimit > 0) {
            transactionLimit = newLimit;
        } else {
            console.error('Write positive limit');
        }
        historyLogs.push({
            operationType: 'Transaction limit change',
            credits: transactionLimit,
            operationTime: new Date()
        });
    }

    const transferCredits = (money, cardPut) => {
        if (money <= balance && money <= transactionLimit) {
            takeCredits(money * 1.005);
            cardPut.putCredits(money);
        } else {
            console.error('Not enough money or bigger than limit');
        }
    }

    const getCardOptions = () => {
        console.log({key, balance, transactionLimit, historyLogs});

    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }


}

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length >= 3) {
            return console.error('To many cards');
        } else {
            this.cards.push(userCard(this.cards.length - 1));
        }
    }

    getCardByKey(id) {
        if (id >= 0 && id <= 3) {
            return this.cards[id - 1];
        } else {
            console.error('Incorrect ID');
        }
    }
}

const user = new UserAccount('Bob');
user.addCard();
user.addCard();
user.addCard();
user.addCard();


let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
let card3 = user.getCardByKey(3);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

card1.getCardOptions();
card2.getCardOptions();
card3.getCardOptions();
