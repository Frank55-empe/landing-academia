document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const telefone = this.telefone.value.trim();
  const mensagem = document.getElementById('mensagem');

  if (nome && email && telefone) {
    mensagem.textContent = '✅ Cadastro realizado com sucesso! Em breve entraremos em contato.';
    mensagem.style.color = 'lightgreen';
    this.reset();
  } else {
    mensagem.textContent = '❗ Preencha todos os campos corretamente.';
    mensagem.style.color = 'yellow';
  }
});
