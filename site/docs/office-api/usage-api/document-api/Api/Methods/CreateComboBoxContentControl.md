# CreateComboBoxContentControl

Creates a new combo box container with the given list of options.

## Syntax

```javascript
expression.CreateComboBoxContentControl(list, selected);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | Optional | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | An array of objects representing the items in the combo box. |
| selected | Optional | number | -1 | The selected item index. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Insert a drop-down combo box with selectable options into a document.

```javascript editor-docx
// How do I add a combo box with a list of choices to a document?

// Embed an interactive combo box that lets readers pick from predefined values in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
