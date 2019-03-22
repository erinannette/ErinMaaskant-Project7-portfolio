$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});



// ACTIVE BUTTON IN PORTFOLIO FRONT END DEV SECTION
// const button = document.getElementsByClassName("button--fed");
// let i;

// for (i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//     });
// };

// FRONT END DEV SECTION - BUTTONS
$(function () {
    $('.brown--button').click(function () {
        $('.cuppajoe--section').hide();
        $('.cyclewatch--section').hide();
        $('.overwatch--section').hide();
        $('.psdconv--section').hide();

        $('.brown--section').show();
        
    });
    $('.cuppajoe--button').click(function () {
        $('.brown--section').hide();
        $('.cyclewatch--section').hide();
        $('.overwatch--section').hide();
        $('.psdconv--section').hide();

        $('.cuppajoe--section').show();
    });
    $('.cyclewatch--button').click(function () {
        $('.brown--section').hide();
        $('.cuppajoe--section').hide();
        $('.overwatch--section').hide();
        $('.psdconv--section').hide();

        $('.cyclewatch--section').show();
    });
    $('.overwatch--button').click(function () {
        $('.brown--section').hide();
        $('.cuppajoe--section').hide();
        $('.cyclewatch--section').hide();
        $('.psdconv--section').hide();

        $('.overwatch--section').show();
    });
    $('.psdconv--button').click(function () {
        $('.brown--section').hide();
        $('.cuppajoe--section').hide();
        $('.cyclewatch--section').hide();
        $('.overwatch--section').hide();

        $('.psdconv--section').show();
    });
});

// COMMS SECTION - BUTTONS
$(function () {
    $('.pubs--button').click(function () {
        $('.pubs--button').addClass('active');
        $('.change--button').removeClass('active');
        $('.trs--button').removeClass('active');

        $('.change--section').hide();
        $('.trs--section').hide();

        $('.pubs--section').show();
    });
    $('.change--button').click(function () {
        $('.change--button').addClass('active');
        $('.pubs--button').removeClass('active');
        $('.trs--button').removeClass('active');

        $('.pubs--section').hide();
        $('.trs--section').hide();

        $('.change--section').show();
    });
    $('.trs--button').click(function () {
        $('.trs--button').addClass('active');
        $('.pubs--button').removeClass('active');
        $('.change--button').removeClass('active');

        $('.pubs--section').hide();
        $('.change--section').hide();

        $('.trs--section').show();
    });
});

