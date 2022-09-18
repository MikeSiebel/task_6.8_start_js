const consolelog = document.querySelector('#consoleLog');
consolelog.addEventListener('click', () => {
    console.log('Текст, выведенный в консоль');
    alert('Метод для вывода информации в консоль');
});

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Метод показывает диалоговое окно с сообщением и кнопкой OK');
});

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
    prompt('Отображает диалоговое окно с запросом на ввод текста');
});