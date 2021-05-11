/*-------------------------------------------------------
|	Written by Angel Herráez  2010
|    Distributed under the GNU general public license:
|     http://www.fsf.org/licensing/licenses/gpl.txt
|	Allows localization.
|	Modified by Angel Herráez  2013, 2016, 2018, 2019
--------------------------------------------------------*/

var lang = 'en';

// Messages in common.js 
var msg_needsFrames = "This page only works properly as part of a frameset. " +
		"Please go to the <a href='start.htm'>home page</a>.";
var msg_passwordHelp = "If the system requires a password, your instructor will provide it to you."+
	"\n\nIf you are using the laboratory on your own, please contact XX to obtain a password.";
var msg_webMasterHelp = "Just kidding! We really have no webmaster.\n In real life, write to XX";

// Messages in load.js  &  ingred.js
var msg_labelBuff = "10x buff";
var msg_buff = "buffer";
var msg_labelPCRmix = "PCR mix";
var msg_labelWat = "water";

// Messages in lab-tubes.js 
var microL = String.fromCharCode(32,956,8467);	// " µl"
var msg_noTip = "If you try pipetting without a tip\nyou will damage the pipette's mechanism.";
var msg_newTip = "Please eject the old tip before getting a new one.";
var msg_bench = "Please don't pipet all over the bench!";
var msg_contaminW = "Please don't contaminate the stock of water!";
function msg_overfill(tubeCapacity,oldVolume,pipetedVolume) {
	return "The tube capacity is " + tubeCapacity + microL +
		".\nThere are " + oldVolume + " and you have tried to add " + pipetedVolume + "." +
		"\nSince the tube would overflow, nothing has been added.";	
}
function msg_notEnough(volume) {
	if (volume==0) { return "Tube is empty."; }
	if (volume==1) { return "There is only 1" + microL + " left in the tube."; }
	if (volume==-1) { return "There is not so much left in the tube."; }
	return "There are only " + volume + microL + " left in the tube."; 
}
var msg_noVolChange = "You can't change the volume while the tip has some liquid";
var msg_incubate = "incubate";
var msg_terminate = "finish";
var msg_tooComplex = "This experiment is becoming too complex.\n   START OVER.";
var msg_UV = "The µUV reader only acepts 1 µL samples";
var msg_clearTubes = "Please confirm:\nThe contents of tubes 1 to 12 will be lost";
var txt_clearTubes = {
	tit: 'Get fresh tubes',
	p: 'Please confirm:<br>The contents of selected tubes will be lost',
	allT: 'Discard all tubes',
	selT: 'Discard just the tubes selected',
	cnc: 'cancel'
}

// Messages in  enzymes.js
var msg_chooseEnz = "choose an enzyme";

// Messages in  re.js  &  pcr.js
var msg_units = "Units";
function msg_maxDepth(n) { return "Only positions for the first " + n + " matches have been calculated."; }
function msg_noReactionRE(n) { return "Restriction reaction has not worked in tube " + n + " because the suitable buffer was not added."; }
function msg_noReactionPCR(n) { return "PCR reaction has not worked in tube " + n + " because the necessary reagents were not added (`PCR mix´, with Taq DNA polymerase and nucleotides)."; }
var msg_maxNrEnz = "The incubation function works with a maximum of 12 enzymes";
var msg_maxNrSTR = "It is only possible to work with a maximum of 12 markers";
function msg_confirmDigestion(nTube,msg) { return "DNA in tube " + nTube + " has been digested with" + msg; }
function msg_confirmPCR(nTube,msg) { return "DNA in tube " + nTube + " has been amplified with primers for" + msg + "."; }
var msg_noRE = "But no restriction enzyme was added!";
var msg_noSTR = "But no primer was added!";
var msg_endTime = "Incubation is over.";

// Messages in  gel.js 
var msg_bandInfo1 = "Lane # XX, band # XX.";
var msg_bandInfo2 = "Has migrated XX mm.";
var msg_bandInfo3 = "Contains XX pmol DNA.";
var msg_bandInfo4 = "Size: XX pb.";
var msg_bandInfo5 = "Intensity: XX fluo.u.";
var msg_emptyWells = "You forgot to load samples into the wells.";
var msg_timerZero = "Electrophoresis cannot begin since the timer is at zero.";
var msg_uvWarning = "CAUTION! Ultraviolet light. Wear eye and skin protection.";

// Messages in  gel.js  and  seq-gel.js 
var msg_switchOn = "switch on";
var msg_switchOff = "switch off";

