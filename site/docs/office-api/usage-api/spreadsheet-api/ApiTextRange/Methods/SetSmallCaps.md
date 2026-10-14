# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean \| null |  | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. Pass *null* to remove the small capitals. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Display the text of a range in small capitals in a shape on a worksheet.

```javascript editor-xlsx
// The formatting applies to the covered fragment only.

// Show the first word in small capitals.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetSmallCaps(true);
```
