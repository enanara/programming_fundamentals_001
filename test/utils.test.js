const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 10 when passed 20", () => {
    expect(utils.makeHalfPrice(20)).toBe(10);
  });
});

describe("utils.countBooks", () => {
  test("returns number of books when passed an array with book names", () => {
    expect(utils.countBooks(["Harry Potter", "Hobbit", "Mindset"])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock(book)).toBe(true);
  });
  test("return false if the title is not in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
    expect(utils.isInStock(book)).toBe(false);
  });

});


describe("utils.getTotalOrderPrice", () => {
  test("returns total order price whit aded vat when passed price and quatity", () => {
    expect(utils.getTotalOrderPrice(10,5)).toBe(60);
  });
  test("returns total order price whit aded vat when passed price and quatity", () => {
    expect(utils.getTotalOrderPrice(18,2)).toBe(43.2);
  });
  test("returns total order price whit aded vat when passed price and quatity", () => {
    expect(utils.getTotalOrderPrice(8,10)).toBe(96);
  });
});