// дата начала обучения
const startDate = new Date("2025-01-01");
const today = new Date();

const diffTime = today - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").textContent = days;

// фразы дня
const quotes = [
  "Сегодня ты станешь лучше, чем вчера 💪",
  "Маленький шаг — большой прогресс 🚀",
  "Ошибки — часть пути 🧠",
  "Код пишется, баги уходят 😄",
  "Сегодня день победы над JS ⚡"
];

// кнопка смены настроения
const btn = document.getElementById("moodBtn");
const quoteEl = document.getElementById("quote");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = "💬 " + quotes[randomIndex];
});


const skillBars = document.querySelectorAll(".skill__progress");

function animateSkills() {
  skillBars.forEach(bar => {
    const value = bar.dataset.progress;
    bar.style.width = value + "%";
  });
}

// запускаем при загрузке страницы
window.addEventListener("load", animateSkills);

const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");

// Загружаем задачи из LocalStorage или создаём базовые
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  "Flexbox",
  "Grid",
  "DOM",
  "LocalStorage"
];

// Функция отображения задач
function renderTasks() {
  todoList.innerHTML = ""; // очищаем список
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Клик по задаче — отметка как выполнена
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Кнопка удаления
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // чтобы не срабатывала отметка
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(removeBtn);
    todoList.appendChild(li);
  });
}

// Сохраняем задачи в LocalStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Добавление новой задачи
addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    newTaskInput.value = "";
    saveTasks();
    renderTasks();
  }
});

// Enter тоже добавляет задачу
newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});

// Инициализация
renderTasks();

const generateBtn = document.getElementById("generate-btn");
const projectIdeaEl = document.getElementById("project-idea");
const challengeEl = document.getElementById("challenge");
const jsTaskEl = document.getElementById("js-task");

// Массивы идей
const projects = [
  "Создай калькулятор на JS",
  "Разработай игру 'Крестики-нолики'",
  "Сделай личный сайт-портфолио",
  "Создай интерактивный таймер",
  "Разработай To-Do приложение"
];

const challenges = [
  "Напиши код без использования циклов",
  "Сделай дизайн только с Flexbox",
  "Используй только ES6 синтаксис",
  "Сделай анимацию без CSS библиотеки",
  "Реализуй таймер с обратным отсчётом"
];

const jsTasks = [
  "Добавь drag & drop для элементов",
  "Создай случайный генератор цвета",
  "Реализуй поиск по массиву объектов",
  "Создай фильтр задач по категории",
  "Напиши функцию сортировки массива"
];

// Функция случайного выбора из массива
function getRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Генерация идей
generateBtn.addEventListener("click", () => {
  projectIdeaEl.textContent = "💡 Проект: " + getRandom(projects);
  challengeEl.textContent = "🔥 Челлендж дня: " + getRandom(challenges);
  jsTaskEl.textContent = "💻 Задание по JS: " + getRandom(jsTasks);

  // небольшой эффект обновления
  [projectIdeaEl, challengeEl, jsTaskEl].forEach(el => {
    el.style.transform = "scale(1.05)";
    el.style.opacity = "0.7";
    setTimeout(() => {
      el.style.transform = "scale(1)";
      el.style.opacity = "1";
    }, 200);
  });
});

const funBtn = document.getElementById("fun-btn");
const funResult = document.getElementById("fun-result");

// Массив возможных результатов
const results = [
  "CSS-маг 🧙‍♂️",
  "JS-самурай ⚔️",
  "HTML-монах 🧘‍♂️"
];

funBtn.addEventListener("click", () => {
  // Случайный выбор результата
  const index = Math.floor(Math.random() * results.length);
  const result = results[index];

  // Вывод и анимация
  funResult.textContent = result;
  funResult.style.opacity = 0;
  funResult.style.transform = "scale(0.8)";

  // Лёгкая задержка для плавного эффекта
  setTimeout(() => {
    funResult.style.opacity = 1;
    funResult.style.transform = "scale(1)";
  }, 50);
});
