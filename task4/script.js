const  testTextField = document.querySelector('#linkcontent');
testTextField.addEventListener('click', function() {
    // тело обработчика
    this.textContent = prompt('Введите текст');
    // конец тела обработчика
})