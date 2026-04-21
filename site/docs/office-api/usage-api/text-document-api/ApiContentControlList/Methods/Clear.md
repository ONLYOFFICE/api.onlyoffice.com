# Clear

Clears a list of values of the combo box / drop-down list content control.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Clear the list of values of combobox/listbox in a document.

```javascript editor-docx
// How to clear for a content control list in a document?

// Clear and display the result in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
contentControlList.Clear();
```
