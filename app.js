// Инициализация
let tg = window.Telegram.WebApp;

// Разворачиваем приложение на весь экран (рекомендуется)
tg.expand();

// Говорим Telegram, что приложение готово к показу
tg.ready();

// Устанавливаем цвет верхней панели под дизайн приложения (опционально)
tg.setHeaderColor('#1c1c1e'); 
tg.setBackgroundColor('#1c1c1e');
let user = tg.initDataUnsafe?.user;

if (user) {
    console.log("Имя:", user.first_name);
    console.log("Фамилия:", user.last_name);
    console.log("Username:", user.username);
    console.log("ID:", user.id);
    // Выводим на экран
    document.getElementById('username').innerText = user.first_name;
} else {
    // Если данных нет (например, открыто в браузере), показываем заглушку
    document.getElementById('username').innerText = "Гость";
}
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // Легкая вибрация на телефоне (если поддерживается)
    if (tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }

    // Показываем всплывающее окно Telegram (Alert)
    tg.showAlert('Вы нажали кнопку!');

    // Или выводим данные на экран
    document.getElementById('result').innerText = 'Действие выполнено!';
});