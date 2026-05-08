const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


let formData = {
  email: '',
  message: '',
};

//  Sayfa yenilendiğinde localStorage kontrolü
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Formda her input değiştiğinde çalışacak event listener
form.addEventListener('input', event => {
  // event.target ile hangi input'a yazıldığını alıyoruz
  formData[event.target.name] = event.target.value.trim();
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Form submit işlemi
form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim()
){
    if (email === '' || message === '') {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  // konsola nesne yazdır
  console.log(formData);
    email,
    message,
  });

  // localStorage temizle
  localStorage.removeItem('feedback-form-state');

  // Formu temizle
  form.reset();

  // nesneyi sıfırla
  formData = {
    email: '',
    message: '',
  };
});


  console.log({
    email,
    message,
  });

  
  // Konsola formdaki verileri yazdırıyoruz
  console.log(formData);

  // Formu sıfırlıyoruz
  form.reset();

  // temizleme
  localStorage.removeItem("feedback-form-state");
  form.reset();

  formData = { email: '', message: '' };
});
