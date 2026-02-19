# Redo

Reverts the user's last undone action.

## Syntax

```javascript
expression.Redo();
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

```javascript
const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.scope.text = 'The text string that we added to the document. It will remain visible after Undo and Redo calls.\n';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('Undo');
Asc.plugin.executeMethod('Redo');
```
