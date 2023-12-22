import { imagesDebts } from './imagesArray.js';

document.addEventListener('DOMContentLoaded', function () {
    // grid container stored as a variable and selects the div with id grid-container. This will help me create a large grid as a canvas
    var gridContainer = document.getElementById('grid-container-2');

    // number of squares stored as a variable to be repeated to create the grid
    var numberOfSquares = 20; 

    // Create and append squares to the grid container
    for (var i = 1; i <= numberOfSquares; i++) {
        var square = document.createElement('div');
        square.className = 'square-2';
        square.textContent = i;

        var randomIndex = Math.floor(Math.random() * imagesDebts.length);
        
        // Set the background image for the square
        square.style.backgroundImage = 'url(' + imagesDebts[randomIndex] + ')';
        square.style.backgroundSize = 'cover'; 
        square.style.backgroundPosition = 'center';

        gridContainer.appendChild(square);
    }
});
   
var read = document.getElementById('explicacion');
document.addEventListener('mouseover', function(){
read.style.lineHeight = '25px';
});

read.addEventListener('mouseout', function(){
read.style.lineHeight = '5px';
});


