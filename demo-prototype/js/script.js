function setbackground()
{
    window.setTimeout( "setbackground()", 1000); // 1000 milliseconds (1 second) delay

    var index = Math.round(Math.random() * 9);
    var colorValue = "FFFFFF"; // default color - white (index = 0)

    // hard coding values for prototype
    switch(index) {
        case 1:
            colorValue = "a6beff"; // light blue
            break;
        case 2 :
            colorValue = "bba6ff"; // lilac
            break;
        case 3:
            colorValue = "beffa6"; // light green
            break;
        case 4 :
            colorValue = "ffa6be"; // light pink
            break;
        case 5:
            colorValue = "a6ebff"; // lighter blue
            break;
        case 6:
            colorValue = "ffe7a6"; // light yellow
            break;
        case 7:
            colorValue = "ffbba6"; // peach
            break;
        case 8 :
            colorValue = "ffa6ea"; // light-ish pink
            break;
        case 9:
            colorValue = "eaffa6"; // yellow but different
            break;
        case 10 :
            colorValue = "a6ffe8"; // turquoise
            break;
    }

document.getElementsByTagName("body")[0].style.backgroundColor = `#${colorValue}`;
}