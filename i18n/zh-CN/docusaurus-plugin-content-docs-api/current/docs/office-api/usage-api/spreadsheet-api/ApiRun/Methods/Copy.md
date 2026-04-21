# Copy

创建当前文本块的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在电子表格中创建 run 的副本。

```javascript editor-xlsx
// How to create a text run object and its copy in a spreadsheet.

// Create an text run and its copy and add it into paragraph in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run);
let copyRun = run.Copy();
paragraph.AddElement(copyRun);
```
