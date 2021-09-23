//create input element (date)
//create a div element
var pdiv = document.createElement('div');
pdiv.setAttribute('style', 'padding-top:20px');

//create a date input field
var dateele = document.createElement('input');
dateele.setAttribute('type', 'date');
dateele.setAttribute('id', 'dob');
dateele.setAttribute('name', 'dob');

pdiv.appendChild(dateele);

//create a button ele
var btn = document.createElement('button');
btn.setAttribute('class', 'btn btn-primary');
btn.innerHTML = 'display data';
btn.addEventListener('click', agecal);

pdiv.appendChild(btn);

//to display all the data like day hours sec etc, we create one div
var dd = document.createElement('div');
dd.setAttribute('id', 'display');

function agecal() {
  //to get the date (my bday) given in date field
  var storeinput = document.getElementById('dob').value;
  console.log(storeinput);
  //check whether input date is valid date or not
  if (Date.parse(storeinput)) {
    //standard represtation
    var inputdate = new Date(storeinput);
    console.log(inputdate);

    //todays date
    var currentdate = new Date();
    console.log(currentdate);

    //var millisecondsdiff = parseInt(currentdate.getMilliseconds())-parseInt(inputdate.getMilliseconds());//wrong step should use getTime
    var millisecondsdiff =
      parseInt(currentdate.getTime()) - parseInt(inputdate.getTime()); //wrong step should use getTime
    console.log(millisecondsdiff);

    // var secondsdiff = millisecondsdiff/1000;
    var secondsdiff = mathfloor(millisecondsdiff, 1000);
    console.log(secondsdiff);

    var minutesdiff = mathfloor(secondsdiff, 60);
    console.log(minutesdiff);

    var hoursdiff = mathfloor(minutesdiff, 60);
    console.log(hoursdiff);

    var daydiff = mathfloor(hoursdiff, 24);
    console.log(daydiff);

    var yeardiff = getYear(inputdate, currentdate);
    console.log(yeardiff);

    var monthdiff = getMonth(inputdate, currentdate);
    console.log(monthdiff);

    dd.innerHTML = `given input date is:${inputdate}<br>
year : ${yeardiff}<br>
month : ${monthdiff}<br>
day : ${daydiff}<br>
hours : ${hoursdiff}<br>
minutes : ${minutesdiff}<br>
seconds : ${secondsdiff}<br>
milliseconds : ${millisecondsdiff}`;
  } 
  
  else
  {
    dd.innerHTML = 'invalid date';
  }

  document.body.appendChild(dd);
}

function mathfloor(value1, value2) {
  return Math.floor(value1 / value2);
}

function getYear(value1, value2) {
  var date1 = new Date(value1);
  var date2 = new Date(value2);
  return date2.getFullYear() - date1.getFullYear;
}

function getMonth(value1, value2) {
  var year = getYear(value1, value2);
  var month = year * 12 + (value2.getMonth() - value1.getMonth());
  return month;
}
// document.body.append(pdiv);
document.body.append(pdiv);
