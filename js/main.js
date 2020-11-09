const user = {
}
var list = [{
    login:"John",
    password:"Will",
    codeWord:"Doe"
},
];

function registration(){
  let log = document.getElementById("login").value;
  let fuck = false
  list.forEach((item, i, arr) =>{
        if (item.login === log)
          {alert('try again');
          fuck = true}})
  if (fuck) return     
list.push({
    login: document.getElementById("login").value,
    password: document.getElementById("pass").value,
    codeWord: document.getElementById("codeWord").value
});
}
function showUser (){
  return console.log(list)
}


let form = document.forms.user;
//let elem = form.elements.userName;
//user.name = document.getElementsByName('name').value;