// COLLAPSIBLE BUTTONS - COMMS SECTION
const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {

        this.classList.toggle("active-coll");
        let content = this.nextElementSibling;

        // WITH ANIMATED COLLAPSE
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// HERO ANIMATION

app = {};
// --------- TOPS OF CUBES ---------
app.morphTop1 = anime({
    targets: '.animate1-1',
        points: [
            { value:
                '78.3,52.4 126.2,28.6 170.6,51.7 217.9,28.9 261.9,52 310,29.1 353.2,52.2 401.8,28.9 444,52.6 492.7,29.1 536.4,52.7 584.2,29.8 627.7,53.3 579.9,76.7 536.3,53 488.5,76.4 444.4,53 396.4,76.2 353.2,52.7 305.2,76 261.1,52.6 214,75.7 169.7,52.3 122.3,74.6'
            },
            { value:
                '75.6,54.3 121.3,27.6 167.8,53.3 212.9,27.6 258.9,53.3 304.9,27.6 350.3,53.3 396.6,27.1 440.9,53.4 487.4,27.1 533.3,53.3 578.9,27.6 624.6,53.8 578.9,79.9 533.3,53.6 487.6,79.9 441.4,53.9 395.6,79.9 350.3,53.8 304.4,79.9 258.3,53.9 213.3,79.9 166.9,53.9 121.6,78.9'
            },
            { value:
                '70.7,54.6 116.8,27.6 163.7,53.6 209.3,27.6 255.7,53.6 302.2,27.6 347.9,53.6 394.7,27.1 439.5,53.8 486.4,27.1 532.7,53.6 578.8,27.6 624.9,54.1 578.8,80.7 532.7,54 486.6,80.7 440,54.3 393.7,80.7 347.9,54.1 301.7,80.7 255.1,54.3 209.6,80.7 162.9,54.3 117.1,79.7'
            },
            { value: 
                '75.6,54.3 121.3,27.6 167.8,53.3 212.9,27.6 258.9,53.3 304.9,27.6 350.3,53.3 396.6,27.1 440.9,53.4 487.4,27.1 533.3,53.3 578.9,27.6 624.6,53.8 578.9,79.9 533.3,53.6 487.6,79.9 441.4,53.9 395.6,79.9 350.3,53.8 304.4,79.9 258.3,53.9 213.3,79.9 166.9,53.9 121.6,78.9'
            }
        ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});

app.morphTop2 = anime({
    targets: '.animate1-2',
    points: [
        { value: 
            '31.1,134.2 79,112.1 123.4,133.6 170.8,112.3 214.7,133.8 262.8,112.5 306.1,134 354.6,112.3 396.8,134.4 445.5,112.5 489.2,134.5 537.1,113.2 580.6,135.1 532.7,156.8 489.2,134.7 441.3,156.6 397.3,134.8 349.3,156.4 306.1,134.4 258,156.1 214,134.4 166.8,155.9 122.6,134.2 75.1,154.9'
        },
        { value: 
            '29.8,133.4 75.5,106.8 122,132.4 167.1,106.8 213.1,132.4 259.1,106.8 304.5,132.4 350.8,106.3 395.1,132.6 441.6,106.3 487.5,132.4 533.1,106.8 578.8,132.9 533.1,159.1 487.5,132.8 441.8,159.1 395.6,133.1 349.8,159.1 304.5,132.9 258.6,159.1 212.5,133.1 167.5,159.1 121.1,133.1 75.8,158.1'
        },
        { value:
            '33.5,134.9 79.6,107.9 126.5,133.9 172.1,107.9 218.5,133.9 264.9,107.9 310.6,133.9 357.4,107.4 402.1,134.1 449.1,107.4 495.3,133.9 541.4,107.9 587.5,134.4 541.4,160.9 495.3,134.2 449.2,160.9 402.6,134.6 356.4,160.9 310.6,134.4 264.4,160.9 217.8,134.6 172.4,160.9 125.6,134.6 79.9,159.9'
        },
        { value:
            '29.8,133.4 75.5,106.8 122,132.4 167.1,106.8 213.1,132.4 259.1,106.8 304.5,132.4 350.8,106.3 395.1,132.6 441.6,106.3 487.5,132.4 533.1,106.8 578.8,132.9 533.1,159.1 487.5,132.8 441.8,159.1 395.6,133.1 349.8,159.1 304.5,132.9 258.6,159.1 212.5,133.1 167.5,159.1 121.1,133.1 75.8,158.1'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphTop3 = anime({
    targets: '.animate1-3',
    points: [
        { value: 
            '77.8,213.9 125.3,190.9 169.3,213.3 216.2,191.2 259.7,213.5 307.5,191.4 350.3,213.7 398.5,191.2 440.3,214.1 488.6,191.4 531.9,214.2 579.3,192 622.5,214.8 575,237.4 531.9,214.5 484.4,237.2 440.7,214.5 393.1,236.9 350.3,214.2 302.7,236.7 259,214.1 212.2,236.5 168.4,213.9 121.4,235.4'
        },
        { value: 
            '75.6,212.6 121.3,186 167.8,211.6 212.9,186 258.9,211.6 304.9,186 350.3,211.6 396.6,185.5 440.9,211.8 487.4,185.5 533.3,211.6 578.9,186 624.6,212.1 578.9,238.3 533.3,212 487.6,238.3 441.4,212.3 395.6,238.3 350.3,212.1 304.4,238.3 258.3,212.3 213.3,238.3 166.9,212.3 121.6,237.3'
        },
        { value:
            '73.3,215.2 119.2,188.2 165.9,214.2 211.3,188.2 257.5,214.2 303.7,188.2 349.3,214.2 395.8,187.7 440.3,214.4 487.1,187.7 533.1,214.2 579,188.2 624.9,214.7 579,241.2 533.1,214.5 487.2,241.2 440.8,214.9 394.8,241.2 349.3,214.7 303.2,241.2 256.8,214.9 211.6,241.2 165.1,214.9 119.5,240.2'
        },
        { value: 
            '75.6,212.6 121.3,186 167.8,211.6 212.9,186 258.9,211.6 304.9,186 350.3,211.6 396.6,185.5 440.9,211.8 487.4,185.5 533.3,211.6 578.9,186 624.6,212.1 578.9,238.3 533.3,212 487.6,238.3 441.4,212.3 395.6,238.3 350.3,212.1 304.4,238.3 258.3,212.3 213.3,238.3 166.9,212.3 121.6,237.3'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
// // --------- LEFT SIDE OF CUBES ---------
app.morphLeft1 = anime({
    targets: '.animate2-1',
    points: [
        { value: '171.1,373.3 165.5,322.1 124.2,293.8 118.7,242.1 78.6,214.1 72.2,163.4 33.1,138 37.6,185.3 77.8,213.7 84,265.4 124.2,293.1 130.3,344.7' },
        { value: '168.6,369.9 168.4,317.3 122.1,291 122.1,237.9 77.1,211.8 75.8,159.7 31.8,136.2 31.2,184.9 76.1,211.4 77,264.5 122.2,290.3 123,343.3' },
        { value: '171.5,374.7 171.3,321.3 125.2,294.7 125.2,240.8 80.5,214.4 79.3,161.5 35.5,137.7 34.9,187 79.5,214 80.4,267.8 125.3,293.9 126.1,347.7' },
        { value: '168.6,369.9 168.4,317.3 122.1,291 122.1,237.9 77.1,211.8 75.8,159.7 31.8,136.2 31.2,184.9 76.1,211.4 77,264.5 122.2,290.3 123,343.3'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft2 = anime({
    targets: '.animate2-2',
    points: [
        { value: '212.6,291.9 207.4,242.7 167.7,215.6 162.5,166 123.9,139.2 117.8,89.5 78.3,62.7 84.5,111.5 123.1,138.8 128.9,188.4 167.7,215 173.4,264.5' },
        { value: '213.8,290.7 213.7,238.1 167.3,211.9 167.3,158.7 122.4,132.6 121.1,79.5 75,53.5 76.4,105.7 121.4,132.2 122.3,185.4 167.4,211.1 168.2,264.1' },
        { value: '215,293.7 212.7,243.6 170.4,216.7 168.2,166.1 127.2,139.4 123.9,88.8 81.9,62.2 85.3,111.9 126.3,139 129.3,189.6 170.5,216 173.4,266.5' },
        { value: '213.8,290.7 213.7,238.1 167.3,211.9 167.3,158.7 122.4,132.6 121.1,79.5 75,53.5 76.4,105.7 121.4,132.2 122.3,185.4 167.4,211.1 168.2,264.1'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft3 = anime({
    targets: '.animate2-3',
    points: [
        { value: '305.7,294.8 300,243.7 258.9,215.4 253.3,163.8 213.3,135.7 206.6,84.1 165.8,56 172.4,106.8 212.4,135.3 218.7,186.9 258.9,214.7 265.1,266.2' },
        { value: '304.8,290.7 304.6,238.1 258.3,211.9 258.2,158.7 213.3,132.6 212,79.5 166,53.5 167.4,105.7 212.3,132.2 213.2,185.4 258.3,211.1 259.2,264.1' },
        { value: '303.1,291.7 302.9,243 260.7,218.6 260.7,169.3 219.9,145.1 218.7,95.9 176.8,71.8 178.1,120.1 218.9,144.8 219.8,194 260.8,217.9 261.6,267' },
        { value: '304.8,290.7 304.6,238.1 258.3,211.9 258.2,158.7 213.3,132.6 212,79.5 166,53.5 167.4,105.7 212.3,132.2 213.2,185.4 258.3,211.1 259.2,264.1'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft4 = anime({
    targets: '.animate2-4',
    points: [
        { value: '390.1,298.9 386.2,248.2 348,216.9 344.2,165.6 307.1,134.7 302.3,83.3 264.3,52.3 269.1,102.8 306.2,134.2 310.7,185.5 348,216.2 352.3,267.4' },
        { value: '396.3,290.7 396.2,238.1 349.8,211.9 349.8,158.7 304.9,132.6 303.6,79.5 257.5,53.5 258.9,105.7 303.9,132.2 304.8,185.4 349.9,211.1 350.7,264.1' },
        { value: '402.2,300.2 400.4,248.5 356.5,221.2 354.8,169 312.3,142 309.4,89.8 265.8,62.8 268.7,114.1 311.3,141.6 313.8,193.8 356.6,220.5 359,272.6' },
        { value: '396.3,290.7 396.2,238.1 349.8,211.9 349.8,158.7 304.9,132.6 303.6,79.5 257.5,53.5 258.9,105.7 303.9,132.2 304.8,185.4 349.9,211.1 350.7,264.1'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft5 = anime({
    targets: '.animate2-5',
    points: [
        { value: '483.5,299.3 480.1,248.1 440.9,217.4 437.7,165.8 399.6,135.4 395.4,83.7 356.5,53.3 360.7,104.2 398.8,135 402.8,186.7 441,216.7 444.8,268.3' },
        { value: '488.4,291.2 488.2,238.6 441.9,212.4 441.8,159.2 396.9,133.1 395.6,80 349.6,54 351,106.2 395.9,132.7 396.8,185.9 442,211.6 442.8,264.6' },
        { value: '490.5,295.7 489.2,244.4 445.4,217.9 444.3,166.1 401.9,139.8 399.6,88 356.1,61.8 358.5,112.6 400.9,139.4 402.9,191.2 445.5,217.2 447.3,268.8' },
        { value: '488.4,291.2 488.2,238.6 441.9,212.4 441.8,159.2 396.9,133.1 395.6,80 349.6,54 351,106.2 395.9,132.7 396.8,185.9 442,211.6 442.8,264.6'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft6 = anime({
    targets: '.animate2-6',
    points: [
        { value: '574.2,297.5 569.2,247.2 531.5,215.8 526.6,165 490,134 484.1,83 446.6,51.9 452.5,102 489.2,133.5 494.7,184.4 531.5,215.1 537,265.9' },
        { value: '579.8,291.2 579.6,238.6 533.3,212.4 533.3,159.2 488.3,133.1 487.1,80 441,54 442.4,106.2 487.3,132.7 488.2,185.9 533.4,211.6 534.2,264.6' },
        { value: '580.7,292.8 579.2,242.7 536.5,216.4 535,165.7 493.7,139.7 491.1,89 448.7,63 451.3,112.8 492.7,139.3 495,190 536.5,215.7 538.7,266.3' },
        { value: '579.8,291.2 579.6,238.6 533.3,212.4 533.3,159.2 488.3,133.1 487.1,80 441,54 442.4,106.2 487.3,132.7 488.2,185.9 533.4,211.6 534.2,264.6'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphLeft7 = anime({
    targets: '.animate2-7',
    points: [
        { value: '662.4,290.1 659.8,240.9 621.4,212 618.9,162.3 581.7,133.8 578.1,84 540,55.5 543.6,104.4 580.9,133.3 584.1,183.1 621.5,211.3 624.7,261' },
        { value: '671.2,290.7 671,238.1 624.6,211.9 624.6,158.7 579.7,132.6 578.4,79.5 532.4,53.5 533.8,105.7 578.7,132.2 579.6,185.4 624.7,211.1 625.5,264.1' },
        { value: '672.2,293 670.4,242.8 627.8,216.3 626.1,165.6 584.9,139.3 582,88.6 539.7,62.4 542.7,112.2 583.9,138.9 586.5,189.6 627.9,215.6 630.3,266.1' },
        { value: '671.2,290.7 671,238.1 624.6,211.9 624.6,158.7 579.7,132.6 578.4,79.5 532.4,53.5 533.8,105.7 578.7,132.2 579.6,185.4 624.7,211.1 625.5,264.1'
        }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
// // --------- RIGHT SIDE OF CUBES ---------
app.morphRight1 = anime({
    targets: '.animate3-1',
    points: [
        { value: '31.7,291.1 73.6,261.8 77.7,211.9 119.2,183 124.6,133.8 165.6,104 169.7,53.5 128.7,82.1 124.5,132.8 83.3,162.4 78.3,211.6 37.2,241' },
        { value: '29.3,290.8 76.1,264.3 75.3,211.5 121.6,185.5 122.3,133.5 168,106.4 167.1,53 121.3,78.8 122.2,132.5 76.3,159.3 76,211.3 30.2,237.9' },
        { value: '29.4,286 76.4,258.3 75.1,205.6 121.7,178.3 121.9,126.4 167.8,98.1 166.4,44.8 120.4,71.8 121.8,125.4 75.7,153.4 75.8,205.3 29.8,233.2' },
        { value: '29.3,290.8 76.1,264.3 75.3,211.5 121.6,185.5 122.3,133.5 168,106.4 167.1,53 121.3,78.8 122.2,132.5 76.3,159.3 76,211.3 30.2,237.9'}
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphRight2 = anime({
    targets: '.animate3-2',
    points: [
        { value: '121.5,296.7 164.7,266.3 168.6,215.3 211.4,185.3 217.1,134.5 259.3,103.6 263.8,51.5 221.5,81.1 217,133.5 174.6,164.2 169.3,215 126.9,245.5' },
        { value: '121.8,291 168.6,264.6 167.3,212.3 213.6,186.2 214.3,134.3 260,107.1 259.1,53.8 213.3,79.5 214.2,133.2 168.3,160 168,212 122.2,238.7' },
        { value: '122.8,283.6 169.8,255.9 168,203.7 214.6,176.4 214.8,124.6 260.7,96.2 259.3,43 213.3,70 214.7,123.5 168.6,151.6 168.7,203.4 122.7,231.3' },
        { value: '121.8,291 168.6,264.6 167.3,212.3 213.6,186.2 214.3,134.3 260,107.1 259.1,53.8 213.3,79.5 214.2,133.2 168.3,160 168,212 122.2,238.7'}
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphRight3 = anime({
    targets: '.animate3-3',
    points: [
        { value: '214,293.6 256.1,264.6 258.2,214.6 300.8,186.3 305.1,136.5 347.2,107.2 350.2,56.1 308.1,84.1 305.1,135.5 262.8,164.4 258.9,214.3 216.7,243.1' },
        { value: '214.3,291.5 260.1,264.6 258.3,212.3 304.6,186.2 305.4,134.3 351,107.1 350.1,53.8 304.3,79.5 305.2,133.2 259.3,160 259,212 213.2,238.7' },
        { value: '216.3,286.5 262.2,258.3 259.9,206.2 306.5,178.8 306.8,127 352.7,98.6 351.3,45.4 305.2,72.4 306.6,125.9 260.5,154 260.6,205.9 214.6,233.8' },
        { value: '214.3,291.5 260.1,264.6 258.3,212.3 304.6,186.2 305.4,134.3 351,107.1 350.1,53.8 304.3,79.5 305.2,133.2 259.3,160 259,212 213.2,238.7' }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphRight4 = anime({
    targets: '.animate3-4',
    points: [
        { value: '303.2,293.7 345.3,263.6 348.8,213.1 391.4,183.8 396.5,133.5 438.6,103.2 442.5,51.7 400.5,80.6 396.5,132.5 354.3,162.5 349.4,212.8 307.3,242.6' },
        { value: '305.3,290.8 351,263.8 349.7,211.5 396.1,185.5 396.8,133.5 442.4,106.4 441.5,53 395.8,78.8 396.6,132.5 350.8,159.3 350.4,211.3 304.6,237.9' },
        { value: '308.1,283.1 354.1,255 352.3,202.8 398.8,175.5 399.1,123.7 445,95.3 443.6,42.1 397.6,69.1 398.9,122.6 352.9,150.7 353,202.5 307,230.4' },
        { value: '305.3,290.8 351,263.8 349.7,211.5 396.1,185.5 396.8,133.5 442.4,106.4 441.5,53 395.8,78.8 396.6,132.5 350.8,159.3 350.4,211.3 304.6,237.9' }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphRight5 = anime({
    targets: '.animate3-5',
    points: [
        { value: '394.4,293.4 436.1,263.8 439.5,214.3 481.3,185.6 486.4,136.2 527.7,106.5 531.5,55.9 490.3,84.3 486.4,135.2 445,164.6 440.2,214 398.8,243.3' },
        { value: '397.3,290.8 443.6,263.8 442.3,211.5 488.6,185.5 489.4,133.5 535,106.4 534.1,53 488.3,78.8 489.2,132.5 443.3,159.3 443,211.3 397.2,237.9' },
        { value: '401.1,275 447.6,246.9 445.8,194.7 492.3,167.4 492.6,115.5 538.5,87.2 537.1,33.9 491.1,60.9 492.4,114.5 446.4,142.5 446.5,194.4 400.5,222.3' },
        { value: '397.3,290.8 443.6,263.8 442.3,211.5 488.6,185.5 489.4,133.5 535,106.4 534.1,53 488.3,78.8 489.2,132.5 443.3,159.3 443,211.3 397.2,237.9' }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});
app.morphRight6 = anime({
    targets: '.animate3-6',
    points: [
        { value: '491.6,292.6 534.2,263.6 535.8,213 579.3,185.3 582.7,134.9 625.7,106.2 627.7,54.5 584.7,81.9 582.6,133.9 539.5,162.3 536.4,212.7 493.4,240.9' },
        { value: '488.9,291 534.2,263.6 532.9,211.3 579.2,185.2 579.9,133.3 625.6,106.1 624.7,52.8 578.9,78.5 579.8,132.2 533.9,159 533.6,211 487.8,237.7' },
        { value: '493.6,270.7 539,242 537.3,189.9 583.8,162.6 584.1,110.7 630,82.4 628.6,29.1 582.5,56.1 583.9,109.7 537.8,137.7 537.9,189.6 491.9,217.5' },
        { value: '488.9,291 534.2,263.6 532.9,211.3 579.2,185.2 579.9,133.3 625.6,106.1 624.7,52.8 578.9,78.5 579.8,132.2 533.9,159 533.6,211 487.8,237.7' }
    ],
    easing: 'easeInOutCirc',
    duration: 18000,
    loop: true
});