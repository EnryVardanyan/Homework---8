class Shiritori{
    constructor(){
        this.words = []
        this.game_over = false
    }
    play(word){
        if(!this.words.length){
            this.words.push(word)
            return this.words
        }
        const lastItem = this.words[this.words.length - 1]
        if(lastItem.charAt(lastItem.length - 1).toLowerCase() === word[0].toLowerCase() && !(this.words.includes(word))){
            this.words.push(word)
            return this.words
        }   
        this.game_over = true
        return "game over"
    }
    restart(){
        this.game_over = false
        this.words = []
        return "game restarted"
    }
}
const shiritori = new Shiritori()
console.log(shiritori.play("hello"))
console.log(shiritori.play("Ohio"))
console.log(shiritori.play("Ohio"))
console.log(shiritori.words)
console.log(shiritori.restart())
console.log(shiritori.words)
