# Delete

Deletes the specified item in the combo box / drop-down list content control.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the specified item in a combo box or drop-down list content control.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Count of items inside drop-down before delete: " + contentControlList.GetElementsCount());
paragraph.AddLineBreak();
listItem.Delete();
paragraph.AddText("Count of items inside drop-down after delete: " + contentControlList.GetElementsCount());
doc.AddElement(0, paragraph);
```
