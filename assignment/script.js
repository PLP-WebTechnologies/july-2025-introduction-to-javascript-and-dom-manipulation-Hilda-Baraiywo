// PART 1: JAVASCRIPT BASICS

let userData = { name: '', age: 0, favoriteColor: '', isAdult: false };

function processUserInfo() {
  const nameInput = document.getElementById('userName').value.trim();
  const ageInput = parseInt(document.getElementById('userAge').value);
  const colorInput = document.getElementById('favoriteColor').value;
  const outputDiv = document.getElementById('userOutput');

  if (!nameInput) {
    outputDiv.innerHTML = 'Please enter your name!';
    outputDiv.className = 'output error';
    return;
  }
  if (isNaN(ageInput) || ageInput < 1 || ageInput > 120) {
    outputDiv.innerHTML = 'Please enter a valid age!';
    outputDiv.className = 'output error';
    return;
  }
  if (!colorInput) {
    outputDiv.innerHTML = 'Please select a favorite color!';
    outputDiv.className = 'output error';
    return;
  }

  userData = { name: nameInput, age: ageInput, favoriteColor: colorInput, isAdult: ageInput >= 18 };

  let message = `<strong>Hello, ${userData.name}!</strong><br>`;
  if (userData.age < 13) message += `You're ${userData.age} - kid 🧒`;
  else if (userData.age < 18) message += `You're ${userData.age} - teenager 🧑‍🎓`;
  else if (userData.age < 65) message += `You're ${userData.age} - adult 👨‍💼`;
  else message += `You're ${userData.age} - elder 👴`;

  message += `<br>Your favorite color is ${userData.favoriteColor}!`;
  outputDiv.innerHTML = message;
  outputDiv.className = 'output success';
  console.log('User data processed:', userData);
}

// PART 2: FUNCTIONS

function performCalculation(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const output = document.getElementById('calculatorOutput');
  if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML = 'Please enter valid numbers!';
    output.className = 'output error';
    return;
  }
  let result;
  if (operation === 'add') result = addNumbers(num1, num2);
  if (operation === 'multiply') result = multiplyNumbers(num1, num2);
  if (operation === 'power') result = powerCalculation(num1, num2);
  output.innerHTML = `Result = <strong>${result}</strong>`;
  output.className = 'output success';
}

function addNumbers(a,b){ return a+b; }
function multiplyNumbers(a,b){ return a*b; }
function powerCalculation(a,b){ return Math.pow(a,b); }

function formatText(format) {
  const textInput = document.getElementById('textInput').value;
  const output = document.getElementById('textOutput');
  if (!textInput.trim()) {
    output.innerHTML = 'Please enter text!';
    output.className = 'output error';
    return;
  }
  let formattedText = textInput;
  if (format==='upper') formattedText = textInput.toUpperCase();
  if (format==='lower') formattedText = textInput.toLowerCase();
  if (format==='title') formattedText = toTitleCase(textInput);
  output.innerHTML = formattedText;
  output.className = 'output success';
}
function toTitleCase(str){ return str.replace(/\w\S*/g, t => t[0].toUpperCase()+t.substr(1).toLowerCase()); }

// PART 3: LOOPS

function generateDynamicList() {
  const listSize = parseInt(document.getElementById('listSize').value);
  const output = document.getElementById('dynamicList');
  if (isNaN(listSize) || listSize < 1 || listSize > 20) {
    output.innerHTML = 'Enter between 1-20!';
    output.className = 'output error';
    return;
  }
  let listHTML = '<ul>';
  for (let i=0;i<listSize;i++) listHTML += `<li>Item ${i+1}</li>`;
  listHTML += '</ul>';
  output.innerHTML = listHTML;
  output.className = 'output success';
}

let countdownInterval;
function startCountdown() {
  let current = parseInt(document.getElementById('countdownStart').value);
  const display = document.getElementById('countdownDisplay');
  if (isNaN(current) || current<1) return;
  stopCountdown();
  display.innerHTML = current;
  countdownInterval = setInterval(()=>{
    current--;
    if(current>0) display.innerHTML=current;
    else { display.innerHTML='🎉 Done!'; clearInterval(countdownInterval);}
  },1000);
}
function stopCountdown(){ if(countdownInterval) clearInterval(countdownInterval); }

//Part 4: DOM Manipulation

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();
  const todoList = document.getElementById("todoList");

  if (todoText !== "") {
    const newTask = document.createElement("p");
    newTask.textContent = todoText;
    newTask.className = "todo-item";

    newTask.addEventListener("click", function () {
      newTask.classList.toggle("done");
    });

    todoList.appendChild(newTask);
    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Clear all tasks
function clearAllTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // removes all child elements
}

// Toggle visibility of a box
function toggleVisibility() {
  const box = document.getElementById("toggleBox");
  box.style.display = (box.style.display === "none" || box.style.display === "") 
    ? "block" 
    : "none";

  document.getElementById("statusMessage").textContent =
    box.style.display === "block" ? "Box is visible!" : "Box is hidden!";
}

// Change theme colors
function changeTheme() {
  document.body.classList.toggle("dark-theme");
  document.getElementById("statusMessage").textContent = "Theme changed!";
}

// Animate the box
function animateElement() {
  const box = document.getElementById("toggleBox");
  box.classList.add("animate");

  // Remove animation after it finishes so it can replay next time
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);

  document.getElementById("statusMessage").textContent = "Box animated!";
}
