

function showMessage()
{
    alert("Привет");
}

let button = document.getElementById("first");

button.addEventListener('click', showMessage);
//button.removeEventListener('click', showMessage);