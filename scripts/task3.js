const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

document.querySelector("#sendAjax").addEventListener('click', function() {
    var inputName = document.querySelector("#ajaxName").value;
    var inputNumber = document.querySelector("#ajaxNumber").value;
    var token = '7213495137:AAG9jcfZP2yalS1BQbuKzFH9Oppw00qObLY';
    var chatId = '803834139';

    var url = `https://api.telegram.org/bot${token}/sendMessage`;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Message sent to Telegram:', xhr.responseText);
            Toast.fire({
                icon: 'success',
                title: 'Success',
            });
        } else if (xhr.readyState === 4) {
            console.error('Error sending message:', xhr.responseText);
            Toast.fire({
                icon: 'error',
                title: 'Error',
            });
        }
    };

    var data = JSON.stringify({
        chat_id: chatId,
        text: `Name: ${inputName}\nNumber: ${inputNumber}`
    });

    console.log('Sending data to Telegram:', data);
    xhr.send(data);
});

document.querySelector("#sendServerRequest").addEventListener('click', function() {
    var inputRequest = document.querySelector("#ajaxServer").value;

    var url = `http://localhost:3000/check` ;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charst=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Text to server:', xhr.responseText);
            Toast.fire({
                icon: 'success',
                title: 'Success',
            });
        } else if (xhr.readyState === 4) {
            console.error('Error sending text:', xhr.responseText);
            Toast.fire({
                icon: 'error',
                title: 'Error',
            });
        }
    };

    xhr.send(inputRequest);
})
