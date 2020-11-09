const user = {
}
var list = [{
    login:"John",
    password:"Will",
    codeWord:"Doe"
},
];

function registration(){
  let log = document.getElementById("logGen").value;
  let fuck = false
  list.forEach((item, i, arr) =>{
        if (item.login === log)
          {alert('try again');
          fuck = true}})
  if (fuck) return     
list.push({
    login: document.getElementById("logGen").value,
    password: document.getElementById("passGen").value,
    codeWord: document.getElementById("codeWordGen").value
});
}
function showUser (){
  return console.log(list)
}

function showForm() {
  document.getElementById('logGeneration').style.visibility = 'visible'
}

function hideForm () {
  document.getElementById(`log`).style.display = 'none';
}

let form = document.forms.user;
//let elem = form.elements.userName;
//user.name = document.getElementsByName('name').value;