# MillimetersToEmus

将毫米转换为英制度量单位 (EMU)。
结果为整数值。

## 语法

```javascript
expression.MillimetersToEmus(mm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | 必需 | [mm](../../Enumeration/mm.md) |  | 未提供描述。 |

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

此示例展示如何将毫米转换为 EMU。

```javascript editor-pptx
const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
