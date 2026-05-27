# Add

Adds a new value to the combo box / drop-down list content control.

## Syntax

```javascript
expression.Add(sText, sValue, nIndex);
```

`expression` - A variable that represents a [ApiContentControlList](../ApiContentControlList.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The display text for the list item. |
| sValue | Required | string |  | The list item value. By default is equal to sText parameter |
| nIndex | Optional | number | -1 | A position where a new value will be added. If nIndex=-1 add to the end. |

## Returns

boolean

## Example

Add a new entry to a combo box dropdown list in a document.

```javascript editor-docx
// How do I insert an item at a specific position in a dropdown list in a document?

// Expand the available choices in a combo box by inserting a new option at a chosen index in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
contentControlList.Add("Venus", "planet2", 1);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
```
