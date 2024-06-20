window.addEventListener('DOMContentLoaded', function() {
    // Code inside here will run after the DOMContentLoaded event is triggered

    //Select the color-box and change-color-btn element
    const colorBox = document.getElementById("color-box");

    //Select the change-color-btn element
    const changeColorBtn = document.getElementById("change-color-btn");

    // Generate random color RGB value  
    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    //Change the background color of the color-box element
    function colorchange() {
        colorBox.style.backgroundColor = getRandomColor();
    }
    //Add an event listener (Click) to the change-color-btn element
    changeColorBtn.addEventListener("click", colorchange);


    // EN PLUS - not required : change the color of the h1 element when the mouse is over it
    const h1 = document.querySelector("h1");

    // Generate random color HEX value
    function getRandomColorHex() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
     // Change the color of the change-color-btn element
    function colorchangeHex() {
        h1.style.color = getRandomColorHex();
    }
    //Add an event listener (mousemove)  to the h1 element
    h1.addEventListener("mousemove", colorchangeHex);
});






        
        

           

