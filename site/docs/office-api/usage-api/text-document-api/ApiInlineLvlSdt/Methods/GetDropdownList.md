# GetDropdownList

Returns a list of values of the combo box / drop-down list content control.

## Syntax

```javascript
expression.GetDropdownList();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiContentControlList](../../ApiContentControlList/ApiContentControlList.md)

## Example

This example retrieves the drop-down list from a content control.

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreateDropDownListContentControl([{display: 'one', value: '1'}, {display: 'two', value: '2'}], 1);
let paragraph = Api.CreateParagraph();
let contentControlList = cc.GetDropdownList();
paragraph.AddText("Class Type = " + contentControlList.GetClassType());
doc.Push(paragraph);
```
