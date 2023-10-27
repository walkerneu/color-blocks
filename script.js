console.log('🟥 🟦 🟩 🟨');

function redButtonAdd() {
    console.log('You clicked red button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='redButtonDelete(event)' class="block red-fill"></div>`;
    
    let redcount = Number(document.getElementById("red-count").textContent)
    redcount ++
    document.getElementById("red-count").textContent = redcount;
  }

  function redButtonDelete (event) {
    console.log('delete red!', event.target);
    event.target.remove();
    let redcount = Number(document.getElementById("red-count").textContent)
    redcount --
    document.getElementById("red-count").textContent = redcount;
  }

  function blueButtonAdd() {
    console.log('You clicked blue button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='blueButtonDelete(event)' class="block blue-fill"></div>`;
  
    let bluecount = Number(document.getElementById("blue-count").textContent)
    bluecount ++
    document.getElementById("blue-count").textContent = bluecount;
  }

  function blueButtonDelete (event) {
    console.log('delete blue!', event.target);
    event.target.remove();
    let bluecount = Number(document.getElementById("blue-count").textContent)
    bluecount --
    document.getElementById("blue-count").textContent = bluecount;
  }

  function greenButtonAdd() {
    console.log('You clicked green button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='greenButtonDelete(event)' class="block green-fill"></div>`;
  
    let greencount = Number(document.getElementById("green-count").textContent)
    greencount ++
    document.getElementById("green-count").textContent = greencount;
  }

  function greenButtonDelete (event) {
    console.log('delete green!', event.target);
    event.target.remove();
    let greencount = Number(document.getElementById("green-count").textContent)
    greencount --
    document.getElementById("green-count").textContent = greencount;
  }
  
  function yellowButtonAdd() {
    console.log('You clicked yellow button!');
    document.getElementById('buttons');
    buttons.innerHTML += `<div onclick='yellowButtonDelete(event)' class="block yellow-fill"></div>`;
  
    let yellowcount = Number(document.getElementById("yellow-count").textContent)
    yellowcount ++
    document.getElementById("yellow-count").textContent = yellowcount;
  }

  function yellowButtonDelete (event) {
    console.log('delete yellow!', event.target);
    event.target.remove();
    let yellowcount = Number(document.getElementById("yellow-count").textContent)
    yellowcount --
    document.getElementById("yellow-count").textContent = yellowcount;
  }