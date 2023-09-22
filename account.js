class Account {
    #balance = 0
  
    constructor(name, balance) {
      this.id = Account.uniqueIdCreation()
      this.name = name;
      this.#balance = balance;
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
    transferTo(account, amount){
        if(amount <= this.#balance && typeof amount === "number" && amount > 0){
            this.#balance -= amount
            account.credit(amount)
        } else throw new Error("Incorrect Input")
    }
    static uniqueIdCreation() {
        return Math.random().toString().slice(2, 12)
      }
    static identifyAccounts(acc1, acc2){
        return acc1.id === acc2.id
    }
  }
  
  const account1 = new Account("MyAccount", 100000);
  const account2 = new Account("MySecondAccount", 1000)
  account1.balance = 1000
  console.log(account1.balance)
  account1.credit(1000)
  console.log(account1.balance)
  account1.debit(1000)
  console.log(account1.balance)
  account1.transferTo(account2, 1000)
  console.log(account2.balance, account2.name)
  console.log(Account.identifyAccounts(account1, account1))
  console.log(Account.identifyAccounts(account1, account2))