var doc = fl.getDocumentDOM();

//fl.trace(typeof(doc))
fl.outputPanel.clear()

fl.trace("[")
recursive(doc);
fl.trace("]")
function recursive(doc) {
	fl.trace("{")
	for (prop in doc) {
		
		fl.trace('"' + prop + '":')
		var result = doc[prop];
		//fl.trace(includeType)
		var includeType = typeof (result)
		//fl.trace(doc[prop])
		//var isObject = includeType == "object"
		//var isArray = includeType == "array"
		//var isFucntion = includeType == "function"
		//var isString = includeType == "string"
		switch(includeType){
			case "object":
				//fl.trace('{')
				recursive(result);
				fl.trace(',')
				break;
			case "function":
				fl.trace('"'+'function' + '",');
				//fl.trace('"'+doc[prop] + '",');
				break;
			default:
				fl.trace('"'+result+ '",')
		}
	}
	fl.trace('}')
}
