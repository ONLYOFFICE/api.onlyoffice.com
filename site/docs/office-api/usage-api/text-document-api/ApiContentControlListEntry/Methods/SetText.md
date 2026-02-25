# SetText

Sets a String that represents the display text of a list item for the combo box / drop-down list content control.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents a [ApiContentControlListEntry](../ApiContentControlListEntry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The display text of a list item. |

## Returns

boolean

## Example

This example sets a string that represents the display text of a list item for a drop-down list or combo box content control.

```javascript editor-docx playground
let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
let contentControlList = cc.GetDropdownList();
paragraph.Push(cc);
let listItem = contentControlList.GetItem(1);
listItem.SetText("Saturn");
listItem.Select();
```
