const LoginFieldInput = document.querySelector(`.login-form`);

LoginFieldInput.addEventListener(`submit`, fieldProcessing);

function fieldProcessing(event) { 
    event.preventDefault();
    const email = LoginFieldInput.email.value;
    const password = LoginFieldInput.password.value;
    // const { email, password } = event.currentTarget.elements;



    if (email === `` || password === ``) {
        return console.log(`Всі поля повинні бути заповнені!!!!!`)
    } else {
        const newObject = {
            email: email,
            password: password
        };

        console.log(`Email: ${email}, Password: ${password}`);
        event.currentTarget.reset();
    }
}




// Обробка відправлення форми form.login - form повинна 
// відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна
// перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з 
// попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт, де ім'я поля буде ім'ям 
// властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість
// elements.
// Виведи об'єкт із введеними даними в консоль і очисти
//  значення полів форми методом reset.