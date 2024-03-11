function appendToDisplay(value){
    document.querySelector('#display').value += value;
}

function clearDisplay(){
    document.querySelector('#display').value = '';
}

function calculateResult(){
    try {
        document.querySelector('#display').value = eval(document.querySelector('#display').value);
    } catch (error) {
        document.querySelector('display').value = 'Error';
    }
}