console.log('🟥 🟦 🟩 🟨');

function redButtonAdd() {
    console.log('You clicked red button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='redButtonDelete(event)' class="block red-fill"></div>`;
  
  }

  function redButtonDelete (event) {
    console.log('delete red!', event.target);
    event.target.remove();
  }

  function blueButtonAdd() {
    console.log('You clicked blue button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='blueButtonDelete(event)' class="block blue-fill"></div>`;
  
  }

  function blueButtonDelete (event) {
    console.log('delete blue!', event.target);
    event.target.remove();
  }

  function greenButtonAdd() {
    console.log('You clicked green button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='greenButtonDelete(event)' class="block green-fill"></div>`;
  
  }

  function greenButtonDelete (event) {
    console.log('delete green!', event.target);
    event.target.remove();
  }
  
  function yellowButtonAdd() {
    console.log('You clicked yellow button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='yellowButtonDelete(event)' class="block yellow-fill"></div>`;
  
  }

  function yellowButtonDelete (event) {
    console.log('delete yellow!', event.target);
    event.target.remove();
  }