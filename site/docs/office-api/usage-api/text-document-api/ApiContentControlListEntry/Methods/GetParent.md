# GetParent

Returns a parent of the content control list item in the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiContentControlList](../../ApiContentControlList/ApiContentControlList.md)

## Example

This example shows how to get the parent of a content control list item in the collection of list items.

```javascript editor-docx playground
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let item = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let contentControl = item.GetParent();
paragraph.AddText("Class of item list item parent: " + contentControlList.GetClassType());
doc.AddElement(0, paragraph);
```
