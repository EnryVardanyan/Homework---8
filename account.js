class Account {
    #balance = 0
  
    constructor(name, balance) {
      this.id = Account.uniqueIdCreation()
      this.name = name;
      this.#balance = balance;
    }
  
    static uniqueIdCreation() {
      return Math.random().toString().slice(2, 12)
    }
  
    get balance() {
      return this.#balance
    }
  
    set balance(newBalance) {
        if (typeof newBalance === "number" && newBalance > 0) {
            this.#balance = newBalance;
        } else {
            throw new Error("Incorrect Input")
        }
    }
  
    credit(amount) {
      if (typeof amount === "number" && amount > 0) {
        this.#balance += amount
      } else {
        throw new Error("Incorrect Input")
      }
    }
    debit(amount){
        if (typeof amount === "number" && amount > 0 && this.#balance >= amount) {
            this.#balance -= amount
          } else {
            throw new Error("Incorrect Input")
          }
    }
  }
  
  const account1 = new Account("barev", 100000);
  account1.balance = 1000
  console.log(account1.balance)
  account1.credit(1000)
  console.log(account1.balance)
  account1.debit(1000)
  console.log(account1.balance)
