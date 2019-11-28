const mdLinks = require("../index.js");


describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  });



  test('return an array', () => {
   return  mdLinks('lib/__tests__/test.md')
    .then((response) => {
      expect(response).toEqual([{href: "https://github.com/workshopper/learnyounode", text: "learnyounode"}, 
      {href:"https://github.com/workshopper/how-to-npm", text: "how-to-npm"}])

    })
  });
  

  test('return a error messenger', () => {
    return  mdLinks('lib/_tests_/test.md')
     .catch((response) => {
       expect(response).toEqual('file is not found')
 
     })
   });