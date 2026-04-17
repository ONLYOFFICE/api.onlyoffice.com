# GetParentSheet

返回当前绘图的父工作表。

Inherited from [ApiDrawing.GetParentSheet](../../ApiDrawing/Methods/GetParentSheet.md).

## 示例

此示例演示如何获取绘图的父工作表。

```javascript editor-xlsx
// How to know a parent sheet of a shape.

// Get a shape's parent sheet and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let parentSheet = shape.GetParentSheet();
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Parent sheet name is " + parentSheet.GetName());
```

