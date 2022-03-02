// Object Oriented Programming //

// Classes //
class Student {
    constructor (firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`)
    }
}

let student = new Student();
student.firstName = 'Tommy';
student.lastName = 'Smith';

let student1 = new Student('Tom', 'Sawyer', '6295555555', 'A');
let student2 = new Student('Sam', 'Smith', '4895555555', 'A');

student1.introduce();
student2.introduce();