fl.outputPanel.clear();
var doc = fl.getDocumentDOM();
var items = doc.library.items;
var mainOBJ = items
//fl.trace(mainOBJ);
fl.trace(document)

/*
for(d in document){
	fl.trace(d+"-------------"+document[d])
}
*/


for(p in mainOBJ){
	if(mainOBJ[p].itemType=="bitmap"){
	fl.trace("____________________________________________________")
		for(e in mainOBJ[p]){
			fl.trace(e+"--------------"+mainOBJ[p][e])
		}
		
	
	}
}















/*
//game381	Logan's Luck
for (e in items){
	//fl.trace(items[e].name)
	var name = items[e].name;
    var arrName= name.split("/");
	//fl.trace(arrName)
	var lastName = arrName[arrName.length-1];
	for(i=0;i<lastName.length;i++){
		if(lastName[i]=="↔"){
			//var tempArr = lastName.split("")
			//tempArr[i] = ""
			//lastName = tempArr.join("");
			fl.trace(items[e].name)
		}
	}
	//items[e].name = lastName;
	//items[e].name = arrName.join('/');
	//items[e].name = String(items[e].name)
	//fl.trace(items[e].name)
}
*/