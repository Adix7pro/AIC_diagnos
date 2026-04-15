function addNumber(num){
    let input = document.getElementById("calcInput");
    if(input.value.length < 8){
        input.value += num;
    }
}

function deleteLast(){
    let input = document.getElementById("calcInput");
    input.value = input.value.slice(0, -1);
}

function enterNumber(){
    let val = document.getElementById("calcInput").value;
    let decimal = parseInt(val);
    let binary = decimal.toString(2).padStart(8, '0');

    let row = `
        <tr>
            <td>${decimal}</td>
            <td>${binary}</td>
        </tr>
    `;
    document.querySelector("#binaryTable tbody").innerHTML += row;
}

/* ERROR CALCULATION */
function calculateError(){
    let S = parseFloat(document.getElementById("S").value);
    let N = parseFloat(document.getElementById("N").value);
    let B = parseFloat(document.getElementById("B").value);

    let snr = S / N;
    let capacity = B * Math.log2(1 + snr);

    document.getElementById("resultBox").innerHTML = `
        <p>SNR: ${snr.toFixed(2)}</p>
        <p>Kanal sig‘imi: ${capacity.toFixed(2)}</p>
    `;
}