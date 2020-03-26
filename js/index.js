const timeDOM = document.querySelector('.time');
const dateDOM = document.querySelector('.date');
const username = document.querySelector('.inputName');
const answer = document.querySelector('.answer');
const data = [
    {
        'username': '[Ingresa un nombre]',
        'objective': '[Ingresar objetivo]'
    }
];

function showTime(){
    const time = new Date();
    //getDay
    const numberDay = time.getDate();
    const textDay = getTextDay(time.getDay());
    const month = getTextMonth(time.getMonth());
    //getClockTime
    const hours = time.getHours();
    const minutes = addZero(time.getMinutes());
    
    const completeDate = `${textDay} ${numberDay} de ${month}`;
    const completeTime = `${hours}:${minutes}`;

    timeDOM.innerHTML = completeTime;
    dateDOM.innerHTML = completeDate;
    setTimeout(showTime, 1000);    
}
function getTextDay(num){
    let day;
    switch (num) {
        case 0:
            day = 'Domingo';
            break;
        case 1:
            day = 'Lunes';
            break;
        case 2:
            day = 'Martes';
            break;
        case 3:
            day = 'Miercoles';
            break;
        case 4:
            day = 'Jueves';
            break;
        case 5:
            day = 'Viernes';
            break;
        case 6:
            day = 'Sabado';
            break;
        default:
            day = '⏰'
            break;
    }
    return day;
}
function getTextMonth(num){
    let month;
    switch (num) {
        case 0:
            month = 'Enero';
            break;
        case 1:
            month = 'Febrero';
            break;
        case 2:
            month = 'Marzo';
            break;
        case 3:
            month = 'Abril';
            break;
        case 4:
            month = 'Mayo';
            break;
        case 5:
            month = 'Junio';
            break;
        case 6:
            month = 'Julio';
            break;
        case 7:
            month = 'Agosto';
            break;
        case 8:
            month = 'Septiembre';
            break;
        case 9:
            month = 'Octubre';
            break;
        case 10:
            month = 'Noviembre';
            break;
        case 11:
            month = 'Diciembre';
            break;
        default:
            month = '⏰'
            break;
    }
    return month;
}
function addZero(num){
    let min;
    if(num < 10){
        min = `0${num}`;
    }else{
        min = num;
    }
    return min;
}

const datosDB = JSON.parse(localStorage.getItem('session-info'));

function getData() {    
    if ( datosDB === null ) {
      username.innerHTML = data[0].username;
      answer.innerHTML = data[0].objective;
    }else{
        username.innerHTML = datosDB[0].username;
      answer.innerHTML = datosDB[0].objective;
    }
}
username.addEventListener('click', () => {
    if(username.innerHTML == '[Ingresa un nombre]' && datosDB === null){
        username.innerHTML = '';
        if (username.innerHTML == '') {
            let valueUsername;
            username.addEventListener('keyup', () => {
                valueUsername = username.innerHTML;
                data[0].username = valueUsername;
                localStorage.setItem('session-info', JSON.stringify(data));
            });
            username.addEventListener('blur', () => {
                if (valueUsername === undefined) {
                    username.innerHTML = datosDB[0].username; 
                } else {
                    username.innerHTML = valueUsername;
                }
            });
        }
    }
});


answer.addEventListener('click', () => {
    if( answer.innerHTML == '[Ingresar objetivo]' && datosDB === null){
        answer.innerHTML = '';
        if( answer.innerHTML == '' ){
            let valueAnswer;
            answer.addEventListener('keyup', () => {
                 valueAnswer = answer.innerHTML;
                 data[0].objective = valueAnswer;
                 localStorage.setItem('session-info', JSON.stringify(data));
            });
            answer.addEventListener('blur', () => {
                if ( valueAnswer === undefined ) {
                    answer.innerHTML = datosDB[0].objective;
                } else {
                    answer.innerHTML = valueAnswer;
                }
            });
        }
    }
});

getData();
showTime();

