var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(Person) {
    return "Hello " + Person.firstname + " " + Person.lastname;
}
var user = new Student("Beti", "M", "Gingertonic");
document.body.innerHTML = greeter(user);
