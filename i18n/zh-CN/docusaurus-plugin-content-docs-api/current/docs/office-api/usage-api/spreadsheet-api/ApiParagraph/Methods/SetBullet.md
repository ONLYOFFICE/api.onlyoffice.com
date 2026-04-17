# SetBullet

设置当前段落的项目符号或编号。

Inherited from [ApiParaPr.SetBullet](../../ApiParaPr/Methods/SetBullet.md).

## 示例

此示例设置当前段落的项目符号或编号。

```javascript editor-xlsx
// How to add a dash bullet to the paragraph.

// Numbering and adding custom bullet points to the text.

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

