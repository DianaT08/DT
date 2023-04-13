function decode(bits) {
	var z4=parity(bits[4]+bits[5]+bits[6]+bits[7]);
	var z2=parity(bits[2]+bits[3]+bits[6]+bits[7]);
	var z1=parity(bits[1]+bits[3]+bits[5]+bits[7]);
	var z0 = parity(bits[0]+bits[1]+bits[2]+bits[3]+bits[4]+bits[5]+bits[6]+bits[7]);
    
    var errorPosition=z1*1+z2*2+z4*4;
	var errorDetected=false;
	var errors = false;
	if (errorPosition!=0) errorDetected=true;
	if (errorDetected && z0 != 0) {
		bits[errorPosition-1]=parity(bits[errorPosition-1]+1);
	}
	if (errorDetected && z0 == 0)
	{
		errors = true;
	}
	if(!errorDetected && z0!=0)
	{
		bits[0] = parity(bits[0]+1);
	}
    return { errorCorrected: errorDetected, errorPosition: errorPosition-1, bits: bits, errors: errors };
}

parity = function(number){
	return number % 2;
}

exports.decode = decode;
