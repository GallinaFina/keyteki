const Card = require('./Card.js');

class KeymanderCard extends Card {
    constructor(owner, cardData) {
        super(owner, cardData);
        this.fundingRequired = 2;
        this.fundingIncrement = 2;
        this.funds = [];
        this.refunds = [];
        this.timesRemoved = 0;
    }

    getFundingRequired() {
        return this.fundingRequired + (this.timesRemoved * this.fundingIncrement);
    }

    addFund(card) {
        this.funds.push(card);
    }

    addRefund(card) {
        this.refunds.push(card);
    }

    isFullyFunded() {
        return (this.funds.length + this.refunds.length) >= this.getFundingRequired();
    }

    onLeavesPlay() {
        super.onLeavesPlay();
        this.timesRemoved++;
        this.refunds = [...this.refunds, ...this.funds];
        this.funds = [];
    }
}

module.exports = KeymanderCard;
