'use strict';
let bmw = [
{type: "Bmw 1",year: 2004},
{type: "Bmw 2",year: 2010},
{type: "Bmw 3",year: 2005},
{type: "Bmw 4",year: 2011},
{type: "Bmw 5",year: 2008},
{type: "Bmw 6",year: 2015},
{type: "Bmw 7",year: 1999},
{type: "Bmw 8",year: 2000},
{type: "Bmw X1",year: 2003},
{type: "Bmw X2",year: 2018},
{type: "Bmw X3",year: 2020},
{type: "Bmw X4",year: 2019},
{type: "Bmw X5",year: 2009},
{type: "Bmw X6",year: 2019}
];
function sortiranjeModela(){
  bmw.sort(function(a,b){return a.year - b.year});
  PrikazModela();
}
function PrikazModela()
{
   document.getElementById("model").innerHTML =
  bmw[0].type + " " + bmw[0].year + "<br>" +
  bmw[1].type + " " + bmw[1].year + "<br>" +
  bmw[2].type + " " + bmw[2].year + "<br>" +
  bmw[3].type + " " + bmw[3].year + "<br>" + 
  bmw[4].type + " " + bmw[4].year + "<br>" + 
  bmw[5].type + " " + bmw[5].year + "<br>" + 
  bmw[6].type + " " + bmw[6].year + "<br>" +
  bmw[7].type + " " + bmw[7].year + "<br>" +
  bmw[8].type + " " + bmw[8].year + "<br>" +
  bmw[9].type + " " + bmw[9].year + "<br>" +
  bmw[10].type + " " + bmw[10].year + "<br>" + 
  bmw[11].type + " " + bmw[11].year + "<br>" +
  bmw[12].type + " " + bmw[12].year + "<br>" +
  bmw[13].type + " " + bmw[13].year + "<br>";
}

function validateForm() {
  let ime = document.forms["porucivanjeVozila"]["Ime"].value;
  let prezime = document.forms["porucivanjeVozila"]["Prezime"].value;
  let email = document.forms["porucivanjeVozila"]["E-mail"].value;
  if (ime == "") {
    alert("Polje za ime je prazno!");
    return false;
  }
  else if(prezime == "")
  {
  	alert("Polje za prezime je prazno!");
  	return false;
  }
  else if(email == "")
  {
  	alert("Polje za e-mail je prazno!");
  	return false;
  }
  else
  {
  	alert("Cestitamo! Uspesno ste narucili vozilo!\nVasi podaci su:\nIme:");
  	return true;
  }
}

velikiOdeljak.onclick = function(event)
{
  if(event.target.className != 'iks') return;

  let maliOdeljak = event.target.closest('.maliOdeljak');
  maliOdeljak.remove();
};

function mOverInsta(obj){
  obj.innerHTML = "<h3>@mildzi_99</h3>";
}
function mOutInsta(obj){
  obj.innerHTML = "Instagram nalog";
}

function mOverMail(obj){
  obj.innerHTML = "<h2>milovan.99.bp@gmail.com</h2>";
}
function mOutMail(obj){
  obj.innerHTML = "Mail nalog";
}

function changeColorOver(obj){
  obj.style.color = "red";
}
function changeColorOut(obj){
  obj.style.color = "green";
}

function pomeranjeNaDole() {
  let elem = document.getElementById("animate");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 650) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.bottom = pos + "px"; 
    }
  }
}
function pomeranjeNaDesno(){
  let elem = document.getElementById("slika");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 960) {
      clearInterval(id);
    } else {
      pos++; 
     
      elem.style.left = pos + "px"; 
    }
  }
}
function pomeranjeNaSredinu(){
  let elem = document.getElementById("slika1");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 960) {
      clearInterval(id);
    } else {
      pos++; 
     
      elem.style.left = pos + "px"; 
    }
  }
}
function pomeranjeUgao(){
  let elem = document.getElementById("slika2");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 960) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px";
      elem.style.left = pos + "px"; 
    }
  }
}
function pomeranjeUgaoLevi(){
  let elem = document.getElementById("slika3");   
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 960) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px";
      elem.style.right = pos + "px"; 
    }
  }
}
function kreiranjePrikaz(){
  let admin = {
    firstName: "Milovan",
    lastName: "Grbic",
    age: 21
  };
  alert("Ime: " + admin.firstName + "\n" + "Prezime: " + admin.lastName + "\n" + "Godine: " + admin.age + "\n");
}
