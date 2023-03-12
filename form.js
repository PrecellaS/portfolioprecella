const form = document.querySelector('.contact-form');

//function to send message when click on button
function sendMsg(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + text + '<br/> message: ' + message;

    //Function send Email...
    Email.send({
        SecureToken: "55825368-5278-4c1a-8d96-409c994566d2",
        To: 'precellaporfolio@gmail.com',
        From: email,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
}

//Add the event listener submit
form.addEventListener('submit', sendMsg);








<script src="https://smtpjs.com/v3/smtp.js"></script>

<script>
    const form = document.querySelector('.contact-form');
    //Function to send the email
    function sendMsg(e) {
        e.preventDefault();
        console.log('clicked');
        const name = document.querySelector('.name')
        const email = document.querySelector('input[name="email"]');
        const subject = document.querySelector('.subject')
        const message = document.querySelector('.message')
        const body = 'name: ' + name + '<br/> email: ' + email.value + '<br/> subject: ' + subject.value + '<br/> message: ' + message.value;

        //Function send Email
        Email.send({
            SecureToken: "739e9dce-f890-42bd-ae22-5ffb4f4e0894",
            To: 'precellaporfolio@gmail.com',
            From: email.value,
            Subject: subject.value,
            Body: body
        }).then(
            message => alert(message)
        );

    }

    //add the Event Listener submit
    form.addEventListener('submit', sendMsg);


</script>








