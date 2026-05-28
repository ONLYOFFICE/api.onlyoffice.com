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

Shift a dropdown or combo box list entry one position lower in a document.

```javascript editor-docx
// How do I move a list item down in a dropdown control in a document?

// Reorder entries by pushing an item toward the end of the list when adjusting option priority in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
listItem.MoveDown();
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
```
