// Write your code here!
// Import the necessary helper functions
const helpers = require('./helpers');

describe("index.html", () => {
  describe("after index.js is processed", () => {
    // Remove the 'main#main' node from the DOM
    helpers.removeChild('main#main');

    // Create a new header element and assign it to the 'newHeader' variable
    const newHeader = document.createElement("h1");
    
    // Set the id of the 'newHeader' element to 'victory'
    newHeader.id = "victory";

    // Set the text content of the 'newHeader' element
    newHeader.textContent = "Your Name is the champion"; // Replace "Your Name" with your actual name

    // Check if the 'newHeader' element contains the expected text
    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"YOUR-NAME is the champion\" (with your name in place of YOUR-NAME) inside it", () => {
      expect(newHeader.textContent).to.include("is the champion");
    });

  });
});
