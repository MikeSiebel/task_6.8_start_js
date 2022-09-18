const  testTextField = document.querySelector('#linkcontent');
testTextField.addEventListener('click', function() {
    // тело обработчика
    console.log(testTextField)
    this.textContent = prompt('Введите текст');
    // конец тела обработчика
})