function addNewWEField() {
  // console.log("Adding new fiield")

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weob = document.getElementById("we");
  let weAddButtonob = document.getElementById("weAddButton");

  weob.insertBefore(newNode, weAddButtonob);
}

function addNewAQField() {
  // console.log("Adding new fiield")

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let aqob = document.getElementById("aq");
  let aqAddButtonob = document.getElementById("aqAddButton");

  aqob.insertBefore(newNode, aqAddButtonob);
}

function addNewSKField() {
  // console.log("Adding new fiield")

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let skob = document.getElementById("sk");
  let skAddButtonob = document.getElementById("skAddButton");

  skob.insertBefore(newNode, skAddButtonob);
}
function addNewHBField() {
  // console.log("Adding new fiield")

  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("hbField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");

  let hbob = document.getElementById("hb");
  let hbAddButtonob = document.getElementById("hbAddButton");

  hbob.insertBefore(newNode, hbAddButtonob);
}

// generating CV

function generateCV() {
  let ex = document.getElementById("imgField").value;
  if (ex === "") {
    alert("Please Select Profile Pic");
    document.getElementById("imgField").focus();
  }
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  // direct

  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // bdate
  document.getElementById("bdateT").innerHTML =
    document.getElementById("bdateField").value;

  // gender
  document.getElementById("genderT").innerHTML =
    document.getElementById("genderField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // languages
  var lang = document.getElementsByName("languuage");
  var selectedItems = "";
  for (var i = 0; i < lang.length; i++) {
    if (lang[i].type == "checkbox" && lang[i].checked == true)
      selectedItems += lang[i].value + "\n";
  }
  document.getElementById("langT").innerHTML = selectedItems;

  // Hobbies

  let hbs = document.getElementsByClassName("hbField");

  let str3 = "";

  for (let e of hbs) {
    str3 = str3 + `<li> ${e.value}</li>`;
  }
  document.getElementById("hbT").innerHTML = str3;

  // important links

  let fb = document.getElementById("fbField").value;
  document.getElementById("fbT").setAttribute("href", fb);

  let insta = document.getElementById("instaField").value;
  document.getElementById("instaT").setAttribute("href", insta);

  let linked = document.getElementById("fbField").value;
  document.getElementById("linkedT").setAttribute("href", linked);

  // set Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // work Experiance

  let wes = document.getElementsByClassName("weField");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML = str;

  // Academaic Qualification

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // Academaic Qualification

  let sks = document.getElementsByClassName("skField");

  let str2 = "";

  for (let e of sks) {
    str2 = str2 + `<li> ${e.value}</li>`;
  }

  document.getElementById("skT").innerHTML = str2;

  //  set profile image

  let name = document.getElementById("imgField").value;

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  console.log(name);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  //  set img to template

  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  window.print();
}
