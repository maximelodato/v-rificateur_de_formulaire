document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des éléments
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const cgu = document.getElementById('cgu');

    // Réinitialisation des messages d'erreur
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let isValid = true;

    // Vérification des champs
    if (nom.value === '') {
        document.getElementById('nomError').textContent = 'Le nom est requis';
        isValid = false;
    }

    if (prenom.value.length < 3) {
        document.getElementById('prenomError').textContent = 'Le prénom doit comporter au moins 3 lettres';
        isValid = false;
    }

    if (age.value < 18) {
        document.getElementById('ageError').textContent = 'Vous devez avoir plus de 18 ans';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = 'Format de l\'email invalide';
        isValid = false;
    }

    if (email.value !== confirmEmail.value) {
        document.getElementById('confirmEmailError').textContent = 'Les emails ne correspondent pas';
        isValid = false;
    }

    if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit comporter au moins 6 caractères';
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas';
        isValid = false;
    }

    if (!cgu.checked) {
        document.getElementById('cguError').textContent = 'Vous devez accepter les CGU';
        isValid = false;
    }

    // Si le formulaire est valide, redirection
    if (isValid) {
        window.location.href = 'confirmation.html';
    }
});
