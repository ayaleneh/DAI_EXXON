let variableArray=[]
let string_variable=[]
let basic_value;
let see_also=[]
var a, b
$.getJSON("https://raw.githubusercontent.com/ayaleneh/DAI_EXXON/master/main3.json", response => {
  response.data.forEach((val) => {
    let newVar = new Variable(val.name, val.sample_val, val.primary_definition)
    variableArray.push(newVar)
    
    string_variable=JSON.stringify(variableArray)
  
  })
}).then(function(){
  populateDropdown()
})
let text=document.getElementById("myInput")
let b_body=document.getElementById("body")
let button=document.getElementById("submit")
function Variable(name,sample_val,primary_definition){
  this.name=name
  this.sample_val=sample_val
  this.primary_definition=primary_definition
}
function populateDropdown(){
 text.addEventListener('input',function(e){
 let val = this.value;
   console.log(text.value)
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for(let i=0;i<variableArray.length;i++){
      console.log(variableArray[i].name)
     
      if ( variableArray[i].name.toUpperCase().includes(val.toUpperCase())) {
        console.log("val is "+val)
        console.log("the spicial variable is "+variableArray[i].name)
        //see_also.push(variableArray[i])
          
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = variableArray[i].name
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + variableArray[i].name + "'>";
             a.appendChild(b);
             console.log("text value is "+b.innerHTML)
            
             b.addEventListener("click", function(e) {
               text.value=this.getElementsByTagName("input")[0].value;//or this.getElementsByTagName("input")[0].value
               basic_value=text.value
               
                closeAllLists()
                handler()
             });
      }
      
}


});
}
let paragraph11=document.createElement('p')
let paragraph1=document.getElementById('para11')
let paragraph22=document.createElement('p')
let paragraph12=document.getElementById('para12')
let title=document.createElement('h2')
function handler(){
  closeAllLists()
  remove()
  remove1()
  //b_body.appendChild(title)
  title.innerText=basic_value
  paragraph1.appendChild(title)
  paragraph1.appendChild(paragraph11)
  paragraph11.innerText="Definition:"
  paragraph12.appendChild(paragraph22)
  for(let k=0;k<variableArray.length;k++){
    if(variableArray[k].name.toUpperCase()===basic_value.toUpperCase()){
       if(variableArray[k].primary_definition!==""){
      paragraph22.innerText=variableArray[k].primary_definition
       }
       else{
         paragraph22.innerText="no definition available"
       }
    }
  }
  
    


  see_also=[]
for(let i = 0; i < variableArray.length; i++){
  let split_array =basic_value.split('_')
  let main_variable=variableArray[i].name.split('_')
  for(let j=0;j<split_array.length;j++){
  if(main_variable.includes(split_array[j])){
    console.log(variableArray[i].name)
   see_also.push(variableArray[i].name)
  }
  }
}
}

/*
button.addEventListener('submit',function(e){
let title1=document.createElement('h2')
b_body.appendChild(title1)
title1.innerText=basic_value
let paragraph12=document.createElement('p')
b_body.appendChild(paragraph12)
paragraph12.innerText="Definition:"
let paragraph21=document.createElement('p')
b_body.appendChild(paragraph21)
for(let k=0;k<variableArray.length;k++){
  if(variableArray[k].name.toUpperCase()===basic_value.toUpperCase()){
     if(variableArray[k].primary_definition!==""){
    paragraph21.innerText=variableArray[k].primary_definition
     }
     else{
       paragraph21.innerText="no definition available"
     }
  }
}

  


see_also=[]
for(let i = 0; i < variableArray.length; i++){
let split_array =basic_value.split('_')
let main_variable=variableArray[i].name.split('_')
for(let j=0;j<split_array.length;j++){
if(main_variable.includes(split_array[j])){
  console.log(variableArray[i].name)
 see_also.push(variableArray[i].name)
}
}
}
})
*/
function closeAllLists(elmnt) {
  /*close all autocomplete lists in the document,
  except the one passed as an argument:*/
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != text) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
let remove = function(){
  while (paragraph11.hasChildNodes()) {
    paragraph11.removeChild(paragraph11.firstChild)
  }
}
let remove1 = function(){
  while (paragraph22.hasChildNodes()) {
    title.removeChild(title.firstChild)
    paragraph22.removeChild(paragraph22.firstChild)
  }
}