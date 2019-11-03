fl.outputPanel.clear();
fl.outputPanel.clear();
for(litem in fl.getDocumentDOM().library.items)
{
	var lib = fl.getDocumentDOM().library.items[litem];
	
	if (lib == "[object SymbolItem]")
	{
		var nn = 0;
		var l = 0;
		for (l in lib.timeline.layers)		
			{
				
				var layer = lib.timeline.layers[l];
				
				
				
				//fl.trace(layer.name.indexOf("jp")==0);
				//fl.trace(layer.name);
				/*
				if (layer.name.indexOf("jp")==0){
					fl.trace(l)
					fl.getDocumentDOM().library.editItem(lib.name);
					fl.getDocumentDOM().selection = [fl.getDocumentDOM().getTimeline().layers[l].frames[0]];
					dom=fl.getDocumentDOM()
					timeline=dom.getTimeline()
					selectedLayers=timeline.getSelectedLayers()
					if(selectedLayers.length > 0){
						selectedLayerIndex=selectedLayers[0]
						selectedLayer=timeline.layers[selectedLayerIndex]
						timeline.setSelectedLayers(selectedLayerIndex,true)
						timeline.copyFrames()
						newLayerIndex=timeline.addNewLayer(selectedLayer.name,selectedLayer.layerType,true)
						timeline.setSelectedLayers(newLayerIndex,true)
						timeline.pasteFrames()
						timeline.setLayerProperty('name', 'ym:Layer'+l)
					}
					l+=2


										
				}
				*/
				
				
			}
		
		
	}
}





/*
fl.getDocumentDOM().getTimeline().duplicateLayers();
fl.getDocumentDOM().getTimeline().addNewLayer();
fl.getDocumentDOM().getTimeline().pasteLayers();
fl.getDocumentDOM().getTimeline().setLayerProperty('name', 'jp:Layer 3 copy 91');
fl.getDocumentDOM().library.editItem();

fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true, 'others');


*/