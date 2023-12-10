let Emails = prompt("Inserisci la tua email");


const validEmails = [
    'paolo@a.b',
    'carlo@a.b',
    'luca@a.b',
    'mario@a.b',
    'gino@a.b',
    'alessio@a.b',
    'chiara@a.b',
    'giulia@a.b',
    'elisa@a.b',
    'alberto@a.b'
]

let checkEmail = 0;

for (i = 0; i < validEmails.length && checkEmail == 0; i++){

    if (validEmails[i] == Emails){
        alert("Email valida");

        checkEmail = 1;

        i = validEmails.length;
    }
}

if (checkEmail == 0){
    alert("Email non valida");
}

