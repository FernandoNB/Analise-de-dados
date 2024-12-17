document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Captura dos dados do formulário
    const formData = {
      nome: document.getElementById("nome").value,
      departamento: document.getElementById("departamento").value,
      ansiedade: document.getElementById("ansiedade").value,
      tensao_corporal: document.getElementById("tensao_corporal").value,
      cansaco_mental: document.getElementById("cansaco_mental").value,
      relacionamento_colegas: document.getElementById("relacionamento_colegas").value,
      relacionamento_lideres: document.getElementById("relacionamento_lideres").value,
      burnout: document.getElementById("burnout").value,
      esgotamento: document.getElementById("esgotamento").value,
      despersonalizacao: document.getElementById("despersonalizacao").value,
      realizacao_profissional: document.getElementById("realizacao_profissional").value,
      seguranca_psicologica: document.getElementById("seguranca_psicologica").value,
      controle_financeiro: document.getElementById("controle_financeiro").value,
      disposicao_ajudar: document.getElementById("disposicao_ajudar").value,
      inclusao_diversidade: document.getElementById("inclusao_diversidade").value,
    };
  
    // URL do Google Apps Script (Substitua pela sua URL)
    const url =
      "https://script.google.com/macros/s/AKfycbyMhleZXFVBjwRTIjwY45jkk0Kmz08jd8mgBNf-fRehzrcrljZzhzFApF1xBmmRBCfB/exec";
  
    // Configuração do envio
    fetch(url, {
      method: "POST",
      mode: "no-cors", // Importante para não ter bloqueio de CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        document.getElementById("mensagem").innerHTML =
          "<p style='color: green;'>Dados enviados com sucesso!</p>";
        document.getElementById("formulario").reset();
      })
      .catch((error) => {
        document.getElementById("mensagem").innerHTML =
          "<p style='color: red;'>Erro ao enviar os dados. Tente novamente.</p>";
        console.error("Erro:", error);
      });
  });
  