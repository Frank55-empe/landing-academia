// Formulário e integração com WhatsApp
document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const telefone = this.telefone.value.trim();
  const msg = document.getElementById('mensagem');
  const link = document.getElementById('whatsappLink');

  if (nome && email && telefone) {
    const texto = `Olá! Me chamo ${nome}, tenho interesse em agendar uma aula gratuita.`;
    const tel = telefone.replace(/\D/g, '');
    link.href = `https://wa.me/55${tel}?text=${encodeURIComponent(texto)}`;
    msg.textContent = '✅ Formulário enviado! Agora clique para falar no WhatsApp.';
    msg.style.color = 'lightgreen';
  } else {
    msg.textContent = '❗ Preencha todos os campos.';
    msg.style.color = 'yellow';
  }
});

// FAQ Accordion
document.querySelectorAll('.question').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
