# GetClassType

返回 ApiTextPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textPr"

## 示例

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-xlsx
// How to get a class type of ApiTextPr.

// Get a class type of ApiTextPr and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph.SetJc("left");
let classType = textProps.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
```
