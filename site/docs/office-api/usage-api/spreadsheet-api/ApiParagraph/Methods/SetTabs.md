# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.
- **Warning**: The lengths of aPos array and aVal array - **MUST BE** equal to each other.

Inherited from [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md).

## Example

Place custom tab stops at specific positions inside a paragraph in a spreadsheet.

```javascript editor-xlsx
// How do I align text columns using tabs at precise distances in a spreadsheet?

// Define left, center, and right tab stops so text snaps into tidy columns when a tab character is inserted in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 150 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 2880, 4320], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 2 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches right");
```
