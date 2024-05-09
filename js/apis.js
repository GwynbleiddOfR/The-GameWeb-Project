function copiarEmail() {
    const email = document.getElementById('mail').innerText;
    const iconoCopiar = document.getElementById('iconoCopiar');
    const alerta = document.getElementById('alerta-email-copy');
    const card = document.querySelector('.card'); // Contenedor '.card'
  
    navigator.clipboard.writeText(email)
      .then(() => {
        const iconoPos = iconoCopiar.getBoundingClientRect();
        const cardPos = card.getBoundingClientRect();
  
        alerta.style.left = `${iconoPos.left - cardPos.left - 40}px`;
        alerta.style.top = `${iconoPos.top - cardPos.top - alerta.offsetHeight - 50}px`;
        alerta.style.display = 'block';

        console.log('Correo electrónico copiado: ' + email);
  
        setTimeout(() => {
          alerta.style.display = 'none';
        }, 1000);
      })
      .catch(err => {
        console.error('Error al copiar el correo electrónico:', err);
      });
}

function copiarTelefono() {
    const telefono = document.getElementById('telefono').innerText;
    const iconoCopiar2 = document.getElementById('iconoCopiar2');
    const alerta = document.getElementById('alerta-tel-copy');
    const card = document.querySelector('.card');
  
    navigator.clipboard.writeText(telefono)
      .then(() => {
        const iconoPos = iconoCopiar2.getBoundingClientRect();
        const cardPos = card.getBoundingClientRect();
        alerta.style.left = `${iconoPos.left - cardPos.left - 40}px`;
        alerta.style.top = `${iconoPos.top - cardPos.top - alerta.offsetHeight - 50}px`;
        alerta.style.display = 'block';

        console.log('Número de teléfono copiado: ' + telefono);
  
        setTimeout(() => {
          alerta.style.display = 'none';
        }, 1000);
      })
      .catch(err => {
        console.error('Error al copiar el número de teléfono:', err);
      });
}