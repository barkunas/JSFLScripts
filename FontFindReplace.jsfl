fl.outputPanel.clear();
for(litem in fl.getDocumentDOM().library.items)
{
	var lib = fl.getDocumentDOM().library.items[litem];
	
	if (lib == "[object SymbolItem]")
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
							
							if (fontName == "Neuron-Regular")
							{
								element.textRuns[0].textAttrs.face = "Neuron";

							}
							if (fontName == "Neuron-ExtraBold")
							{
								element.textRuns[0].textAttrs.face = "NeuronExtraBold";
							}
							if (fontName == "Neuron-DemiBold")
							{
								element.textRuns[0].textAttrs.face = "NeuronDemiBold";
							}
							if (fontName == "Neuron-BoldItalic")
							{
								element.textRuns[0].textAttrs.face = "NeuronBold-Italic";
							}
							if (fontName == "Neuron-Black")
							{
								element.textRuns[0].textAttrs.face = "NeuronBlack";
							}
							if (fontName == "Neuron-BlackItalic")
							{
								element.textRuns[0].textAttrs.face = "NeuronBlack-Italic";
							}
							if (fontName == "Neuron-Heavy")
							{
								element.textRuns[0].textAttrs.face = "NeuronHeavy";
							}
						}
						
						
					}
				}
			}
		
		
	}
}
/*
плохие шрифты
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-ExtraLight');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-ExtraLightItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Light');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-LightItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Regular');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-DemiBold');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-DemiBoldItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Bold');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-BoldItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-ExtraBold');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-ExtraBoldItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Black');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-Heavy');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-HeavyItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-BlackItalic');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron-BlackItalic');
//////////////////////////////////
хорошие шрифты
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraBold');
fl.getDocumentDOM().setElementTextAttr('face', 'Neuron');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronBlack-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronBlack');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronBold-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronBold');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronDemiBold');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronDemiBold');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronDemiBold-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronDemiBold-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraBold-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraBold');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronExtraLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronHeavy-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronHeavy-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronHeavy');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronHeavy-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronLight');
fl.getDocumentDOM().setElementTextAttr('face', 'NeuronLight-Italic');
fl.getDocumentDOM().setElementTextAttr('face', 'NiagaraEngraved-Reg');
fl.getDocumentDOM().setElementTextAttr('face', 'NiagaraEngraved-Reg');
*/