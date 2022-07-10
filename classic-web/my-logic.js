function crearCards() {
  const info = [
    {
      title:
        'Thor: Love and Thunder’ hace de los cortos de Darryl canon en el MCU',
      category: 'Entretenimiento',
    },
    {
      title: '3 consejos para evitar spoilers en internet',
      category: 'Entretenimiento',
    },
    {
      title:
        'Google propone dividir su negocio publicitario ante señalamientos anticompetitivos',
      category: 'Apps & Software',
    },
  ];

  const containerRef = document.getElementsByClassName('container')[0];
  const containerHtml = info
    .map(
      (art) => `<article class="card">
        <div class="card-left"></div>
        <div class="card-right">
          <h2>${art.category}</h2>
          <p>${art.title}</p>
        </div>
      </article>`
    )
    .join('');

  containerRef.innerHTML = containerHtml;
}

crearCards();
