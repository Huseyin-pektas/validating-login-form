


function loginForm(event) {

    const Name = document.getElementById('Name').value
    const Surname = document.getElementById('Surname').value
    const Email = document.getElementById('Email').value
    const Password = document.getElementById('Password').value
    const Tel = document.getElementById('Tel').value
    const formError = document.getElementById('formError')


    const nameMessage = document.getElementById('nameMessage')
    const surnameMessage = document.getElementById('surnameMessage')
    const emailMessage = document.getElementById('emailMessage')
    const passwordMessage = document.getElementById('passwordMessage')
    const telMessage = document.getElementById('telMessage')
    const successMessage = document.getElementById('successMessage');
    const Gonder =  document.getElementById('Gönder')


    let formIsValid = true;

    event.preventDefault()
    formError.innerText = ''
    // Email format validation

    // if(Name === '' || Surname === '' || Email === '' || Password === '' || Tel ===''){
    //     formError.innerText='Formun içindeki alanlar boş bırakılamaz!'
    //     formError.style.color='red'

    // }
    //Name validation
    if (Name === '') {
        nameMessage.innerText = 'Ad alanı boş bırakılamaz!'
        nameMessage.style.color = 'red'
        console.log("'Ad alanı boş bırakılamaz!'")
        let formIsValid = false;


    } else if (Name.length < 2 || Name.length > 16) {
        nameMessage.style.color = 'red'
        nameMessage.innerText = 'Ad alanı 3 ile 16 karakter arasında olmalı!'
        console.log("Ad alanı 3 ile 16 karakter arasında olmalı!")
        let formIsValid = false;

    } else {
        nameMessage.style.color = 'green'
        nameMessage.innerText = 'Ad alanı geçerli!'
        setTimeout(() => { nameMessage.innerText = ''
        }, 6000)
    }
    // Surname validation
    if (Surname === '') {
        surnameMessage.innerText = 'Soyadı alanı boş bırakılamaz!'
        surnameMessage.style.color = 'red'
        console.log("'Soyadı alanı boş bırakılamaz!'")
        let formIsValid = false;


    } else if (Surname.length < 2 || Surname.length > 16) {
        surnameMessage.style.color = 'red'
        surnameMessage.innerText = 'Soyadı alanı 3 ile 16 karakter arasında olmalı!'
        console.log("Soyadı alanı 3 ile 16 karakter arasında olmalı!")
        let formIsValid = false;

    } else {
        surnameMessage.style.color = 'green'
        surnameMessage.innerText = 'Soyadı alanı geçerli!'
        setTimeout(() => { surnameMessage.innerText = '' }, 6000)
    }
    // Email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Email === '') {
        emailMessage.innerText = 'E-posta alanı boş bırakılamaz!'
        emailMessage.style.color = 'red'
        console.log('E-posta alanı boş bırakılamaz!')
        let formIsValid = false;


    } else if (!emailRegex.test(Email)) {
        emailMessage.style.color = 'red'
        emailMessage.innerText = 'Geçerli bir e-posta adresi giriniz!'
        console.log("Geçerli bir e-posta adresi giriniz!")
        V
    } else {
        emailMessage.style.color = 'green'
        emailMessage.innerText = 'E-posta alanı geçerli!'
        setTimeout(() => { emailMessage.innerText = '' }, 6000)
    }
    if (Password === '') {
        passwordMessage.innerText = 'Şifre alanı boş bırakılamaz!';
        passwordMessage.style.color = 'red';
        formIsValid = false;
    } else {
        passwordMessage.style.color = 'green';
        passwordMessage.innerText = 'Şifre alanı geçerli!';
        setTimeout(() => { passwordMessage.innerText = ''; }, 6000);
    }
    if (Tel === '') {
        telMessage.innerText = 'Telefon numarası alanı boş bırakılamaz!';
        telMessage.style.color = 'red';
        formIsValid = false;
    } else {
        telMessage.style.color = 'green';
        telMessage.innerText = 'Telefon numarası alanı geçerli!';
        setTimeout(() => { telMessage.innerText = ''; }, 6000);
    }

   
    if (!formIsValid) {
        formError.innerText = 'Lütfen tüm alanları doğru şekilde doldurunuz!';
        formError.style.color = 'red';
        successMessage.style.display = 'none';
    } else {
        successMessage.style.display = 'block';
        formError.innerText = '';

        Name.value = '';
        Surname.value = '';
        Email.value = '';
        Password.value = '';
        Tel.value = '';
        Gonder.innerText='Form Gönderildi!';
    }
    return formIsValid;
}