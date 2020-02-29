'use strict'

var theaderEl;
var tfooterEl;
var tableEl;
var locations = [];
var sumCol = 0;
var totalOfColumnsRow = [];
var totalOfTotal = 0;

function Location(name, lowestValue, highestValue, meanValue) {
    this.name = name;
    this.lowestValue = lowestValue;
    this.highestValue = highestValue;
    this.meanValue = meanValue;
    this.custNumberPerHour = 0;
}

Location.prototype.custPerHour = function () {
    this.custNumberPerHour = randNumb(this.lowestValue, this.highestValue);
};



Location.prototype.render = function () {


    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    tdEl.setAttribute('class', 'name');



    var totalCookiesPerLocation = 0;
    var hour = 6;
    this.time = [];
    this.cookiesPerHourSold = [];
    this.totalCookiesSold = [];

    this.custPerHour(this.lowestValue, this.highestValue);
    for (hour = 6; hour <= 19; hour++) {

        var cookiesPerHourSold = (randNumb(this.lowestValue, this.highestValue) * this.meanValue);
        this.cookiesPerHourSold.push(parseInt(cookiesPerHourSold));

        if (hour <= 11) {
            this.time.push(`${hour}am`);
            totalCookiesPerLocation = parseInt(totalCookiesPerLocation + cookiesPerHourSold);

        }

        else if (hour === 12) {
            this.time.push(`${hour}pm`);
            totalCookiesPerLocation = parseInt(totalCookiesPerLocation + cookiesPerHourSold);
        }

        else {
            var hourPm = hour - 12;
            this.time.push(`${hourPm}pm`);
            totalCookiesPerLocation = parseInt(totalCookiesPerLocation + cookiesPerHourSold);
        }

        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = parseInt(cookiesPerHourSold);
    }

    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = parseInt(cookiesPerHourSold);

    trEl.appendChild(tdEl);
    tdEl.textContent = totalCookiesPerLocation;
    tdEl.setAttribute('class', 'name');
    this.totalCookiesSold.push(totalCookiesPerLocation);
    locations.push(this);

};



createHtmlStructure();

createTableHeader();

createTableFooter();

var seattle = new Location('Seattle', 23, 64, 6.3);
seattle.render();

var tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.render();

var dubai = new Location('Dubai', 11, 38, 3.7);
dubai.render();

var paris = new Location('Paris', 20, 38, 2.3);
paris.render();

var lima = new Location('Lima', 2, 16, 4.6);
lima.render();


var locationForm = document.getElementById('locationID');
locationForm.addEventListener('submit', function (event) {

    event.preventDefault();
    console.log(event.target.lowestValue.value);

    var name = event.target.name.value;
    var lowestValue = event.target.lowestValue.value;
    var highestValue = event.target.highestValue.value;
    var meanValue = event.target.meanValue.value;
    var newLocation = new Location(name, lowestValue, highestValue, meanValue);
    // console.log(london);

    if ( validate() === false){

        alert('Please enter correct values');
    }

    else{

    newLocation.render();

    tableEl.removeChild(tfooterEl);

    createTableFooter();

    var thEl = document.createElement('th');
    tfooterEl.appendChild(thEl);
    thEl.textContent = 'Total';

    var sumCol = 0;
    var totalOfTotal = 0;
    var totalOfColumnsRow = [];

    for (var i = 0; i <= 13; i++) {
        for (var j = 0; j < locations.length; j++) {
            sumCol = sumCol + locations[j].cookiesPerHourSold[i];
            if (i === 0) {
                totalOfTotal = totalOfTotal + locations[j].totalCookiesSold[0];
            }
        }

        totalOfColumnsRow.push(sumCol);
        sumCol = 0;

        var thEl = document.createElement('th');
        tfooterEl.appendChild(thEl);
        thEl.textContent = totalOfColumnsRow[i];
    }
    var thEl = document.createElement('th');
    tfooterEl.appendChild(thEl);
    thEl.textContent = totalOfTotal;
}
   
});

renderTotalHour();































//Functions Appendix//

function randNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function createHtmlStructure() {
    var container = document.getElementById('container');

    var mainEl = document.createElement('main');
    container.appendChild(mainEl);

    var headerEl = document.createElement('header');
    container.appendChild(headerEl);

    var footerEl = document.createElement('footer');
    container.appendChild(footerEl);

    tableEl = document.createElement('table');
    mainEl.appendChild(tableEl);
}


function createTableHeader() {
    theaderEl = document.createElement('thead');
    tableEl.appendChild(theaderEl);
}


function createTableFooter() {
    tfooterEl = document.createElement('tfoot');
    tableEl.appendChild(tfooterEl);
}


function renderTotalHour() {
    var thEl = document.createElement('th');
    theaderEl.appendChild(thEl);
    thEl.textContent = '';
    var thEl = document.createElement('th');
    tfooterEl.appendChild(thEl);
    thEl.textContent = 'Total';

    for (var i = 0; i <= 13; i++) {
        for (var j = 0; j < locations.length; j++) {
            sumCol = sumCol + locations[j].cookiesPerHourSold[i];
            if (i === 0) {
                totalOfTotal = totalOfTotal + locations[j].totalCookiesSold[0];
            }
        }

        totalOfColumnsRow.push(sumCol);
        sumCol = 0;

        var thEl = document.createElement('th');
        theaderEl.appendChild(thEl);
        thEl.textContent = seattle.time[i];

        var thEl = document.createElement('th');
        tfooterEl.appendChild(thEl);
        thEl.textContent = totalOfColumnsRow[i];
    }


    var thEl = document.createElement('th');
    theaderEl.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';

    var thEl = document.createElement('th');
    tfooterEl.appendChild(thEl);
    thEl.textContent = totalOfTotal;
}


function validate(){
    var max = parseInt(document.getElementById('highestValue').value);
    var min = parseInt(document.getElementById('lowestValue').value);
    if(min > max){
        alert('Minvalue is greter than Maxvalue');
         return false;
    }

}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }