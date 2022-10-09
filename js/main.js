//changing paint color//
let changePaint = document.querySelector('#paint').style;

document.querySelector('#whitePaint').onclick = whitePaint;
document.querySelector('#creamPaint').onclick = creamPaint;
document.querySelector('#greyPaint').onclick = greyPaint;
document.querySelector('#darkBluePaint').onclick = darkBluePaint;
document.querySelector('#skyBluePaint').onclick = skyBluePaint;
document.querySelector('#pinkPaint').onclick = pinkPaint;
document.querySelector('#darkGreenPaint').onclick = darkGreenPaint;
document.querySelector('#lightGreenPaint').onclick = lightGreenPaint;
document.querySelector('#lemonPaint').onclick = lemonPaint;
document.querySelector('#violetPaint').onclick = violetPaint;

function whitePaint(){
    changePaint.backgroundColor = 'rgb(229	230	228	)';
}
function creamPaint(){
    changePaint.backgroundColor = 'rgb(230	217	192	)';
}

function greyPaint(){
    changePaint.backgroundColor = 'rgb(158	162	156	)';
}
function darkBluePaint(){
    changePaint.backgroundColor = 'rgb(40	67	97	)';
}
function skyBluePaint(){
    changePaint.backgroundColor = 'rgb(178	195	214	)';
}
function pinkPaint(){
    changePaint.backgroundColor = 'rgb(207	126	141	)';
}
function darkGreenPaint(){
    changePaint.backgroundColor = 'rgb(40	90	83	)';
}
function lightGreenPaint(){
    changePaint.backgroundColor = 'rgb(184	221	199	)';
}
function lemonPaint(){
    changePaint.backgroundColor = 'rgba(229	200	118	)';
}
function violetPaint(){
    changePaint.backgroundColor = 'rgb(191	186	220	)';
}

//changing carpet color//
let changeCarpet = document.querySelector('#carpet').style;

document.querySelector('#whiteCarpet').onclick = whiteCarpet;
document.querySelector('#creamCarpet').onclick = creamCarpet;
document.querySelector('#greyCarpet').onclick = greyCarpet;
document.querySelector('#darkBlueCarpet').onclick = darkBlueCarpet;
document.querySelector('#skyBlueCarpet').onclick = skyBlueCarpet;
document.querySelector('#pinkCarpet').onclick = pinkCarpet;
document.querySelector('#darkGreenCarpet').onclick = darkGreenCarpet;
document.querySelector('#lightGreenCarpet').onclick = lightGreenCarpet;
document.querySelector('#lemonCarpet').onclick = lemonCarpet;
document.querySelector('#violetCarpet').onclick = violetCarpet;

function whiteCarpet(){
    changeCarpet.backgroundColor = 'rgb(229	230	228	)';
}
function creamCarpet(){
    changeCarpet.backgroundColor = 'rgb(230	217	192	)';
}

function greyCarpet(){
    changeCarpet.backgroundColor = 'rgb(158	162	156	)';
}
function darkBlueCarpet(){
    changeCarpet.backgroundColor = 'rgb(40	67	97	)';
}
function skyBlueCarpet(){
    changeCarpet.backgroundColor = 'rgb(178	195	214	)';
}
function pinkCarpet(){
    changeCarpet.backgroundColor = 'rgb(207	126	141	)';
}
function darkGreenCarpet(){
    changeCarpet.backgroundColor = 'rgb(40	90	83	)';
}
function lightGreenCarpet(){
    changeCarpet.backgroundColor = 'rgb(184	221	199	)';
}
function lemonCarpet(){
    changeCarpet.backgroundColor = 'rgba(229	200	118	)';
}
function violetCarpet(){
    changeCarpet.backgroundColor = 'rgb(191	186	220	)';
}

//changing furniture hues//
document.querySelector('#hue1').onclick = hue1Furniture;
document.querySelector('#hue2').onclick = hue2Furniture;
document.querySelector('#hue3').onclick = hue3Furniture;
document.querySelector('#hue4').onclick = hue4Furniture;
document.querySelector('#hue5').onclick = hue5Furniture;
document.querySelector('#hue6').onclick = hue6Furniture;
document.querySelector('#hue7').onclick = hue7Furniture;
document.querySelector('#hue8').onclick = hue8Furniture;
document.querySelector('#hue9').onclick = hue9Furniture;
document.querySelector('#hue10').onclick = hue10Furniture;
document.querySelector('#hue11').onclick = hue11Furniture;
document.querySelector('#hue12').onclick = hue12Furniture;


    function hue1Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(10deg)'
    }
    function hue2Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(10%) hue-rotate(40deg)'
    }
    function hue3Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(40%) hue-rotate(80deg)'
    }
    function hue4Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(70%) hue-rotate(120deg)'
    }
    function hue5Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(160deg)'
    }
    function hue6Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(200deg)'
    }
    function hue7Furniture(){
        document.querySelector('#furniture').style.filter = 'grayscale(80%) sepia(10%) hue-rotate(240deg)'
    }
    function hue8Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(10%) hue-rotate(265deg)'
    }
    function hue9Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(280deg)'
    }
    function hue10Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(320deg)'
    }
    function hue11Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(50%) hue-rotate(340deg)'
    }
    function hue12Furniture(){
        document.querySelector('#furniture').style.filter = 'sepia(80%) hue-rotate(360deg)'
    }
    


    function updatePaintColor(color) {
      let colorPreview = document.querySelector('#colorInput');
        colorPreview.style.backgroundColor = color;
        changePaint.backgroundColor = color;
        
    }
    function updateCarpetColor(color) {
      let colorPreview = document.querySelector('#colorInput');
        colorPreview.style.backgroundColor = color;
        changeCarpet.backgroundColor = color;
        
    }
    const resetButton = document.getElementById('resetButton');


    resetButton.addEventListener('click', function() {
      location.reload();
    });