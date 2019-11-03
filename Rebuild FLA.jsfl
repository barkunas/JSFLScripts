	xjsfl.init(this);
    var sourceFile = fl.getDocumentDOM();
	var isLocked = fl.getDocumentDOM().getTimeline().getLayerProperty('locked');
	// true; false
	sourceFile.getTimeline().setLayerProperty('locked', !isLocked); //false; true
	sourceFile.getTimeline().setLayerProperty('locked', isLocked); //true; false
	sourceFile.save(false);
	sourceFile.close(false);
/*	
	//--------------------------------------------------
	var comment = "rebuild";
	if (comment)
	{
		var path = fl.getDocumentDOM().path;
		pathSplit = path.split("\\");
		dir = path.replace("\\"+fl.getDocumentDOM().name, "").replace(pathSplit[0]+"\\", "");
		cmd = pathSplit[0]+" & cd \""+dir+"\"";
    
		fl.getDocumentDOM().save();
		FLfile.runCommandLine(cmd + " & svn add \""+fl.getDocumentDOM().path+"\"");
		FLfile.runCommandLine(cmd + " & svn commit \""+fl.getDocumentDOM().path+"\" -m \""+comment+"\" & timeout /t 3");
		fl.outputPanel.trace("***********************\n"+fl.getDocumentDOM().name+" saved and committed to the SVN.\nComment: "+comment+"\n***********************");
	}
	else
	{
		fl.outputPanel.trace("Cancelled");
	}
	
	//fl.getDocumentDOM().getTimeline().setLayerProperty('locked', true);
*/