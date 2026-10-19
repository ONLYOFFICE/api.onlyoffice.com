# SetVertAlign

Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text: **"baseline"** - the characters in the current text Range will be aligned by the default text baseline. **"subscript"** - the characters in the current text Range will be aligned below the default text baseline. **"superscript"** - the characters in the current text Range will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(type);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "baseline" \| "subscript" \| "superscript" \| null |  | The vertical alignment type applied to the text contents. Pass *null* to remove the vertical alignment. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Raise the text of a range above the baseline in a shape on a worksheet.

```javascript editor-xlsx
// Superscript and subscript are both set through this method.

// Turn the trailing digit into a superscript.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc2");

let range = shape.GetTextRange();

range.GetRange(4, 5).SetVertAlign("superscript");
```
