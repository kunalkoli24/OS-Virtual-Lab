function generateInputs() {
    var numProcesses = parseInt(document.getElementById('numProcesses').value);
    var inputsDiv = document.getElementById('output');
    inputsDiv.innerHTML = '';

    for (var i = 0; i < numProcesses; i++) {
        var arrivalTime = Math.floor(Math.random() * 10); 
        var burstTime = Math.floor(Math.random() * 10) + 1; 
        inputsDiv.innerHTML += `<div>Process ${i + 1}: Arrival Time - ${arrivalTime}, Burst Time - ${burstTime}</div>`;
    }
}

function runScheduling() {
    var algorithm = document.getElementById('algorithm').value;
    var outputDiv = document.getElementById('output');

    switch (algorithm) {
        case 'fcfs':
            fcfs();
            break;
        case 'sjf':
            sjf();
            break;
        case 'rr':
            roundRobin();
            break;
        default:
            outputDiv.innerHTML = 'Invalid algorithm selected.';
    }
}

function fcfs() {
    var outputDiv = document.getElementById('output');
}

function sjf() {
    var outputDiv = document.getElementById('output');
}

function roundRobin() {
    var outputDiv = document.getElementById('output');
}