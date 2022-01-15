const clock = document.querySelector('.clock');

setInterval(function relogio() {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
  
    
    clock.innerHTML = `${hora}:${minutos}:${segundos}`;

   

    
}, 500);






