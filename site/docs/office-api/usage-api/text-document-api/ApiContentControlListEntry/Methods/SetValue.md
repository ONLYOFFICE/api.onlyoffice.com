# SetValue

Sets a String that represents the value of a list item for the combo box / drop-down list content control.

## Syntax

```javascript
expression.SetValue(sValue);
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | Required | string |  | The value of a list item. |

## Returns

boolean

## Example

This example sets a string that represents the display text of a list item for a drop-down list or combo box content control.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}]);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(2);
listItem.SetValue("Home");
listItem.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("Value of third item in list: " + listItem.GetValue());
doc.AddElement(0, paragraph);
```
