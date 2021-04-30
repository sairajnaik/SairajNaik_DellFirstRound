// Coding Exercise 2

// From the above URL,
// Transform the icons ' row into 2 rows and make it occupy only the left half of the page container; 
// Move the "TechDirect"
// and "MyService360"
// boxes to the remaining right half of the container;
// Delete the "Dell EMC Support Technologies"
// section(where those boxes were initially).
// Here is how it should look like after manipulations:
// https: //github.com/tntdevs/interview-survey/blob/master/img/ex-1.jpg



var iconsDiv = document.getElementById('divResourceLinks');
iconsDiv.classList.remove('bg-mist', 'py-10');

var iconColumn = iconsDiv.querySelector('.row').children;
for (let i = 0; i < iconColumn.length; i++) {
    iconColumn[i].className = 'col-sm-6 mb-4';
}

var entrprisePrdtDiv = document.getElementById('divEnterpriseProductLinks');

entrprisePrdtDiv.querySelector('h3').remove();

var entrpriseSections = entrprisePrdtDiv.querySelector('.row').children;
for (let i = 0; i < entrpriseSections.length; i++) {
    entrpriseSections[i].className = 'col-12 mb-4';
}

var newDivElm = document.createElement('div');
newDivElm.className = 'row bg-mist py-10';
newDivElm.id = 'contianerElem';
newDivElm.innerHTML = `<div class='col-md-6'></div><div class='col-md-6'></div>`;

entrprisePrdtDiv.after(newDivElm);
var containerDiv = document.getElementById('contianerElem');
var containerDivColumns = containerDiv.childNodes;
containerDivColumns[0].append(iconsDiv);
containerDivColumns[1].append(entrprisePrdtDiv);