document.addEventListener('DOMContentLoaded', function() {
    // Cargar y convertir Markdown a HTML
    fetch('studios/estudio1.md')
      .then(response => response.text())
      .then(text => {
        // Convertir Markdown a HTML
        const html = marked.parse(text);
        document.getElementById('reviews-container').innerHTML += html;
      });
    
    // Puedes cargar más estudios aquí
    // fetch('studios/otro-estudio.md')...
  });