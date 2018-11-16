var value_basic=[]
var names = ["eyasu","solomon","ayale","ayele","selam","mahlet","eyerus","adaneche","abebu"];
var namess_d = {
eyasu : "eyasuu",
solomon:"solomonn",
ayale:"ayalle",
ayele:"ayelle",
selam:"selamme",
mahlet:"mahlett",
eyerus:"eyeruss",
adaneche:"adanchee",
abebu:"abebuu"
};
var namess_a = {
  eyasu : "detail_defination_eyasu",
  solomon:"detail_defination_solomon",
  ayale:"detail_defination_ayale",
  ayele:"detail_defination_ayele",
  selam:"detail_defination_selam",
  mahlet:"detail_defination_mahlet",
  eyerus:"detail_defination_eyerus",
  adaneche:"detail_defination_adanche",
  abebu:"detail_defination_abebu"
  };
let text=document.getElementById("myInput")
autocomplete(text, names);
let get1=document.getElementById("u_list")
let get2=document.getElementById("u_list2")
let get3=document.getElementById("u_list3")
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      
      for (i = 0; i < arr.length; i++) {
        
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length,arr.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              value_basic=arr[i]
               console.log("the first one:"+arr[i])
               console.log("value basic is "+value_basic)
              
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;           
                let para=document.createElement('li')
                let para2=document.createElement('li')
                
                get1.appendChild(para)
                get2.appendChild(para2)
                para.innerText=namess_d[(inp.value)]
                get1.removeChild(get1.childNodes[0]);
                para2.innerText=namess_a[(inp.value)]
                get2.removeChild(get2.childNodes[0]);
                
                for(let j=0;j<value_basic.length;j++){
                  let para3=document.createElement('li')
                  let link1=document.createElement('a')
                  get3.appendChild(para3)
                  para3.appendChild(link1)
                  link1.setAttribute("href","#")
                  link1.setAttribute("id","link_id")
                  document.getElementById("link_id").onclick=function(){
                    alert("message"+link1.innerText)
                    inp=link1.innerText
                    myInput.value=link1.innerText
                   autocomplete(myInput.value,names)
                  }
                  link1.innerText=value_basic
                }
                get3.removeChild(get3.childNodes[0]);
                value_basic.length=0
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        console.log(currentFocus)
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}




