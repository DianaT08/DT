function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}

function getNonReturnZeroL(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '▔';
        else if (parseInt(bits[i].value) == 1) symbol = '|▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁';
        else if (parseInt(bits[i].value) == 0) symbol = '|▁';
        result.push(symbol);
    }
    return result;
}



function getBiphaseMark(bits) {
    var result = [];
    
    for (var i = 0; i < bits.length; i++) {
        let symbol = '▁▁▁▁';
        if (parseInt(bits[i].value) == 1 && symbol[3]=="▁") symbol = '∣▔∣▁';
        else if (parseInt(bits[i].value) == 1 && symbol[3]=="▔") symbol = '|▁|▔';

        if  (parseInt(bits[i].value) == 0 && symbol[3]=="▔" && parseInt(bits[i-1].value)==1) symbol = '|▁';
       
        else if  (parseInt(bits[i].value) == 0 && symbol[3]=="▁"  && parseInt(bits[i-1].value)==1) symbol = '|▔';
        
        else if(parseInt(bits[i].value) == 0 && parseInt(bits[i-1].value)==0){
            if (symbol[1]=="▔")
            symbol = '|▁';
            else symbol = '|▔';
        }
        result.push(symbol);
    }
    return result;
}

function getAlternateMarkInversion(bits) {
    var result = [];
    var plus = true;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1 && plus == true) 
        {
            symbol = '|▔|';
            plus = false;
        }
        else if (parseInt(bits[i].value) == 1 && plus == false) 
        {
            symbol = '|▁|';
            plus = true;
        }
        if (parseInt(bits[i].value) == 0) symbol = '▁';
        result.push(symbol);
    }
    return result;
}

function getNonReturnToZeroMark(bits) {
    var result = [];
    var up = false;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '_____';
        if (parseInt(bits[i].value) == 1 && up == false) 
        {
            symbol = '|▔';
            up = true;
        }
        else if (parseInt(bits[i].value) == 1 && up == true) 
        {
            symbol = '|▁';
            up = false;
        }
        if (parseInt(bits[i].value) == 0 && up == false) symbol = '▁';
        else if (parseInt(bits[i].value) == 0 && up == true) symbol = "▔";
        result.push(symbol);
    }
    return result;
}
function getNonReturnToZeroS(bits) {
    var result = [];
    var up = false;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '_____';
        if (parseInt(bits[i].value) == 0 && up == false) 
        {
            symbol = '|▔';
            up = true;
        }
        else if (parseInt(bits[i].value) == 0 && up == true) 
        {
            symbol = '|▁';
            up = false;
        }
        if (parseInt(bits[i].value) == 1 && up == false) symbol = '▁';
        else if (parseInt(bits[i].value) == 1 && up == true) symbol = "▔";
        result.push(symbol);
    }
    return result;
}

function getMiller(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = "___";
        if (parseInt(bits[i].value) == 1 && symbol[2]=='_') symbol = '▁∣▔';
        if (parseInt(bits[i].value) == 1 && symbol[2]=='▔') symbol = '▔|_';
        if (parseInt(bits[i].value) == 0 &&parseInt(bits[i+1].value) == 0 && symbol[2]=='_') symbol = '▔▔▔';
        else if(parseInt(bits[i].value) == 0 && symbol[2]=='_') symbol = '___';
        if (parseInt(bits[i].value) == 0 &&parseInt(bits[i+1].value) == 0 && symbol[2]=='▔') symbol = '___';
        else if(parseInt(bits[i].value) == 0 && symbol[2]=='▔') symbol = '▔▔▔';
        result.push(symbol);
    }
    return result;
}