class Calculator {

    constructor() {
    this.operator = '';
    this.currentValue = '';
    this.previousValue = '';
    this.result = '';
    }

   addNumber(event) {
        console.log(event.target.id + this.currentValue);
        this.currentValue += event.target.id;
        input.value = this.currentValue;
    }
    
       minus() {
        console.log('minus');
        this.operatorPressed();
        this.operator = '-';
        }
    
      plus() {
        console.log('plus');
        this.operatorPressed();
        this.operator = '+';
    }
    
     multiply() {
        console.log('multiply')
        this.operatorPressed();
        this.operator = '*';
    }
    
      divide() {
        console.log('divide')
        this.operatorPressed();
        this.operator = '%';
    }
    
      equals() {
        console.log('equals');
        this.checkOperator();
        input.value = this.result;
        this.currentValue = this.result;
    }

       clear() {
        console.log('clear');
        this.operator = '';
        this.currentValue = ''
        this.previousValue = '';
        this.result = '';
        input.value = ''
    }

     operatorPressed () {
        input.value = '';
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

     checkOperator() {
        switch (this.operator) {
            case '+':
                this.result = parseInt(this.currentValue) + parseInt(this.previousValue);
                break;
            case '-':
                this.result = parseInt(this.previousValue) - parseInt(this.currentValue);
                break;
            case '*':
                this.result = parseInt(this.previousValue) * parseInt(this.currentValue);
                break;
            case '%':
                this.result = parseInt(this.previousValue) / parseInt(this.currentValue);
                break;
        }
    }
}

const calculator = new Calculator();

const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('#exampleFormControlTextarea1');


console.log(buttons);

for(i=0; i < buttons.length; i++) {
    let value = buttons[i].innerHTML;
    if (!isNaN(value)) {
        buttons[i].id = value;
        buttons[i].addEventListener('click', function(value) {
            calculator.addNumber(value);
        });
        
    } else {
        switch (value) {
            case '-':
                buttons[i].addEventListener('click', function() {
                    calculator.minus();
                });
                break;
            case '+':
                buttons[i].addEventListener('click', function() {
                    calculator.plus();
                });
                break;
            case 'X':
                buttons[i].addEventListener('click', function() {
                    calculator.multiply();
                });
                break;
            case '/':
                buttons[i].addEventListener('click', function() {
                    calculator.divide();
                });
                break;
            case '=':
                buttons[i].addEventListener('click', function() {
                    calculator.equals();
                });
                break;
            case 'C':
                buttons[i].addEventListener('click', function() {
                    calculator.clear();
                });
                break;
            default:
        }
    }  
}
