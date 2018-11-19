class Student {
  fullname: string;
  constructor(
    public firstname: string,
    public middleInitial: string,
    public lastname: string
  ) {
    this.fullname = firstname + " " + middleInitial + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(Person){
  return "Hello " + Person.firstname + " " + Person.lastname;
}

let user = new Student("Beti", "M", "Gingertonic")

document.body.innerHTML= greeter(user)
