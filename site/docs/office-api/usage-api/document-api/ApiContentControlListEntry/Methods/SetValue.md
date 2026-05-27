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

Assign a new underlying value to a dropdown or combo box list entry in a document.

```javascript editor-docx
// How do I change the stored value of a list item in a document?

// Update the programmatic value of an entry independently of its display label in a document.

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
