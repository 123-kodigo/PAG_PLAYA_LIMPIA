function encriptarTexto() {
    const input = document.getElementById('input-text').value;
    const output = document.getElementById('output-text');
    
    if (input.trim() === "") {
      mostrarMensajeDefault();
      return;
    }
  
    const textoEncriptado = input
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    output.value = textoEncriptado;
    mostrarResultado();
  }
  
  function desencriptarTexto() {
    const input = document.getElementById('input-text').value;
    const output = document.getElementById('output-text');
  
    if (input.trim() === "") {
      mostrarMensajeDefault();
      return;
    }
  
    const textoDesencriptado = input
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    output.value = textoDesencriptado;
    mostrarResultado();
  }
  
  function copiarTexto() {
    const output = document.getElementById('output-text');
    output.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
  }
  
  function mostrarResultado() {
    document.getElementById('mensaje-default').style.display = "none";
    document.getElementById('mensaje-encriptado').style.display = "flex";
  }
  
  function mostrarMensajeDefault() {
    document.getElementById('mensaje-default').style.display = "flex";
    document.getElementById('mensaje-encriptado').style.display = "none";
  }
// Por ahora no es necesario JS para esta estructura,
// pero puedes agregar interacciones si lo necesitas después.
console.log("Página cargada correctamente.");
  