async function obtenerPrecios() {
  try {
    const response = await fetch('https://dolarapi.com/v1/dolares');
    const data = await response.json();

    const tabla = document.getElementById('tabla-body');
    tabla.innerHTML = '';

    data.forEach(d => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${d.nombre}</td>
        <td>$${d.compra ? d.compra.toFixed(2) : '-'}</td>
        <td>$${d.venta ? d.venta.toFixed(2) : '-'}</td>
        <td>${new Date().toLocaleString()}</td>
      `;
      tabla.appendChild(fila);
    });

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

obtenerPrecios();
setInterval(obtenerPrecios, 300000); // cada 5 min
