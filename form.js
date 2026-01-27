document.getElementById('chaveAcesso').addEventListener('input', function () {
  const chaveAcesso = this.value;
  const numeroNotaFiscalInput = document.getElementById('numeroNotaFiscal');
  if (chaveAcesso.length >= 35) {
    const numeroNotaFiscal = chaveAcesso.substring(28, 34).replace(/^0+/, '');
    numeroNotaFiscalInput.value = numeroNotaFiscal;
  } else {
    numeroNotaFiscalInput.value = '';
  }
});

document.getElementById('etiquetaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const enderecoSelecionado = document.getElementById('endereco').value;
  const chaveAcesso = document.getElementById('chaveAcesso').value;
  const numeroNotaFiscal = document.getElementById('numeroNotaFiscal').value;
  const pedidoVenda = document.getElementById('pedidoVenda').value;
  const quantidadeVolumes = parseInt(document.getElementById('quantidadeVolumes').value, 10);

  const formData = {
    enderecoSelecionado,
    chaveAcesso,
    numeroNotaFiscal,
    pedidoVenda,
    quantidadeVolumes
  };

  localStorage.setItem('etiquetaData', JSON.stringify(formData));

  // Animação
  const form = document.querySelector('.form-container');
  form.classList.add('fade-out');

  // Redireciona após animação
  setTimeout(function () {
    window.location.href = 'impressao.html';
  }, 500);
});
