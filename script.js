



var fname=lable("lable","for","firstname","Firstname");
document.body.append(fname);
var br=document.createElement("br");
document.body.append(br);



var input=inputtype("input","type","text","id","fname");
document.body.append(input);
var br3=document.createElement("br");
document.body.append(br3);



var lname=lable("lable","for","lastname","Lastname");
document.body.append(lname);
var br1=document.createElement("br");
document.body.append(br1);
var input1=inputtype1("input","type","text","id","lname");
document.body.append(input1);
var br4=document.createElement("br");
document.body.append(br4);


var email=lable("lable","for","email","Email");
document.body.append(email);
var br2=document.createElement("br");
document.body.append(br2);
var input2=inputtype2("input","type","email","id","email");
document.body.append(input2);
var br5=document.createElement("br");
document.body.append(br5);


var password=lable("lable","for","password","Password");
document.body.append(password);
var br6=document.createElement("br");
document.body.append(br6);
var input3=inputtype3("input","type","password","id","pass");
document.body.append(input3);
var br7=document.createElement("br");
document.body.append(br7);
var br8=document.createElement("br");
document.body.append(br8);

var button=document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("class","btn btn-primary")
button.addEventListener("click",foo);
document.body.append(button);



function lable(elementname,attribute,attrvalue,value){
   var res=document.createElement(elementname);
   res.setAttribute(attribute,attrvalue);
   res.innerHTML=value;
   return res;
}

function inputtype(elementname,attribute,attrvalue,attr1,attr2){

var res1=document.createElement(elementname);
   res1.setAttribute(attribute,attrvalue);
   res1.setAttribute(attr1,attr2);
   return res1;
}
function inputtype1(elementname,attribute,attrvalue,attr1,attr2){

  var res2=document.createElement(elementname);
     res2.setAttribute(attribute,attrvalue);
     res2.setAttribute(attr1,attr2);
     return res2;
  }

  function inputtype2(elementname,attribute,attrvalue,attr1,attr2){

    var res3=document.createElement(elementname);
       res3.setAttribute(attribute,attrvalue);
       res3.setAttribute(attr1,attr2);
       return res3;
    }
    function inputtype3(elementname,attribute,attrvalue,attr1,attr2){

      var res4=document.createElement(elementname);
         res4.setAttribute(attribute,attrvalue);
         res4.setAttribute(attr1,attr2);
         return res4;
      }
      

      function foo(){
        let fn=document.getElementById("fname").value;
        let ln=document.getElementById("lname").value;
        let em=document.getElementById("email").value;
        let ps=document.getElementById("pass").value;
        console.log(fn);
        console.log(ln);
        console.log(em);
        console.log(ps);
      }