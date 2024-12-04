// Links das imagens das moedas
const linksMoedas = {
  "1 Centavo": "https://images.tcdn.com.br/img/img_prod/1083822/1_centavo_1a_familia_1994_1997_337_1_0546992d03ccd73361c6ba5019fa3227.png",
  "5 Centavos": "https://images.tcdn.com.br/img/img_prod/1083822/5_centavos_2a_familia_fc_341_1_87fa023f132b787bc0efac76133757d8.png",
  "10 Centavos": "https://images.tcdn.com.br/img/img_prod/1083822/10_centavos_2a_familia_fc_343_1_433af046b48d50431a9a570beb1f567a.png",
  "25 Centavos": "https://images.tcdn.com.br/img/img_prod/1083822/25_centavos_2a_familia_fc_1669_1_0ed1170cc91ade41c29640ea60949051.png",
  "50 Centavos": "https://images.tcdn.com.br/img/img_prod/1083822/50_centavos_2a_familia_fc_1671_1_852b1f9b48db2fa5643e4463aac9ba8d.png",
  "1 Real": "https://numismaticacoan.com/wp-content/uploads/2017/07/2014-4.jpg"
};

// Função para exibir a imagem da moeda
function exibirImagem() {
  const seletor = document.getElementById("moeda-seletor");
  const moedaSelecionada = seletor.value;
  const imagem = document.getElementById("moeda-imagem");
  const infoTexto = document.getElementById("info-texto");

  if (moedaSelecionada in linksMoedas) {
    imagem.src = linksMoedas[moedaSelecionada];
    imagem.style.display = "block";
    infoTexto.textContent = `Você selecionou a moeda de ${moedaSelecionada}`;
    infoTexto.style.color = "#333333";
  } else {
    imagem.style.display = "none";
    infoTexto.textContent = "Erro: Selecione uma moeda válida.";
    infoTexto.style.color = "red";
  }
}

// Adiciona o evento ao botão
document.getElementById("exibir-moeda").addEventListener("click", exibirImagem);
