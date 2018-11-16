$.getJSON("https://raw.githubusercontent.com/ayaleneh/DAI_EXXON/master/main3.json", response => {
  response.forEach((val) => {
    let newVar = new Variable(val.name, val.sample_val, val.primary_definition)
    let newVar=new Variable("dfffd",67,"freer")
    console.log(newVar)
    variableArray.push(newVar)
  })
}).then(function(){
  var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].sample_val);
})
