function copiarEmail() {
    const email = document.getElementById('mail').innerText;
    const iconoCopiar = document.getElementById('iconoCopiar');
    const alerta = document.getElementById('alerta-email-copy');
    const card = document.querySelector('.card'); // Contenedor '.card'
  
    navigator.clipboard.writeText(email)
      .then(() => {
        // Obtiene la posición del icono de copiar relativa al contenedor '.card'
        const iconoPos = iconoCopiar.getBoundingClientRect();
        const cardPos = card.getBoundingClientRect();
  
        // Posiciona la alerta en relación con el contenedor '.card'
        alerta.style.left = `${iconoPos.left - cardPos.left - 40}px`;
        // Ajusta la posición 'top' para que la alerta aparezca más arriba del icono
        alerta.style.top = `${iconoPos.top - cardPos.top - alerta.offsetHeight - 50}px`; // Aumenta la distancia arriba del icono
  
        // Muestra la alerta
        alerta.style.display = 'block';
  
        // Oculta la alerta después de 2 segundos
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
  
        setTimeout(() => {
          alerta.style.display = 'none';
        }, 1000);
      })
      .catch(err => {
        console.error('Error al copiar el correo electrónico:', err);
      });
}