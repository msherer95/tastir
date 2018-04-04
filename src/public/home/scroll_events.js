// scroll events for home page

/* 

FIXME: write function to check if top of element is 
within viewport on page load (el.top < windowHeight):
    => if (true) { fade in automatically}
    => else { add scroll event listener}

FIXME: add window.resize event listeners to all fade-in elements:
    => if window height changes, run function above to automatically
    fade in elements

*/ 

// fade in container2 header/subheader/separator line on scroll
let container1ScrollInto = () => {
    let containerHeader = document.getElementsByClassName('container2-heading-row');
    containerHeader = containerHeader[0].children[0];

    let containerDesc = document.getElementsByClassName('container2-description-row');
    containerDesc = containerDesc[0].children[0];

    let containerSep = document.getElementById('container1-sep');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 65) {
            containerSep.style.transform = "scale(1,1)";
            containerHeader.style.transform = "translateY(0px)";
            containerHeader.style.opacity = 1;
            containerDesc.style.transform = "translateY(0px)";
            containerDesc.style.opacity = 1;
        }
    });
};

// fade in container2 tiles on scroll
let container2TilesScrollInto = () => {
    let wineTile = document.getElementById('wine-tile');
    let dollarTile = document.getElementById('dollar-tile');
    let menuTile = document.getElementById('menu-tile');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 355) {
            dollarTileEnter(dollarTile);
            menuTileEnter(menuTile);
            wineTileEnter(wineTile);
        }
    });
};

// fade in container3 header/subheader/separator on scroll
let container3ScrollInto = () => {
    let restaurantHeader = document.getElementsByClassName('container3-heading-row');
    restaurantHeader = restaurantHeader[0].children[0];

    let restaurantSubHeader = document.getElementsByClassName('container3-subheading-row');
    restaurantSubHeader = restaurantSubHeader[0].children[0];

    let restaurantSep = document.getElementsByClassName('container2-sep');
    restaurantSep = restaurantSep[0];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 990) {
            restaurantHeader.style.transform = "translateY(0)";
            restaurantHeader.style.opacity = 1;
            restaurantSubHeader.style.transform = "translateY(0)";
            restaurantSubHeader.style.opacity = 1;
            restaurantSep.style.transform = "scale(1,1)";
        }
    });
};

// fade in restaurant instructions on scroll
let instructionsScrollInto = () => {
    let instructions = document.getElementsByClassName('instructions');
    instructions = instructions[0];

    let instructionNum = document.getElementsByClassName('instruction-num');

    window.addEventListener('scroll', () => {
        fadeInInstructions(1105, instructions, instructionNum, 0);
        fadeInInstructions(1240, instructions, instructionNum, 1);
        fadeInInstructions(1394, instructions, instructionNum, 2);
    });
};

// dollar tile appears on scroll
let dollarTileEnter = (dollarTile) => {
    dollarTile.style.transform = "rotateY(0deg)";

    setTimeout(() => {
        dollarTile.children[1].style.transform = "scale(1,1)";
    }, 250);

    setTimeout(() => {
        dollarTile.children[0].style.opacity = 1;
        dollarTile.children[0].style.transform = "translateY(0)";
    }, 350);
};

// menu tile appears on scroll
let menuTileEnter = (menuTile) => {
    setTimeout(() => {
        menuTile.style.transform = "rotateY(0deg)";
    }, 600);

    setTimeout(() => {
        menuTile.children[2].style.transform = "scale(1,1)";
    }, 850);

    setTimeout(() => {
        menuTile.children[1].style.opacity = 1;
        menuTile.children[1].style.transform = "translateY(0)";
    }, 950);
};

// wine tile appears on scroll
let wineTileEnter = (wineTile) => {
    setTimeout(() => {
        wineTile.style.transform = "rotateY(0deg)";
    }, 600);

    setTimeout(() => {
        wineTile.children[1].style.transform = "scale(1,1)";
    }, 850);

    setTimeout(() => {
        wineTile.children[0].style.opacity = 1;
        wineTile.children[0].style.transform = "translateY(0)";
    }, 950);
};

// fade in restaurant description at specific scroll positions
let fadeInInstructions = (scrollPos, instructionsObj, instructionNumObj, instructionNum) => {
    
    // check instruction opacity to only perform animation once
    // prevents repeat animation each time you scroll
    if (window.scrollY > scrollPos && window.getComputedStyle(instructionsObj.children[instructionNum]).getPropertyValue('opacity') < 1) {
        instructionsObj.children[instructionNum].style.opacity = 1;
        instructionNumObj[instructionNum].children[0].style.transform = "perspective(1000px) translateZ(200px)";
        instructionNumObj[instructionNum].children[0].style.transition = "transform 200ms cubic-bezier(0.39,0.5,0.15,1.36)";

        setTimeout(() => {
            instructionNumObj[instructionNum].children[0].style.transform = "translateZ(0px)";
        }, 100);
    }
};

