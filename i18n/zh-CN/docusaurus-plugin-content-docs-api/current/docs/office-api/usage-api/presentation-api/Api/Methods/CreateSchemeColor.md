# CreateSchemeColor

从可用的配色方案中选择创建复杂配色方案。

## 语法

```javascript
expression.CreateSchemeColor(schemeColorId);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| schemeColorId | 必需 | [SchemeColorId](../../Enumeration/SchemeColorId.md) |  | 配色方案标识符。 |

## 返回值

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## 示例

在演示文稿中使用主题标识符创建配色方案颜色。

```javascript editor-pptx
// How do I apply a theme color to a shape in a presentation?

// Use a scheme color to fill a shape with a color from the presentation theme in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("curvedUpArrow", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
