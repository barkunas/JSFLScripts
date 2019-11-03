//swap bitmaps in one movie clip
fl.outputPanel.clear();
var doc = fl.getDocumentDOM();
var mainItem = doc.selection[0];
/*
for(m in mainItem.matrix){
	fl.trace(m+"---"+mainItem.matrix[m]);
};
*/
var mainMat = mainItem.matrix;
doc.resetTransformation();
converttoSymbolselected();
var mainLibraryItem = doc.selection[0];
var exceptionSymbol = doc.selection[0].libraryItem.name;
fl.trace("-----------"+mainItem.libraryItem.name);
mainLibraryItem.matrix = mainMat;
for(litem in doc.library.items)
{
	var lib = doc.library.items[litem];
	//fl.trace(lib.name+"---------------"+exceptionSymbol);
	if (lib == "[object SymbolItem]"&&lib.name!=exceptionSymbol)
	{
		for (l in lib.timeline.layers)		
			{
				var layer = lib.timeline.layers[l];
				for (f in layer.frames)
				{
					
					var frame = layer.frames[f];
					for (e in frame.elements)
					{
						var element = frame.elements[e];
						//fl.trace(element.libraryItem.name);
						
						if(element == "[object Bitmap]"&&element.libraryItem.name==mainItem.libraryItem.name)
						{
							//fl.trace(element.libraryItem.name+"--------------"+f);
							
							fl.getDocumentDOM().library.selectItem(lib.name);
							fl.getDocumentDOM().library.editItem();
							//fl.getDocumentDOM().getTimeline().setSelectedFrames([]);
							fl.trace(f)
							fl.getDocumentDOM().getTimeline().setSelectedFrames(Number(f),Number(f));
							fl.getDocumentDOM().mouseClick({x:element.x, y:element.y}, false, true);
							
							





							
						}
					}
				}
			}
	}

}
function setMatrixAndSwap(swapElement){
	tempMatrix = element.matrix
	
}
function converttoSymbolselected(){
doc.convertToSymbol('movie clip', '', 'top left');
var lib = doc.library;
if (lib.getItemProperty('linkageImportForRS') == true) {
lib.setItemProperty('linkageImportForRS', false);
}
else {
lib.setItemProperty('linkageExportForAS', false);
lib.setItemProperty('linkageExportForRS', false);
}
lib.setItemProperty('scalingGrid',  false);

};
//fl.getDocumentDOM().swapElement('Symbol 9');
//fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true, 'others');
//fl.getDocumentDOM().library.addItemToDocument({x:2639.9, y:1966.9});
