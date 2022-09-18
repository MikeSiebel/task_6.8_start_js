const  testTextField = document.querySelector('#linkcontent');

testTextField.addEventListener('click', function(event) {
    // тело обработчика
    this.textContent = prompt('Введите текст');
    event.preventDefault();
    // конец тела обработчика
});