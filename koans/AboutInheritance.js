class Muppet {
  constructor(age, hobby) {
    this.age = age;
    this.hobby = hobby
  }

  answerNanny() {
    return "Everything's cool!";
  }
}

class SwedishChef extends Muppet {
  constructor(age, hobby, mood) {
    super(age, hobby);
    this.mood = mood;
  }

  cook() {
    return "Mmmm soup!";
  } 
}

describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	  this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });
});

