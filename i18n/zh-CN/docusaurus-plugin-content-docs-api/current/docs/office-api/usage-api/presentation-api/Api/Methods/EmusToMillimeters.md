# EmusToMillimeters

将英制度量单位 (EMU) 转换为毫米。

## 语法

```javascript
expression.EmusToMillimeters(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位 (EMU) 为单位的值。 |

## 返回值

[mm](../../Enumeration/mm.md)

## 示例

在演示文稿中将 EMU 转换为毫米。

```javascript editor-pptx
// How can I convert between emus and millimeters for object sizing in a presentation?

// Transform measurement values to display size equivalents in a presentation.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
