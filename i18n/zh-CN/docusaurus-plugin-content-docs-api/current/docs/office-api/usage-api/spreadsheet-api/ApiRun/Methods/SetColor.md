# SetColor

设置当前文本运行的文本颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 文本颜色。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例以 RGB 格式设置当前文本运行的文本颜色。

```javascript editor-xlsx
// How to change text color.

// Create a text run object, update its font color using RGB format values.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape(
	'flowChartOnlineStorage',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(70),
	fill, stroke,
	0, Api.MillimetersToEmus(2), 0, Api.MillimetersToEmus(3)
);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText('This is a text run with the font color set to gray.');
paragraph.AddElement(run);
run.SetColor(Api.HexColor('#808080'));

```
