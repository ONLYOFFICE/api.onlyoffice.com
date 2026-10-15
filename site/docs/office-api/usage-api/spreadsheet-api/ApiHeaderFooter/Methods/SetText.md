# SetText

Sets the text of this header or footer section, preserving the other two sections.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents an [ApiHeaderFooter](../ApiHeaderFooter.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The section text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Set the text of a header or footer section when printing in a spreadsheet.

```javascript editor-xlsx
// How do I put the page number in the even-pages center header in a spreadsheet?

// Give a header/footer section its own text (with formatting codes) when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let centerHeader = pageSetup.GetEvenPage().GetCenterHeader();
centerHeader.SetText("Even page &P");
```
