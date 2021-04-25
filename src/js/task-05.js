const input = document.getElementById("name-input");
const output = document.getElementById("name-output");


input.addEventListener('input', onInputChange);

function onInputChange(event){

    if(input.value === ''){
        output.textContent = 'незнакомец'

        return
    }

    output.textContent = event.currentTarget.value;
}