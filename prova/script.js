function soma() {
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    document.getElementById('res').value = n1 + n2
    document.getElementById('titulo').innerText = 'Novo titulo'
    document.getElementById('paragrafo').innerText = 'Novo paragrafo'
}