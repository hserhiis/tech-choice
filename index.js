// Инициализация EmailJS
emailjs.init('F4N43Xb8855CK_rvE'); // замени на свой публичный ключ EmailJS

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  submitBtn.disabled = true; // отключаем кнопку, чтобы не спамили
  submitBtn.textContent = 'Enviando...';

  emailjs.sendForm('service_hk8q1t6', 'template_ad09ljt', this)
    .then(() => {
      submitBtn.classList.add('sent');
      formMessage.textContent = 'Mensagem enviada com sucesso!';
      form.reset();

      setTimeout(() => {
        submitBtn.classList.remove('sent');
        formMessage.textContent = '';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
      }, 3000);

    }, (error) => {
      formMessage.textContent = 'Erro ao enviar. Tente novamente.';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar';
      console.error('FAILED...', error);
    });
});
