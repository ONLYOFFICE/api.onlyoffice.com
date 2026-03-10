# PixelsToPoints

将像素转换为磅。

## 语法

```javascript
expression.PixelsToPoints(px);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | 必需 | number |  | 要转换为磅的像素数。 |

## 返回值

number

## 示例

此示例展示如何将像素转换为磅。

```javascript editor-pptx
const pixels = 100;
const points = Api.PixelsToPoints(pixels);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
