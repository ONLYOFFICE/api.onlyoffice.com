# CreateRun

创建要插入到当前段落或表格中的新的较小文本块。

## 语法

```javascript
expression.CreateRun();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

向电子表格中形状内的段落添加独立样式的文本段。

```javascript editor-xlsx
// How do I insert multiple text pieces with different formatting into one paragraph in a spreadsheet?

// Build a paragraph from separate text portions so each portion can carry its own style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
```
