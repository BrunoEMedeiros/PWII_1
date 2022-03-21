function soma() {
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    document.getElementById('result').value = n1 + n2
    document.getElementById('titulo').innerText = 'teste titulo'
    document.getElementById('paragrafo').innerText = 'teste paragrafo'

}