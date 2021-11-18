const button = document.querySelector('button');
const msgAdd = document.querySelector('.messages');
const input = document.getElementById('message')
button.addEventListener('click',add);

function add(){
  const div = document.createElement('div');
  div.classList.add('msg');
  div.innerHTML = input.value
  // document.querySelector('.messages')
  msgAdd.appendChild(div)
  input.focus();
  input.value = '';
  console.log('clicked')
  msgAdd.scrollTop = msgAdd.scrollHeight;
  
}
