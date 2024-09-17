# Gerador de Etiquetas Amazon

Este projeto consiste em um sistema para geração e impressão de etiquetas de produtos para centros de distribuição da Amazon. 
O sistema é dividido em duas partes principais: o formulário de entrada de dados e a página de impressão de etiquetas.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Arquivos Principais](#arquivos-principais)
  - [Formulário de etiquetas](#formulário-de-etiquetas)
  - [Impressão de etiquetas](#impressão-de-etiquetas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Este projeto utiliza apenas HTML, CSS e JavaScript puro, sem necessidade de instalação de bibliotecas adicionais além das já referenciadas via CDN.

1. Faça o download dos arquivos HTML.
2. Abra o arquivo `Formulário de etiquetas.html` em um navegador para iniciar o processo de geração de etiquetas.
3. Obs: para um melhor ajuste da impressão, é recomendado que seja utilizado os navegadores Microsoft Edge e Google Chrome.

## Uso

### 1. Formulário de Etiquetas
- Preencha os campos do formulário, como o endereço do fornecedor, chave de acesso, número da nota fiscal, pedido de venda e quantidade de volumes.
- Após o preenchimento, clique no botão **Gerar Etiquetas**.
- As informações preenchidas serão armazenadas no `localStorage` do navegador e a página será redirecionada para `impressão.html`.

### 2. Impressão de Etiquetas
- A página de impressão utiliza as informações armazenadas para gerar as etiquetas com os dados fornecidos.
- As etiquetas incluem o endereço de destino, número da nota fiscal, volume, pedido de venda e os códigos de barras para identificação.
- A página é compatível com a biblioteca **JsBarcode** para renderizar os códigos de barras.

## Arquivos Principais

### Formulário de etiquetas

Arquivo: [Formulário de etiquetas.html](./Formulário%20de%20etiquetas.html)

Este arquivo contém o formulário utilizado para gerar as etiquetas. Ele é composto por:

- Campos para entrada de dados como **Endereço do Fornecedor**, **Chave de Acesso**, **Número da Nota Fiscal**, **Pedido de Venda** e **Quantidade de Volumes**.
- Uma função JavaScript que extrai os últimos 6 dígitos da chave de acesso para preencher automaticamente o número da nota fiscal.
- Animação visual no envio do formulário antes de redirecionar para a página de impressão.

#### Estrutura:
```html
<form id="etiquetaForm">
    <label for="endereco">Endereço do Fornecedor:</label>
    <select id="endereco">...</select>

    <label for="chaveAcesso">Chave de Acesso:</label>
    <input type="text" id="chaveAcesso" required>

    <label for="numeroNotaFiscal">Número da Nota Fiscal:</label>
    <input type="text" id="numeroNotaFiscal" required>

    <label for="pedidoVenda">Pedido de Venda:</label>
    <input type="text" id="pedidoVenda" required>

    <label for="quantidadeVolumes">Quantidade de Volumes:</label>
    <input type="number" id="quantidadeVolumes" required>

    <button type="submit">Gerar Etiquetas</button>
</form>


