# SetSizes

设置当前演示文稿的大小。

## 语法

```javascript
expression.SetSizes(nWidth, nHeight);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的演示文稿宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位表示的演示文稿高度。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置当前演示文稿的大小。

```javascript editor-pptx
// How to specify the sizes of the current presentation.

// Set the width and height of the ApiPesentation object.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The size of this presentation was changed: width - 254 mm, height - 190 mm.");
slide.AddObject(shape);

```
