const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Sayfa yenilendiğinde localStorage kontrolü
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// Input event
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Submit event
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Boş alan kontrolü
  if (email === '' || message === '') {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  // Konsola yazdır
  console.log({
    email,
    message,
  });

  // localStorage temizle
  localStorage.removeItem(STORAGE_KEY);

  // Formu temizle
  form.reset();

  // Nesneyi sıfırla
  formData = {
    email: '',
    message: '',
  };
});