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
class Teacher extends UniversityMember{
    constructor(name, age){
        super(name, age, "Teacher")
    }
}
class Student extends UniversityMember{
    constructor(name, age){
        super(name, age, "Student")
    }
}
class University{
    constructor(){
        this.teachers = []
        this.students = []
    }
    addMember(member){
        if(member.role === "Student"){
            this.students.push(member.name)
        } else if(member.role === "Teacher"){
            this.teachers.push(member.name)
        } else throw new Error("Incorrect Input")
    }
}
const newMember = new Student("Enry", 23)
console.log(newMember.role)