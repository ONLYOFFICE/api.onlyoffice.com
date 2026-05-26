# GetClassType

返回 ApiRun 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

"run"

## 示例

读取文本运行的类类型并在电子表格中形状内显示。

```javascript editor-xlsx
// How do I find out what type of object a text run is in a spreadsheet?

// Confirm the kind of element a run represents by checking its type label in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let classType = run.GetClassType();
run.SetFontSize(30);
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
```
