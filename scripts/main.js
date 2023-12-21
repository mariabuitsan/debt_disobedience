document.addEventListener('DOMContentLoaded', function () {
    // grid container stored as a variable and selects the div with id grid-container. This will help me create a large grid as a canvas
    var gridContainer = document.getElementById('grid-container');

    // number of squares stored as a variable to be repeated to create the grid
    var numberOfSquares = 1000; 

    //this are the squares that will need to be modified to create the tittle saved as an array
    var debtDisobedience = [12, 62, 110, 111, 112, 160, 162, 210, 212, 260, 262, 310, 311, 312, 114, 115, 116, 164, 166, 214, 215, 216, 264, 314, 315, 316, 68, 118, 119, 120, 168, 170, 218, 220, 268, 270, 318, 319, 320, 322, 272, 222, 172, 122, 72, 21, 22, 23, 18, 409, 459, 509, 508, 507, 557, 607, 657, 707, 708, 709, 659, 609, 559, 511, 561, 611, 661, 711, 513, 514, 515, 563, 613, 614, 615, 665, 715, 714, 713, 517, 518, 519, 567, 617, 667, 717, 718, 719, 669, 619, 569, 421, 471, 521, 522, 523, 571, 621, 671, 721, 722, 723, 673, 623, 573, 525, 526, 527, 577, 627, 626, 625, 575, 675, 725, 726, 727, 431, 481, 531, 530, 529, 579, 629, 679, 729, 730, 731, 681, 631, 581, 533, 583, 633, 683, 733, 535, 536, 537, 585, 635, 685, 735, 736, 737, 636, 637, 587, 539, 540, 541, 589, 639, 689, 739, 591, 641, 691, 741, 543, 544, 545, 593, 643, 693, 743, 744, 745, 547, 548, 549, 597, 697, 747, 748, 749, 647, 648, 649, 599];

    //memes and images saved as another array
    var imagesDebts = [
        'assets/img/bankruptcy-meme.png',
        'assets/img/betty-la-fea-patricia-fernandez.gif',
        'assets/img/cant-pay-wont-pay.jpg',
        'assets/img/corporations-buy-homes.jpeg',
        'assets/img/debt-resisters-manual.jpeg',
        'assets/img/debtors-union.jpeg',
        'assets/img/feminist-reading-of-debt.jpeg',
        'assets/img/fmi-protest.JPG',
        'assets/img/Hannah-Appel-794x1030-e1545210471640-225x300.jpeg',
        'assets/img/how-to-pay-of-debt-v0-c53j4ryf51n81.webp',
        'assets/img/la-deuda-es-con-nosotras.JPG',
        'assets/img/large_image_1506432962.jpeg',
        'assets/img/money_memories_meme.png',
        'assets/img/money-i-used-to-owe.jpeg',
        'assets/img/never-repay.jpeg',
        'assets/img/occupy-wall-st.jpeg',
        'assets/img/pay-off-debt-meme.webp',
        'assets/img/socialist-deminist-reading.webp',
        'assets/img/strike-debt.png',
        'assets/img/student-loan-debt.jpeg',
        'assets/img/sur-protest.JPG',
        'assets/img/The-loan-officer-After-they-run-your-crEdit-report-meme-22387.jpeg',
        'assets/img/this-is-fine.jpeg',
        'assets/img/tinta-limon.png',
        'assets/img/you-get-a-loan.webp',
        'asets/img/Veronica-Gago.png',
        'assets/img/Luci-Cavallero.jpeg',
    ]
    //need a new empty array for the modified squares
    var modifiedSquares = []; 

    // Create and append squares to the grid container
    for (var i = 1; i <= numberOfSquares; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.textContent = i;

        if (debtDisobedience.includes(i)){
            square.classList.add('debt-cursor');
            square.addEventListener('mouseover', function (){
                if (modifiedSquares.length < debtDisobedience.length) {
                    if(Math.random() < 0.77){
                        this.style.backgroundColor = 'black';
                    }
                    else {
                        var randomImagesDebts = imagesDebts[Math.floor(Math.random() * imagesDebts.length)];
                        this.style.backgroundImage = 'url(' + randomImagesDebts + ')'
                        this.style.backgroundSize = 'cover';
                    }
                if (!modifiedSquares.includes(this)){
                    modifiedSquares.push(this);
                }
                }
            });
        }

        gridContainer.appendChild(square);
    }
});
