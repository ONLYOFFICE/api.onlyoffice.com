# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | 必需 | [twips](../../Enumeration/twips.md) |  | 以二十分之一磅（1/1440 英寸）为单位测量的文本间距值。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例设置以二十分之一磅为单位测量的文本间距。

```javascript editor-xlsx
// How to set the text spacing size.

// Create a text run object, update its spacing.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSpacing(80);
run.AddText("This is a text run with the text spacing set to 4 points (20 twentieths of a point).");
paragraph.AddElement(run);
```
