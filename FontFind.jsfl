xjsfl.init(this);
fl.outputPanel.clear();
for(litem in fl.getDocumentDOM().library.items)
{
	var lib = fl.getDocumentDOM().library.items[litem];
	if (lib.timeline)
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
						if(element.elementType == "text")
						{
							var fontName = element.textRuns[0].textAttrs.face;
							fl.trace(fontName);
							if (fontName == "NeuronBlack-Italic")
							{
								element.textRuns[0].textAttrs.face = "Neuron-BlackItalic";

							}
						}
						
						
					}
				}
			}
		
		
	}
	//if(l>50) break;
	
	//for(l in lib.get)
}