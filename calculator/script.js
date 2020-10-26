let numberBtn = document.querySelectorAll('.number'),
    operationBtn = document.querySelectorAll('.operation'),
    ceBtn = document.getElementById(".ce"),
    cBtn = document.getElementById(".c"),
    pointBtn = document.getElementById('point'),
    input = document.querySelector('.input'),
    minusBtn =document.getElementById("minus"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
for (let i = 0; i < numberBtn.length; i++) {
    let number = numberBtn[i];
    number.addEventListener('click', function (e) {
        numberClick(e.target.textContent);
    });
};
for (let i = 0; i < operationBtn.length; i++) {
    let operation = operationBtn[i];
    operation.addEventListener('click', function (e) {
        operationClick(e.target.textContent);
    });
};
point.addEventListener('click', pointClick);
c.addEventListener('click', cClick);
ce.addEventListener('click', ceClick);
minus.addEventListener('click', minusClick);

function minusClick(minusBtn){
    let localMinusMemory = input.value;
    if (localMinusMemory === '0'){
        localMinusMemory = '-';
    }
    if (MemoryNewNumber) {
        localMinusMemory = '-';
        MemoryNewNumber = false;
    } else {
        if (localMinusMemory.indexOf('-') === -1) {
            localMinusMemory += '-';
        };
    };
    input.value = localMinusMemory;
};
function numberClick(numberBtn) {
    if (MemoryNewNumber) {
        input.value = numberBtn;
        MemoryNewNumber = false;
    } else {
        if (input.value === '0') {
            input.value = numberBtn;
        } else {
            input.value += numberBtn;
        };
    };
};

function operationClick(oper) {
    let localOperationMemory = input.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        input.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (oper === '√') {
            MemoryCurrentNumber = Math.sqrt(localOperationMemory);
        } else if (MemoryPendingOperation === 'x*') {
            MemoryCurrentNumber **= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        input.value = MemoryCurrentNumber;
        MemoryPendingOperation = oper
    };
};

function pointClick(ar) {
    let localPointMemory = input.value;

    if (MemoryNewNumber) {
        localPointMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localPointMemory.indexOf('.') === -1) {
            localPointMemory += '.';
        };
    };
    input.value = localPointMemory;
};

function ceClick() {
    input.value = '0'; 
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0,
    MemoryPendingOperation = '';
};

function cClick() {
    input.value = input.value.substring(0, input.value.length-1);
    MemoryNewNumber = true;
    MemoryPendingOperation = null;
};