function conv() {
  var name = window.document.getElementById('Nome').value.toLowerCase().split(' ').join('_');
  var namae = '';
  for (var i=0; i<name.length; i++) {
    namae = namae + '<img src="assets/img/' + name[i] + '.svg" width="30">';
  }
  window.document.getElementById('quadro').innerHTML = namae;
}