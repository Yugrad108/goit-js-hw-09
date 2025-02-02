const STORAGE_FORM_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const refs = {
  form: document.querySelector('.feedback-form'),
};

// Когда пользователь вводит данные в форму, 
// мы получаем эти данные и сохраняем в локальное хранилище
refs.form.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  saveToLS(STORAGE_FORM_KEY, formData);
});

// Когда страница загружается, 
// мы получаем данные из локального хранилища и 
// заполняем ими форму
function initPage() {
  const localData = loadFromLS(STORAGE_FORM_KEY);
  if (localData) {
    refs.form.elements.email.value = localData.email || '';
    refs.form.elements.message.value = localData.message || '';
  }
}

initPage();

// Когда пользователь отправляет форму, 
// мы получаем данные из формы, 
// сохраняем их в локальное хранилище, 
// выводим сообщение в консоли, 
// очищаем форму
refs.form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  console.log(formData);
  localStorage.removeItem(STORAGE_FORM_KEY);
  e.target.reset();
});

// Функция для сохранения данных в локальное хранилище
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

// Функция для получения данных из локального хранилища
function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}


