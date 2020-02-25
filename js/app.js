'use strict'


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

function randNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

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

};


var container = document.getElementById('container');
console.log(container);

var mainEl = document.createElement('main');
container.appendChild(mainEl);

var headerEl = document.createElement('header');
container.appendChild(headerEl);

var footerEl = document.createElement('footer');
container.appendChild(footerEl);

var tableEl = document.createElement('table');
mainEl.appendChild(tableEl);

var theaderEl = document.createElement('thead');
tableEl.appendChild(theaderEl);

var tfooterEl = document.createElement('tfoot');
tableEl.appendChild(tfooterEl);





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

var totalCookiesSoldEachHour = 0;
var locations = [seattle, tokyo, dubai, paris, lima];
var totalCol = [];
var thEl = document.createElement('th');
theaderEl.appendChild(thEl);
thEl.textContent = '';
var thEl = document.createElement('th');
tfooterEl.appendChild(thEl);
thEl.textContent = 'Total';

for (var i = 0; i <= 13; i++) {
    var sumCol = seattle.cookiesPerHourSold[i] + tokyo.cookiesPerHourSold[i] + dubai.cookiesPerHourSold[i] + paris.cookiesPerHourSold[i] + lima.cookiesPerHourSold[i];
    totalCol.push(sumCol);
    totalCookiesSoldEachHour = totalCookiesSoldEachHour + sumCol;

    if (i === 13) {
        totalCol.push()
    }
    var thEl = document.createElement('th');
    theaderEl.appendChild(thEl);
    thEl.textContent = seattle.time[i];
    var thEl = document.createElement('th');
    tfooterEl.appendChild(thEl);
    thEl.textContent = totalCol[i];
}
var thEl = document.createElement('th');
theaderEl.appendChild(thEl);
thEl.textContent = 'Daily Location Total';
var thEl = document.createElement('th');
tfooterEl.appendChild(thEl);
thEl.textContent = totalCookiesSoldEachHour;




