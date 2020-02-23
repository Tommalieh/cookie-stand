'use strict'

var seattle = {
    
    name : 'Seattle',
    lowestValue : 23,
    highestValue : 65,
    meanValue : 6.3,
    custPerHour : function (min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
          
    }

};
console.log(seattle.custPerHour(seattle.lowestValue, seattle.highestValue));



var tokyo = {
    
    name : 'Tokyo',
    lowestValue : 3,
    highestValue : 24,
    meanValue : 1.2,
    custPerHour : function (min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
          
    }

};
console.log(tokyo.custPerHour(tokyo.lowestValue, tokyo.highestValue));



var dubai = {
    
    name : 'Dubai',
    lowestValue : 11,
    highestValue : 38,
    meanValue : 3.7,
    custPerHour : function (min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
          
    }

};
console.log(dubai.custPerHour(dubai.lowestValue, dubai.highestValue));



var paris = {
    
    name : 'Paris',
    lowestValue : 20,
    highestValue : 38,
    meanValue : 2.3,
    custPerHour : function (min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
          
    }

};
console.log(paris.custPerHour(paris.lowestValue, paris.highestValue));



var lima = {
    
    name : 'lima',
    lowestValue : 2,
    highestValue : 16,
    meanValue : 4.6,
    custPerHour : function (min, max) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
          
    }

};
console.log(lima.custPerHour(lima.lowestValue, lima.highestValue));

var locations = [seattle,tokyo,dubai,paris,lima];



var container = document.getElementById('container');
console.log(container);

var headerEl = document.createElement('header');
container.appendChild(headerEl);

var mainEl = document.createElement('main');
container.appendChild(mainEl);

var ulEl = document.createElement('ul');
mainEl.appendChild(ulEl);

var h3El = document.createElement('h3');
mainEl.appendChild(h3El);

var footerEl = document.createElement('footer');
container.appendChild(footerEl);


var cookiesPurchased = [];
var hour = 6;
var total = 0;


for (var i = 0; i < locations.length; i++){
total = 0;
var h3El = document.createElement('h3');
ulEl.appendChild(h3El);
h3El.textContent = locations[i].name;
for (hour = 6; hour <= 19; hour++){
    var cookiesPerHour = (locations[i].custPerHour(locations[i].lowestValue, locations[i].highestValue) * locations[i].meanValue);
    if (hour <= 11){
        cookiesPurchased.push(`${hour}am: ${parseInt(cookiesPerHour)} cookies`);
        total = parseInt(total + cookiesPerHour);
    }

    else if(hour === 12) {
        cookiesPurchased.push(`${hour}pm: ${parseInt(cookiesPerHour)} cookies`);
        total = parseInt(total + cookiesPerHour);
    }

    else {
        var hourPm = hour - 12;
        cookiesPurchased.push(`${hourPm}pm: ${parseInt(cookiesPerHour)} cookies`);
        total = parseInt(total + cookiesPerHour);
    }
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    var j = hour - 6;
    liEl.textContent = cookiesPurchased[j];
}
cookiesPurchased = [];
ulEl.appendChild(liEl);
liEl.textContent = `Total sold cookies for today: ${total} cookies`;
}
