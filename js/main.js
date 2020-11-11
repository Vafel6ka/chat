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
  let _switch = false
  list.forEach((item, i, arr) =>{
        if (item.login === log)
          {alert('try again');
          _switch = true}})
  if (_switch) return     
list.push({
    login: document.getElementById("logGen").value,
    password: document.getElementById("passGen").value,
    codeWord: document.getElementById("codeWordGen").value
});
}
function showUser (){
  return console.log(list)
}


let form = document.forms.user;
//let elem = form.elements.userName;
//user.name = document.getElementsByName('name').value;

function logInn(){
  let _switch = false;
  const log = document.getElementById("logIn").value;
  const pass = document.getElementById("passIn").value;
  list.forEach((item, i, arr) =>{
        if ((item.login === log) && (item.password === pass)) {
            _switch = true;
          alert(i)
        }});
        if (_switch)
        {alert('Go in!');
        mainField();
        }
         else {
            alert('you are not registrated!')
            return}
}
function mainField (){
  logGeneration.style.display = 'none'; 
  logForm.style.display = 'none';
  
  let chatBox = document.createElement('div');
  chatBox.className = "chatBox";
  chatBox.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
  let msgBtn = document.createElement('div')
  msgBtn.className = "msgBtn";
  msgBtn.innerHTML = "<strong>Enter msg</strong>"
  document.body.append(chatBox);
  document.body.append(msgBtn);
}
function logInField (){
  logForm.style.display = 'block'; 
  logGeneration.style.display = 'none';
}

function regField() {
  logGeneration.style.display = 'block'; 
  logForm.style.display = 'none';
}

