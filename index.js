// Import the necessary helper functions
const helpers = require('./helpers.js');

describe("index.html", () => {
  describe("after index.js is processed", () => {
    // Remove the 'main#main' node from the DOM
    before(() => {
      helpers.removeChild('main#main');
    });

    // Declare the newHeader variable outside of the tests
    let newHeader;

    // Create a new header element and assign it to the 'newHeader' variable
    beforeEach(() => {
      newHeader = document.createElement("h1");
      // Set the id of the 'newHeader' element to 'victory'
      newHeader.id = "victory";
      // Set the text content of the 'newHeader' element
      newHeader.textContent = "Your Name is the champion"; // Replace "Your Name" with your actual name
      // Append the 'newHeader' element to the document body
      document.body.appendChild(newHeader);
    });
    
    it("no longer has DOM node 'main#main'", () => {
      // Test if the 'main#main' node is removed
      expect(document.querySelector('main#main')).to.not.exist;
    });

    it("has a 'newHeader' variable that points to an <h1> node", () => {
      // Test if the 'newHeader' variable points to an <h1> node
      expect(newHeader.nodeName).to.equal("H1");
    });

    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      // Test if the 'newHeader' variable points to an element with id 'victory'
      expect(newHeader.id).to.equal("victory");
    });

    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"YOUR-NAME is the champion\" (with your name in place of YOUR-NAME) inside it", () => {
      // Test if the 'newHeader' element contains the expected text
      expect(newHeader.textContent).to.include("is the champion");
    });
  });
});
