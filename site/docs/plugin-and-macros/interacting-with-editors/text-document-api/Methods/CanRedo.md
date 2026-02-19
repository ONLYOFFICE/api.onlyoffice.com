# CanRedo

Checks if it possible to revert the user's last undone action.

## Syntax

```javascript
expression.CanRedo();
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

Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));

Asc.scope.text = 'The text string that we added to the document.\n';
Asc.plugin.callCommand(addTextToDocument);
Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));

Asc.plugin.executeMethod('Undo');
Asc.plugin.executeMethod('CanRedo', [], result => console.log('Can redo: ' + result));
```
