class Student{
    constructor(id,name,rollno){
        this.id = id;
        this.name = name;
        this.rollno = rollno;
    }

    studentData(){
        console.log("Id :",this.id)
        console.log("Name :",this.name)
        console.log("Roll No :",this.rollno)
    }
}

//Default export
export default Student