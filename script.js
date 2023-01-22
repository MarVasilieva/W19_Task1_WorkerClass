class Worker {
    constructor (name, surname, rate , days ){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days
    }

    getSalary(rate,days){
        let salary = this.rate * this.days;
        return salary;
    }
  }
 let firstworkerBack = new Worker ('Руль','Карданов',10,31);
 console.log(firstworkerBack.name);
 console.log(firstworkerBack.surname);
 console.log(firstworkerBack.rate);
 console.log(firstworkerBack.days);
 console.log(firstworkerBack.getSalary());
 let secondtworkerFront = new Worker ('Наталья','Непейпиво',30,31);
 console.log(secondtworkerFront.name);
 console.log(secondtworkerFront.surname);
 console.log(secondtworkerFront.rate);
 console.log(secondtworkerFront.days);
 console.log(secondtworkerFront.getSalary());
