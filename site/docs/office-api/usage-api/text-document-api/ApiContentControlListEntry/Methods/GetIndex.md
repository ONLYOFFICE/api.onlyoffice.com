# GetIndex

Returns an index of the content control list item in the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the index of a content control list item in the collection of list items.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let paragraph = Api.CreateParagraph();
let contentControlItem = contentControlList.GetItem(1);
let index = contentControlItem.GetIndex();
paragraph.AddText("Index of the content control list entry:" + index);
doc.AddElement(0, paragraph);
```
