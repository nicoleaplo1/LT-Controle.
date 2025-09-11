// Token do Airtable
const AIRTABLE_API_KEY = 'patgY4TpUHsYxgeT4.e932cd0ffab6834486ea17e82874224ce4f41b601f3a54c54e442eecd573ba5a';
const AIRTABLE_BASE_ID = 'patgY4TpUHsYxgeT4';
const AIRTABLE_TABLE_NAME = 'Controle Financeiro';

const container = document.getElementById('comprovantes-container');

async function fetchComprovantes() {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`
    }
  });
  
  const data = await response.json();
  displayComprovantes(data.records);
}

function displayComprovantes(records) {
  container.innerHTML = ''; // limpa antes de inserir
  records.forEach(record => {
    const comprovante = document.createElement('div');
    comprovante.className = 'comprovante';
    const nome = record.fields.Nome || 'Sem nome';
    const link = record.fields.Link || '#';
    comprovante.innerHTML = `<p>${nome}</p><a href="${link}" target="_blank">Ver Comprovante</a>`;
    container.appendChild(comprovante);
  });
}

fetchComprovantes();
