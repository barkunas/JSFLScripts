var element = fl.getDocumentDOM().selection[0];
if(element=="[object Text]"){
	fl.getDocumentDOM().setTextSelection(0,0);
};
if(element=="[object Bitmap]"){
	fl.getDocumentDOM().library.selectItem(element.libraryItem.name);
};
if(element=="[object SymbolInstance]"){
	fl.getDocumentDOM().enterEditMode('inPlace');
};