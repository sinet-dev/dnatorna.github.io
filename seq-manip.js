/*  -------------------------------------------------------
	Angel Herráez, GNU GPL, 2016 
	Modified by Angel Herráez  2010, 2013, 2016
		Nothing needs translation in this file.		
	Modified by Angel Herráez  2007
		to make it compatible with DOM browsers.
--------------------------------------------------------
Based on this original:
|      COPYRIGHT (c) 1998, 2006  Attotron Biotechnologies Corporation, http://www.cybertory.org  | Funded by: NIH SBIR grant #R44 RR13645 02A2
|    Distributed under the GNU general public license: http://www.fsf.org/licensing/licenses/gpl.txt
|    Author: Robert M. Horton, Ph.D    rmhorton (AT) attotron.com
-------------------------------------------------------- */

function Seq(seqString) { // it seems this is never used
	this.revComp=revComp;
}
function revComp(s) { // --antiparallel strand
	return seqCompl(seqReverse(s));
}
function seqReverse(s) {
	// Returns reverse of given sequence (not complemented)
	return s.split("").reverse().join("");
}

function seqCompl(s) {
	// Returns complementary sequence --parallel strand
	// Uses lowercase for temporary changes
	var t = s.toUpperCase();
	t = t.replace(/[^ACGTNRYSWMKBDHV \t\n\r]/g,"x");
	t = t.replace(/A/g,"t");
	t = t.replace(/C/g,"g");
	t = t.replace(/G/g,"c");
	t = t.replace(/T/g,"a");
	t = t.replace(/N/g,"n");
	t = t.replace(/R/g,"y");
	t = t.replace(/Y/g,"r");
	t = t.replace(/S/g,"s");
	t = t.replace(/W/g,"w");
	t = t.replace(/M/g,"k");
	t = t.replace(/K/g,"m");
	t = t.replace(/B/g,"v");
	t = t.replace(/D/g,"h");
	t = t.replace(/H/g,"b");
	t = t.replace(/V/g,"d");
	return t.toUpperCase();
}

function deStick(aString) {
	return (""+aString).replace(/\|/,"").replace(/\[[^\[\]]*\]/,"");
}



/*
	Extracted from trans.htm and edited
*/
	//Translator1.htm
	// 9/23/98 ~3:20 pm
	// Changes in the string2num and num2String funcions force the use of leading "zeros".
	// global variables
var baseDNA = "ACGT";
var baseRNA = "ACGU";
var baseProt = "KNKNTTTTRSRSIIMIQHQHPPPPRRRRLLLLEDEDAAAAGGGGVVVV.Y.YSSSS.CWCLFLF"; // Amino acids in order alphabetically by codon.

function string2Num(inString, inBase) {
	// The string inBase represents the typographical symbols used to describe a number in that base, in order of increasing value
	// For, example, the normal base ten number system is described by inBase = "0123456789"; base2 is described by "01", etc.
	// inString must be composed of allowable symbols in the given number system. the number returned is in base 10.
	// This function returns a decimal number.
	var retNum = 0, i;
	for (i=0; i<inString.length; i++) {
		retNum += Math.pow(inBase.length,inString.length - i - 1 ) * ( inBase.indexOf( inString.charAt(i) ) );
	}
	return retNum;
}

function num2String(inNum,outBase,maxDigits) {
	// inNum is a base10 number
	// outBase is the string defining the counting system into which the number will be translated.
	// maxDigits =  number of digits in output, counting from 0. Used to determine number of leading zeros.
	var retString = "", reMainder = inNum, i;
	for (i=maxDigits; i>=0; i--) {
		// from most significant digit at left on down
		retString += outBase.charAt(parseInt(reMainder/Math.pow(outBase.length,i) ) );
		reMainder = parseInt(reMainder%Math.pow(outBase.length,i) )
	}
	return retString;
}

function seqVerify(inString,stringBase) {
	// Makes sure that the given string consists only of characters in the given stringbase. 
	// Gives alert message declaring that illegal characters have been removed.
	// (A.H.) Avoids alert message if illegal character is a space (too many alerts).
	var t = inString, tL = t.length, i, x, t2 = '', r = '';
	for (i=0;i<tL;i++) {
		x = t.charAt(i);
		if ( stringBase.indexOf(x) >=0 ) {
			r += x;
		} else {
			t2 += x;
		}
	}
	t2 = t2.replace(/\s/g,''); //remove spaces, tabs, etc.
	if (t2.length>0) { 
		t2 = t2.split('').join(' '); //add spacing
		warning(msg_illegalChar.replace('#', '\n' + t2 + '\n')); }
	return r;
}


function tranScribe(DNAsequence) {
	return seqVerify(DNAsequence.toUpperCase(),baseDNA).replace(/t/gi, 'u').toUpperCase();
}
function revTranScribe(RNAsequence) {
	return seqVerify(RNAsequence.toUpperCase(),baseRNA).replace(/u/gi, 't').toUpperCase();
}
function tranScribeOld(DNAsequence) {
	// This is a single-letter transliteration function
	// functions called: num2String(),string2Num()
	// global variables used: baseDNA, baseRNA
	var stringDNA = seqVerify(DNAsequence.toUpperCase(),baseDNA);
	var stringRNA = "";		// String to be returned
	for (var i=0;i<=stringDNA.length-1;i++) 
	{	stringRNA += num2String(string2Num(stringDNA.charAt(i),baseDNA), baseRNA, 0);
	}	 
	 return stringRNA;
}
function revTranScribeOld(RNAsequence) {
	var stringRNA = seqVerify(RNAsequence.toUpperCase(),baseRNA);
	var stringDNA = "";		// String to be returned
	for (var i=0;i<=stringRNA.length-1;i++) 
	{	stringDNA += num2String(string2Num(stringRNA.charAt(i),baseRNA), baseDNA, 0);
	}	 
	 return stringDNA;
}

function transLate(RNAsequence) {
	var rnaString = seqVerify(RNAsequence.toUpperCase(),baseRNA), i, rL, cL;
	var peptideString = ""		// string to be returned.
	var coDon = "123";	// Three nucleotide characters read from input string.
						// number of characters defines codon size; ALWAYS 3 characters long on planet Earth
	cL = coDon.length, rL = rnaString.length - cL;
	for (i=0; i<=rL; i=i+cL) {
		coDon = rnaString.substring(i,i+cL);
		peptideString += num2String(string2Num(coDon,baseRNA), baseProt, 0);
	}	
	return peptideString;
}
