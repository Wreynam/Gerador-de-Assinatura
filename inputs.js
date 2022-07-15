const nomeInput = document.getElementById('nome');
const linkImagemInput = document.getElementById('linkImagem');
const cargoInput = document.getElementById('cargo');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const nomeEmpresaInput = document.getElementById('nomeEmpresa');
const linkSiteInput = document.getElementById('linkSite');

nomeInput.addEventListener('input', () => btn())
linkImagemInput.addEventListener('input', () => btn())
cargoInput.addEventListener('input', () => btn())
telefoneInput.addEventListener('input', () => btn())
emailInput.addEventListener('input', () => btn())
nomeEmpresaInput.addEventListener('input', () => btn())
linkSiteInput.addEventListener('input', () => btn())

const nomeCampo = document.getElementById('nome-campo');
const linkImagemCampo = document.getElementById('linkImagem-campo')
const cargoCampo = document.getElementById('cargo-campo');
const telefoneCampo = document.getElementById('telefone-campo');
const emailCampo = document.getElementById('email-campo');
const nomeEmpresaCampo = document.getElementById('nomeEmpresa-campo');
const linkSiteCampo = document.getElementById('linkSite-campo');

function btn() {
    
    var nome = nomeInput.value;
    var linkImagem = linkImagemInput.value;
    var cargo = cargoInput.value;
    var telefone = telefoneInput.value;
    var email = emailInput.value;
    var nomeEmpresa = nomeEmpresaInput.value;
    var linkSite = linkSiteInput.value;

    if (nome) {
        nomeCampo.innerHTML = nome;
    }
    if (linkImagem) {
        linkImagemCampo.setAttribute('src', `${linkImagem}`);
    }
    if (cargo) {
        cargoCampo.innerHTML = cargo;
    }
    if (telefone) {
        telefoneCampo.innerHTML = editarTelefone(telefone);
    }
    if (email) {
        emailCampo.innerHTML = email;
    }
    if (nomeEmpresa) {
        nomeEmpresaCampo.innerHTML = nomeEmpresa;
    }
    if (linkSite) {
        linkSiteCampo.setAttribute('href', 'http://www.' + `${linkSite}`)
        linkSiteCampo.innerHTML = linkSite;
    }
  }
  function editarTelefone(tel) {
    try {
      tel = tel.replace(/ /g, '');
      tel = tel.replace(/\(/g, '');
      tel = tel.replace(/\)/g, '');
      tel = tel.replace(/\-/g, '');
      let n = tel.length;
      if (n === 0) {
        return '99 99999 9999'
      } else if (n < 3) {
        return tel
      } else if (n < 7) {
        return tel.slice(0, 2) + ' ' + tel.slice(2)
      } else if (n <= 11) {
        return tel.slice(0, 2) + ' ' + tel.slice(2, 7) + ' ' + tel.slice(7)
      } else {
        alert('Coloque o telefone no formato 12 12345 1234 (com 11 números)')
        return '99 99999 9999'
      }
    } catch (err) { }
  }
const buttonCopiar = document.getElementById('btn-copiar')
buttonCopiar.onclick = copiar;

  function copiar() {
    var area = document.getElementById("assinaturaCompleta");
    if (document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(area);
      range.select();
      document.execCommand("Copy");
      alert("Copiado para a area de transferência");
    } else if (window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(area);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Copiado para a area de transferência");
    }
  }