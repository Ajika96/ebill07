Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}

function getSlab(sDate,eDate) {
  var slab = 0;
  if(sDate.getMonth() === eDate.getMonth()) {
    slab += (eDate.getDate()+1 - sDate.getDate())/sDate.monthDays();
  }
  else {
    slab += (sDate.monthDays()+1-sDate.getDate())/sDate.monthDays();
    slab += eDate.getDate()/eDate.monthDays();
   
  }
  console.log(slab);
  return slab;
}

function calcBill() {
    var curr = document.getElementById("curr").value;
    var prev = document.getElementById("prev").value;

    var units = parseFloat(curr) - parseFloat(prev);
    units = parseInt(units);
    var pay = 0;

    if(units === 0) {
      return pay;
    }
    if(units > 180) {
      pay = (units-180)*45 + 540 + 2,563.5;
    }
    else if(units > 120) {
      pay = (units - 120)*32 + 480 + 1603.5;
    }
    else if(units > 90) {
      pay = (units-90)*27.75 + 480 + 771;
    }
    else if(units > 60) {
      pay = (units-60)*10 + 90 + 471;
    }
    else if(units > 30) {
      pay = (units-30)*4.85 + 60 + 75;
    }
    else {
      pay = units*2.5 + 30;
    }

    pay = (pay).toFixed(2);
    if(!units) {
      document.getElementById("change").innerHTML = "Wrong Input";
    }
    document.getElementById("change").innerHTML = "LKR "+pay;
  }

