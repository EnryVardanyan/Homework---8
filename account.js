class Account{
    #balance = 0
    constructor(name, balance){
        this.id = Account.uniqueIdCreation()
        this.name = name
        this.#balance = balance
    }
    static uniqueIdCreation(){
        return Math.random().toString().slice(2,12)
    }
    get balance(){
        return this.#balance
    }
    set balance(newBalance){
        this.#balance = newBalance
    }
}
const account1 = new Account("barev", 100000)
console.log(account1.balance)