# Undo

Undoes the user's last action.

## Syntax

```javascript
expression.Undo();
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

Asc.scope.text = 'The text string that we first added to the document.';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('Undo');

Asc.scope.text = 'And the second one, which is the only one that will remain visible after calling Undo method.';
Asc.plugin.callCommand(addTextToDocument);
```