// grow dashed line either halfway or full way based on scroll position
let dashedLineGrow = () => {
    let dashedLine = document.getElementsByClassName('dashed-line-wrap');
    dashedLine = dashedLine[0].children[0];
    let blueStripe = document.getElementsByClassName('blue-stripe');
    let lineHalf = false;
    let lineFull = false;
    let clipSize = 100;

    // grow halfway
    let growHalf = () => {
        window.addEventListener('scroll', () => {

            // make sure clipping mask is full
            if (window.scrollY > 1240 && clipSize == 100) {
                lineHalf = true;

                // shrink clipping mask by 1% at a time until half full
                let clipMaskHalfShrink = () => {
                    clipSize -= 1;
                    dashedLine.style.clipPath = 'inset(0 0'+ ' ' + clipSize + '% 0)';

                    if (clipSize > 50) {
                        requestAnimationFrame(clipMaskHalfShrink);
                    }
                };

                requestAnimationFrame(clipMaskHalfShrink);
                blueStripeAppear(); // fade in blue stripes on side image

            }
        });
    };

    // fade in each stripe at 150ms intervals
    let blueStripeAppear = () => {
        let blueStripeDelay = 0;
        for (let i=2; i<8; i++) {
            blueStripe[i].style.transitionDelay = blueStripeDelay + 'ms';
            blueStripeDelay += 150;
            blueStripe[i].style.transform = "scale(1,1)";
        }
    };

    // grow full way
    let growFull = () => {
        window.addEventListener('scroll', () => {

            // make sure line is already halfway grown, but not yet full
            if (window.scrollY > 1388 && lineHalf && !lineFull) {
                lineFull = true;

                // shrink clipping mask by 1% at a time until it's gone
                let clipMaskFullShrink = () => {
                    clipSize -= 1;
                    dashedLine.style.clipPath = 'inset(0 0'+ ' ' + clipSize + '% 0)';

                    if (clipSize > 0) {
                        requestAnimationFrame(clipMaskFullShrink);
                    }
                };

                requestAnimationFrame(clipMaskFullShrink);
            }
        });
    };

    // attach half and full grow event listeners
    growHalf();
    growFull();

};

// fade in "fee" row at bottom of container3 on scroll
let feeRowScrollInto = () => {
    let feeRow = document.getElementsByClassName('fee-row');
    feeRow = feeRow[0];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1650) {
            feeRow.children[0].style.transform = "translateX(0)";
            feeRow.children[0].style.opacity = 1;
            feeRow.children[2].style.transform = "translateX(0)";
            feeRow.children[2].style.opacity = 1;

            setTimeout(() => {
                feeRow.children[1].style.transform = "scale(1,1)";
            }, 200);
        }
    });
};

// fade in container4 header/separator on scroll
let container4ScrollInto = () => {
    let aboutSep = document.getElementById('about-sep');
    let aboutHeader = document.getElementsByClassName('container4-heading-row');
    aboutHeader = aboutHeader[0];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1915) {
            aboutSep.style.transform = "scale(1,1)";
            aboutHeader.children[0].style.opacity = 1;
            aboutHeader.children[0].style.transform = "translateY(0)";
        }
    });
};

// fade in container4 tiles on scroll
let container4TilesScrollInto = () => {
    let aboutLeft = document.getElementsByClassName('container4-description-left')[0];
    let aboutRight = document.getElementsByClassName('container4-description-right')[0];
    let aboutShadow = document.getElementsByClassName('desc-right-shadow')[0];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 2110) {
            aboutLeft.style.transform = "translateX(0)";
            aboutLeft.style.opacity = 1;
            aboutRight.style.display = "block";

            setTimeout(() => {
                aboutRight.style.transform = "translateX(0)";
            aboutRight.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                aboutShadow.style.opacity = 1;
            }, 50);
        }
    });
};

// object containing all primary functions for scrolling events
let scrollEvents = {
    container1ScrollInto,
    container2TilesScrollInto,
    container3ScrollInto,
    fadeInInstructions,
    instructionsScrollInto,
    dashedLineGrow,
    feeRowScrollInto,
    container4ScrollInto,
    container4TilesScrollInto
};

export default scrollEvents;
