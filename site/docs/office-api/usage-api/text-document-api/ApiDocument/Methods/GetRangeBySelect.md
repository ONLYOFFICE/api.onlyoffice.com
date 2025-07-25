# GetRangeBySelect

Returns a range object by the current selection.

## Syntax

```javascript
expression.GetRangeBySelect();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get a range object by the selection.

```javascript editor-docx
// How to get the range selected on the document.

// Select a range and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("ONLYOFFICE Document Builder.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers.");
paragraph.AddElement(run2);
run1.Select();
let range = doc.GetRangeBySelect();
range.SetBold(true);
```
