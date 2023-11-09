// Before we run we must learn to walk.
// The following exercises are to help you understand
// the basics of coding.
describe('About primitives and basic operations', function() {
  
  it('should understand how to add/subtract numbers', function() {
    const first = 2;
    const second = 3;
    const third = 4;

    expect(FILL_ME_IN).toBe(5);
    expect(FILL_ME_IN).toBe(6);
    expect(FILL_ME_IN).toBe(1);
  });

  // Think on these after you've completed this test:
  // Does JS round numbers automatically when dividing? 
  // What does the '%' operator (modulo) represent? 
  // How do you think % can be used to determine even/odd numbers?
  it('should understand how to multiple/divide numbers', function() {
    const first = 2;
    const second = 3;
    const third = 4;

    expect(second / first).toBe(FILL_ME_IN);
    expect(Math.floor(second / first)).toBe(FILL_ME_IN);
    expect(Math.ceil(second / first)).toBe(FILL_ME_IN);
    expect(third % first).toBe(FILL_ME_IN);
    expect(third % second).toBe(FILL_ME_IN);
  });

  it('should understand string math', function() {
    const first = "Have a";
    const second = "great day";

    expect(FILL_ME_IN).toBe("Have a great day");
  });

  it('should understand string operations', function() {
    const str = "AbCdE";

    expect(str.toLowerCase()).toBe(FILL_ME_IN);
    expect(str.toUpperCase()).toBe(FILL_ME_IN);
  });

  it('should understand if-statements', function() {
    let name;
    const willChange = true;

    if (willChange) {
      name = "Tina";
    }

    if (!willChange) {
      name = "Eric";
    }

    expect(name).toBe(FILL_ME_IN);
  });

  // Here we do not use true/false in the if-statement.
  // Is it still valid? 
  it('should understand truthy conditions', function() {
    let name = "Eric";

    if (name) {
      name = "Tina";
    }

    expect(name).toBe(FILL_ME_IN);
  });

  it('should understand falsy conditions', function() {
    let name;

    if (!name) {
      name = "Eric";
    }

    expect(name).toBe(FILL_ME_IN);
  });

  // Can you summarize OR in 1-2 sentences?
  it('should understand the AND (&&) operator', function() {
    const first = true;
    const second = false;
    const third = true;
    const name = "Eric";
    
    expect(first && second).toBe(FILL_ME_IN);
    expect(first && third).toBe(FILL_ME_IN);
    expect(first && name).toBe(FILL_ME_IN);
  });

  // Can you summarize AND in 1-2 sentences?
  it('should understand the OR (||) operator', function() {
    const first = true;
    const second = false;
    const third = true;

    expect(first || second).toBe(FILL_ME_IN);
    expect(first || third).toBe(FILL_ME_IN);
  });

  // What values loosely evaluate to false?
  // What values loosely evaluate to true?
  it('should understand strict quality ("is exactly equal to")', function() {
    expect(1 === 1).toBe(FILL_ME_IN);
    expect(1 === "1").toBe(FILL_ME_IN);
    expect(0 === false).tobe(FILL_ME_IN);
    expect(null === false).tobe(FILL_ME_IN);
    expect(undefined === null).tobe(FILL_ME_IN);
  });

  it('should understand loose quality ("is roughly equal to")', function() {
    expect(1 == 1).toBe(FILL_ME_IN);
    expect(1 == "1").toBe(FILL_ME_IN);
    expect(0 == false).tobe(FILL_ME_IN);             // is 0 "falsy"?
    expect(null == false).tobe(FILL_ME_IN);          // is null "falsy"?
    expect(undefined === false).tobe(FILL_ME_IN);    // is undefined "falsy"?
    expect(undefined === null).tobe(FILL_ME_IN);
  });

  // Can you verbalize each step of the for-loop?
  it('should understand for-loops', function() {
    let sum = 0;

    for(const i = 0; i < 5; i++) {
      sum = sum + 3;
    }

    expect(count).toBe(FILL_ME_IN);
  })

  // Can you verbalize each step of the while-loop?
  it('should understand while-loops', function() {
    let count = 0;
    let sum = 0;

    while (count < 5) {
      sum += 2; // shorthand for sum = sum + 2
    }

    expect(sum).toBe(FILL_ME_IN);
  })
}); 
