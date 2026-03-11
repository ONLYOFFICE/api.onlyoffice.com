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
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例以 RGB 格式设置当前文本运行的文本颜色。

```javascript editor-pptx
// How to change text color.

// Create a new text run and change its font color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(40),
	fill, stroke
);
shape.SetPosition(Api.MillimetersToEmus(10), Api.MillimetersToEmus(20));

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('This is a text run with the font color set to light blue.');
paragraph.AddElement(run);
run.SetColor(Api.HexColor('#aad3ff'));
slide.AddObject(shape);

```
