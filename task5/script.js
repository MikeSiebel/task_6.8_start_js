let  inputTextField = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');
let submitButton = document.querySelector('button');

inputTextField.addEventListener('input', updateValue);

function updateValue(e) {
    duplicateField.textContent = e.target.value;
};

submitButton.addEventListener('mousedown', clearingValue);

function clearingValue() {
    console.log(duplicateField.textContent);
    document.addEventListener('submit', (e) => { 
        // Отключаем событие по умолчанию 
             e.preventDefault();
        // Очищаем поля формы 
            e.target.reset(); 
        });
};
