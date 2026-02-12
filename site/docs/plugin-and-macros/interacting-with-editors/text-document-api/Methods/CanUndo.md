# CanUndo

Checks if it is possible to undo the user's last action.

## Syntax

```javascript
expression.CanUndo();
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

```javascript
const addTextToDocument = function () {
	const doc = Api.GetDocument();
	const paragraph = doc.GetElement(0);
	paragraph.AddText(Asc.scope.text);
};

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
Asc.scope.text = 'The text string that we added to the document so that we have an action to Undo.\n';
Asc.plugin.callCommand(addTextToDocument);

Asc.plugin.executeMethod('CanUndo', [], result => console.log('Can undo: ' + result));
```