// Messages in  seq-gel.js 
var msg_noPrimerSeq = "You must provide the primer sequence.";
var msg_writeSeq = "type its sequence here";
var msg_badSeq = "The given primer sequence is not a correct DNA sequence.";
var msg_warnRadio = "CAUTION! radioactive material";
var msg_warnLaser = "CAUTION! laser is on";
function msg_these(n) { return "these " + n; } //as in 'these 3'
function msg_the(n) { return "the " + n; } //as in 'the 3'

// Messages in  gelPhoto.js 
var msg_takePhotoA = "take a picture";
var msg_takePhotoT = "click to take a snapshot of the gel";
var msg_photoTip = 'right-click to save or copy this image';

// Messages in  ingred.js
var msg_fillForm = "Buffer concentration must be a number: ";
var msg_upLoadChanges = [
	"Please make sure that all fields have an allowed value.", 
	"All tubes where a buffer concentration is set must have a nonzero volume.\nPlease remove buffer or type a correct volume value for tube number XX",
	"If you type data into this table, you will overwrite the current tube contents, including any restriction or PCR reactions you may have run. Do you really want to make these changes?",
	"Error! setNum > 6! This should never happen",
	"Changes have been made to the tube ccontents." 
];
var msg_autoBuffer = "Concentrations in all non-empty tubes have been set to 1x.";
var msg_autoVol = "Content of the following tubes has been concentrated to XX microlitres:";
var msg_writeVolRow = "Total volume (&micro;l)";
var msg_nAssay = "nr. of assay:";
var msg_ingred = "ingredient:";

// Messages in  order.js 
var msg_enterPassw = "Type the password for your customer account:";
var msg_verifyPassw = "Please make sure to type into the form the correct password for your customer account.";
var msg_errorAccount = "Error in the server while trying to read data for your account.";
var msg_chooseDNA = "You must choose a DNA sample.";
var msg_chooseRE = "You must choose four enzymes.";
var msg_ref = "ref.";
var msg_promotionRE = "Special promotion: 30% discount when you buy 4 enzymes:";
var msg_promotionPCR = "PCRmix promotion:";
var msg_limitSTR = "Right now, only up to ## STR markers may be analyzed simultaneously.\nYou must reduce the number of boxes checked.";
var msg_limitPCR = "Right now, only up to ## primer pairs may be analyzed simultaneously.\nYou must reduce the number of boxes checked.";
var msg_fatherIs = "Father is n. XX";
var msg_crimeIs = "Perpetrator is n. XX";
var txt_motherID = "M";
var txt_fatherID = "F";
var txt_childID = "C";
var txt_crimeID = "Crime";
var txt_suspectID = "S";
var txt_dairyID = ["100% sheep", "sheep + 12% cow", "sheep + 25% cow", "100% goat", "goat + 25% cow", "goat + 25% cow"];

// Messages in  thanks-order.js 
var msg_batch = " (batch # ##)";
var msg_thanks = "Thank you, ##, ";
var msg_qualCtrl = "Quality control code for your order is ## (You will need this code if you wish to do the self-assessment)";

// Messages in  str-decode.js 
var msg_father = "Father";
var msg_mother = "Mother";
var msg_child = "Child";
var msg_suspect = "Suspect";

// Messages in  seq-manip.js 
var msg_illegalChar = "These characters: # are not allowed and will be removed from the input sequence.";

// Messages in  pcr-sim.js 
var msg_PCRprod = [
	"PCR products:",
	"Product nr. #",
	"yield:"
];
var msg_PCRchooseTempl = "Choose a template";

// Messages in  primers-data.js 
var msg_amplifiesOne = "amplifies a fragment only in the ## allele of the $$ gene";
var msg_amplifiesAll = "amplifies an identical fragment in all alleles of the $$ gene";
var msg_amplifiesBos = "amplifies a region in bovine mtDNA (<em>Bos taurus</em>)";
var msg_amplifiesOvis = "amplifies a region in ovine mtDNA (<em>Ovis aries</em>)";
var msg_amplifiesCapra = "amplifies a region in caprine mtDNA (<em>Capra hircus</em>)";

// Messages in  catalog.htm (via common.js)
var cat = {
		isNew: ' New!', 
		isOpt: ' Optimised with a new design',
		primer5: '5&prime; primer',
		primer3: '3&prime; primer',
		direct: 'Direct',
		revers: 'Reverse'
}
