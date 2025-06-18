# MoveDown

Moves the current item in the parent combo box / drop-down list content control down one element, so that it is after the item that originally followed it.

## Syntax

```javascript
expression.MoveDown();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example moves an item in a drop-down list or combo box content control down one item, so that it is after the item that originally followed it.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
listItem.MoveDown();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);

```
