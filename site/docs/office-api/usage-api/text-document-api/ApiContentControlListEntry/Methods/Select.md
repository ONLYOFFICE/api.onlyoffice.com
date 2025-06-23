# Select

Selects the list entry in the combo box / drop-down list content control and sets the text of the content control to the selected item value.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example selects the list entry in a drop-down list or combo box content control and sets the text of the content control to the value of the item.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(3);
listItem.Select();

```
