//The example, templete javascript to create hello worl desklet
//Can be used as the prototype for other desklets


//Declare constant variable, cannnot be changed thus used for importing libraries

//Desklet Ui library 
const Desklet = imports.ui.desklet;

//Desklet St libarary for creation of simple GI
const St = imports.gi.St;

function Hello_World(metadata, desklet_id) {
	this._init(metadata, desklet_id);
}

