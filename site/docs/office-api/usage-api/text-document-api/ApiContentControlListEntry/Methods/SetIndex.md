# SetIndex

Sets an index to the content control list item in the combo box / drop-down list content control.

## Syntax

```javascript
expression.SetIndex(nIndex);
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | An index of the content control list item. |

## Returns

boolean

## Example

This example sets the index of a content control list item in the collection of list items.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
paragraph = Api.CreateParagraph();
let firstItem = contentControlList.GetItem(0);
let secondItem = contentControlList.GetItem(1);
let text = firstItem.GetText();
paragraph.AddText("Text of the first item: " + text);
secondItem.SetIndex(0);
firstItem = contentControlList.GetItem(0);
text = firstItem.GetText();
paragraph.AddText("\nText of the first item after change index: " + text);
doc.AddElement(0, paragraph);
```
