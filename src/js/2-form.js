const STORAGE_FORM_KEY = 'feedback-form-state';  

// Объект для хранения данных формы  
const formData = { email: '', message: '' };  

// Ссылки на элементы формы  
const refs = {  
  form: document.querySelector('.feedback-form'),  
};  

// === Инициализация формы при загрузке страницы ===  
function initPage() {  
  const savedData = loadFromLS(STORAGE_FORM_KEY);  

  if (savedData) {  
    refs.form.elements.email.value = savedData.email || '';  
    refs.form.elements.message.value = savedData.message || '';  
  }  
}  

initPage(); // Запускаем инициализацию  

// === Обработка ввода данных в форму ===  
refs.form.addEventListener('input', e => {  
  // Получаем значения из полей формы  
  const email = e.currentTarget.elements.email.value.trim();  
  const message = e.currentTarget.elements.message.value.trim();  

  // Обновляем объект formData  
  formData.email = email;  
  formData.message = message;  

  // Сохраняем данные в локальное хранилище  
  saveToLS(STORAGE_FORM_KEY, formData);  
});  

// === Обработка отправки формы ===  
refs.form.addEventListener('submit', e => {  
  e.preventDefault();  

  // Получаем значения из полей формы  
  const email = e.currentTarget.elements.email.value.trim();  
  const message = e.currentTarget.elements.message.value.trim();  

  // Проверяем, заполнены ли все поля  
  if (!email || !message) {  
    alert('Please fill in all fields');  
    return;  
  }  

  // Обновляем объект formData  
  formData.email = email;  
  formData.message = message;  

  // Выводим данные в консоль  
  console.log('Submitted data:', formData);  

  // Очищаем локальное хранилище и сбрасываем форму  
  localStorage.removeItem(STORAGE_FORM_KEY);  
  refs.form.reset();  
});  

// === Функции для работы с локальным хранилищем ===  
function saveToLS(key, value) {  
  localStorage.setItem(key, JSON.stringify(value));  
}  

function loadFromLS(key) {  
  try {  
    return JSON.parse(localStorage.getItem(key)) || null;  
  } catch (error) {  
    console.error('Error parsing data from localStorage:', error);  
    return null;  
  }  
}

//********TODO 1-var********/

// const STORAGE_FORM_KEY = 'feedback-form-state';  

// const form = document.querySelector('.feedback-form');  

// // Инициализация формы при загрузке  
// (function initForm() {  
//   const savedData = loadFromLS(STORAGE_FORM_KEY);  
//   if (savedData) {  
//     form.elements.email.value = savedData.email || '';  
//     form.elements.message.value = savedData.message || '';  
//   }  
// })();  

// // Обработка ввода данных  
// form.addEventListener('input', () => {  
//   const formData = {  
//     email: form.elements.email.value.trim(),  
//     message: form.elements.message.value.trim(),  
//   };  
//   saveToLS(STORAGE_FORM_KEY, formData);  
// });  

// // Обработка отправки формы  
// form.addEventListener('submit', e => {  
//   e.preventDefault();  

//   const email = form.elements.email.value.trim();  
//   const message = form.elements.message.value.trim();  

//   if (!email || !message) {  
//     alert('Fill please all fields');  
//     return;  
//   }  

//   console.log({ email, message });  
//   localStorage.removeItem(STORAGE_FORM_KEY);  
//   form.reset();  
// });  

// // Функции для работы с локальным хранилищем  
// function saveToLS(key, value) {  
//   localStorage.setItem(key, JSON.stringify(value));  
// }  

// function loadFromLS(key) {  
//   try {  
//     return JSON.parse(localStorage.getItem(key)) || null;  
//   } catch {  
//     return null;  
//   }  
// }

//*****TODO 2-var******* */

// const STORAGE_FORM_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');

// // Инициализация формы при загрузке
// (function initForm() {
//   const savedData = loadFromLS(STORAGE_FORM_KEY);
//   if (savedData) {
//     form.elements.email.value = savedData.email || '';
//     form.elements.message.value = savedData.message || '';
//   }
// })();

// // Обработка ввода данных
// form.addEventListener('input', () => {
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());
//   saveToLS(STORAGE_FORM_KEY, data);
// });

// // Обработка отправки формы
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());

//   if (!data.email || !data.message) {
//     alert('Fill please all fields');
//     return;
//   }

//   console.log(data);
//   localStorage.removeItem(STORAGE_FORM_KEY);
//   form.reset();
// });

// // Функции для работы с локальным хранилищем
// function saveToLS(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// function loadFromLS(key) {
//   try {
//     return JSON.parse(localStorage.getItem(key)) || null;
//   } catch {
//     return null;
//   }
// }

//*****TODO 3-var******* */


// const STORAGE_FORM_KEY = 'feedback-form-state';
// const formData = { email: '', message: '' };

// const refs = {
//   form: document.querySelector('.feedback-form'),
// };

// // Когда пользователь вводит данные в форму,
// // мы получаем эти данные и сохраняем в локальное хранилище
// refs.form.addEventListener('input', e => {
//   const email = e.currentTarget.elements.email.value.trim();
//   const message = e.currentTarget.elements.message.value.trim();
//   formData.email = email;
//   formData.message = message;
//   saveToLS(STORAGE_FORM_KEY, formData);
// });

// // Когда страница загружается,
// // мы получаем данные из локального хранилища и
// // заполняем ими форму
// function initPage() {
//   const localData = loadFromLS(STORAGE_FORM_KEY);
//   if (localData) {
//     refs.form.elements.email.value = localData.email || '';
//     refs.form.elements.message.value = localData.message || '';
//   }
// }

// initPage();

// // Когда пользователь отправляет форму,
// // мы получаем данные из формы,
// // сохраняем их в локальное хранилище,
// // выводим сообщение в консоли,
// // очищаем форму
// refs.form.addEventListener('submit', e => {
//   e.preventDefault();


//   const email = e.currentTarget.elements.email.value.trim();
//   const message = e.currentTarget.elements.message.value.trim();

//   if (!formData.email || !formData.message) {
//     alert('Fill please all fields');
//     return;
//   }


//   formData.email = email;
//   formData.message = message;
//   console.log(formData);
//   localStorage.removeItem(STORAGE_FORM_KEY);
//   e.target.reset();
// });

// // Функция для сохранения данных в локальное хранилище
// function saveToLS(key, value) {
//   const jsonData = JSON.stringify(value);
//   localStorage.setItem(key, jsonData);
// }

// // Функция для получения данных из локального хранилища
// function loadFromLS(key) {
//   const body = localStorage.getItem(key);
//   try {
//     const data = JSON.parse(body);
//     return data;
//   } catch {
//     return body;
//   }
// }


