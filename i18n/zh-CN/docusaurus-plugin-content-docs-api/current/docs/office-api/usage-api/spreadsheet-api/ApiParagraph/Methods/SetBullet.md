# SetBullet

设置当前段落的项目符号或编号。

继承自 [ApiParaPr.SetBullet](../../ApiParaPr/Methods/SetBullet.md)。

## 示例

为电子表格中的当前段落设置项目符号或编号。

```javascript editor-xlsx
// How to add a dash bullet to the paragraph in a spreadsheet.

// Numbering and adding custom bullet points to the text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
let bullet = Api.CreateBullet("-");
paraPr.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
```
