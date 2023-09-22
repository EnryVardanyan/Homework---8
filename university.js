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
            this.students.push(member)
        } else if(member.role === "Teacher"){
            this.teachers.push(member.name)
        } else throw new Error("Incorrect Input")
    }
    removeMember(member){
        if(member.role === "Student" && this.students.includes(member)){
            this.students = this.students.filter((student) => student !== member)
        } else if(member.role === "Teacher" && this.teachers.includes(member)){
            this.teachers = this.teachers.filter((teacher) => teacher !== member)
        } else throw new Error("Incorrect Input")
    }
    startLesson(){
        this.students.forEach((student) => student.energy -= 2)
        this.teachers.forEach((teacher) => teacher.energy -= 5)
    }
}
const newMember = new Student("Enry", 23)
const newMember1 = new Student("Saqo", 23)
const politexnik = new University()
politexnik.addMember(newMember)
politexnik.addMember(newMember1)
politexnik.removeMember(newMember1)
politexnik.startLesson()
console.log(politexnik.students)
// politexnik()