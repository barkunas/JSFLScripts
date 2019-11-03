//fl.outputPanel.clear();
var doc = fl.getDocumentDOM()
//fl.trace(numObject);
doc.selectAll();
var len = doc.selection.length
//fl.trace(len);
var tx = doc.viewMatrix.tx
var ty = doc.viewMatrix.ty
var numObject;
if ( numObject==undefined){
	numObject = 0
}
else {
	numObject = ++numObject 
}
//fl.trace(numObject);
if ( numObject>=len){
	numObject = 0;
}
var sceneObject = doc.selection[numObject];
var ox = sceneObject.x+tx;
var oy = sceneObject.y+ty;
doc.selectNone();
//fl.trace(ox+"---"+oy);
fl.getDocumentDOM().mouseClick({x:ox, y:oy}, false, true);