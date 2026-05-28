# CreateDropDownListContentControl

Creates a new drop-down list container with the given list of options.

## Syntax

```javascript
expression.CreateDropDownListContentControl(list, selected);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| list | Optional | [ContentControlListItem](../../Enumeration/ContentControlListItem.md)[] |  | An array of objects representing the items in the drop-down list. |
| selected | Optional | number | -1 | The selected item index. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Add a drop-down list field with selectable options to a document.

```javascript editor-docx
// How do I insert a drop-down list field into a document?

// Give readers a fixed set of choices by embedding a drop-down list control in a document.

let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
