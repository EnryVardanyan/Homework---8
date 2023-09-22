class UniversityMember{
    constructor(name, age, role){
        this.name = name
        this.age = age
        this.role = role
        this.energy = 24
    }
    info(){
        return {
            name: this.name,
            age: this.age,
            role: this.role,
            energy: this.energy
        }
    }
}
const newMember = new UniversityMember("Enry", 23, "Student")
console.log(newMember.info())