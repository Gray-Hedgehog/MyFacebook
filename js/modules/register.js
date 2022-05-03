const form = document.querySelector('.reg-form'),
    formInputs = document.querySelectorAll('.form-inputs'),
    name = document.getElementById("name"),
    lastName = document.getElementById("lastName"),
    phoneNumber = document.getElementById("phoneNumber"),
    email = document.getElementById("mail");

function validateName(name) {
    let re = /^[A-Za-zА-Яа-яЁё]{2,20}$/
    return re.test(String(name).toLowerCase())
}

function validateLastName(lastName) {
    let re = /^[A-Za-zА-Яа-яЁё]{2,20}$/
    return re.test(String(lastName).toLowerCase())
}

function validateEmail(email) {
    let re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    return re.test(String(email).toLowerCase())
}

function validatePhone(phone) {
    let re = /^[0-9]{11}$/
    return re.test(String(phone))
}

form.onsubmit = function () {
    let nameVal = name.value,
        lastNameVal = lastName.value,
        emailVal = email.value,
        phoneVal = phoneNumber.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    // провека на пустые поля
    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error')

        } else {
            input.classList.remove('error')
        }
    })

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled')
        return false;
    }

    if (!validateName(nameVal)) {
        console.log('name not valid')
        name.classList.add('error')
        return false;
    } else {
        name.classList.remove('error')
    }

    if (!validateLastName(lastNameVal)) {
        console.log('lastName not valid')
        lastName.classList.add('error')
        return false;
    } else {
        lastName.classList.remove('error')
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid')
        phoneNumber.classList.add('error')
        return false;
    } else {
        phoneNumber.classList.remove('error')
    }
    if (!validateEmail(emailVal)) {
        console.log('email not valid')
        email.classList.add('error')
        return false;
    } else {
        email.classList.remove('error')
    }
    document.body.innerHTML = `
    <div class="wrapper">
        <h1>Validation</h1>
            <p>Please check the data.</p>
            <hr>
            <p>Name:  ${name.value}</p>
            <p>lastName:  ${lastName.value}</p>
            <p>phoneNumber: ${phoneNumber.value}</p>
            <p>email: ${email.value}</p>
    </div>
    `;
    return false
}

