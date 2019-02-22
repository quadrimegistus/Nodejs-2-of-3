var fs = require('fs');
var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case 'total':
        total();
        break;
    case 'deposit':
        deposit();
        break;
    case 'withdraw':
        withdraw();
        break;
    case 'lotto':
        lotto();
        break;
}

function total() {
    fs.readFile('bank.txt', 'utf8', function(error, data){
        if (error) {return console.log(error)}
        data = data.split(',');
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {result += parseFloat(data[i]);}
        }
        console.log('Your balance is: '+result.toFixed(2));
    });
}

function deposit() {
    fs.appendFile('bank.txt',', '+value, function(error){
        if (error) {return console.log(error)}
        console.log('$'+value+' deposited.');
        total();
    });
}

function withdraw() {
    fs.appendFile('bank.txt',', -'+value, function(error){
        if (error) {return console.log(error)}
        console.log('$'+value+' withdrawn.');
        total();
    });
}

function lotto() {
    fs.appendFile('bank.txt',', -.25', function(error){
        if (error) {return console.log(error)}
    var chance = Math.floor((Math.random()+10+1));
    if (chance === 1) {

    } else {

    }

})}