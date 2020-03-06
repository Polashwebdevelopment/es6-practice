class Parent {
    constructor(){
    this.fatherName = "Bubanessar Nath";
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new child("Polash");
const baby2 = new child("Poly");
console.log(baby);
console.log(baby2);