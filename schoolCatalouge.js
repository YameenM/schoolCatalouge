class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
      if (typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      }else {
        console.log(`Invalid input: number of students must be set to a number`);
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      let index = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[index];
    }
  }
  // subclass of School class
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
  
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  // another subclass of School class
  
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeam){
    super(name, 'high', numberOfStudents);
  
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam(){
     return console.log(this._sportsTeam);
    }
  }
  
  // creeating instance of PrimarySchool
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian or a family member of over the age of 13.');
  
  lorraineHansbury.quickFacts();
  
  /*School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);*/
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  // creeating instance of HighSchool
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  alSmith.sportsTeam;
  
  
  
  