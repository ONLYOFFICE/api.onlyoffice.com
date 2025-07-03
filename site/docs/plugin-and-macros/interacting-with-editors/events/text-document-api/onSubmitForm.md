# onSubmitForm

The function called when the user clicks the "Complete & Submit" button.

## Parameters

This event has no parameters.

```javascript
window.Asc.plugin.attachEditorEvent("onSubmitForm", () => {
	Asc.scope.st = "";
	this.callCommand(function() {
        let oDocument = Api.GetDocument();
		let aFormsData = oDocument.GetFormsData();
		Asc.scope.st += "event: onSubmitForm";
		Asc.scope.st += "\n";
		Asc.scope.st += "The type of the first form: " + aFormsData[0]["type"];
		Asc.scope.st += "\n";
		Asc.scope.st += "The value of the second form: " + aFormsData[1]["value"];
    }, false);
	console.log(Asc.scope.st);
});
```

