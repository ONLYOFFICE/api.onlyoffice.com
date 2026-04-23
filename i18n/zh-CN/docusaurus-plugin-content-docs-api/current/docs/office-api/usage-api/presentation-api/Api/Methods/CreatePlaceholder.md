# CreatePlaceholder

创建新的占位符。

## 语法

```javascript
expression.CreatePlaceholder(sType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | string |  | 占位符类型（"body"、"chart"、"clipArt"、"ctrTitle"、"diagram"、"date"、"footer"、"header"、"media"、"object"、"picture"、"sldImage"、"sldNumber"、"subTitle"、"table"、"title"）。 |

## 返回值

[ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md)

## 示例

此示例演示如何为形状创建占位符。

```javascript editor-pptx
// How to change a placeholder type of an object.

// Add a placeholder to the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const placeholder = Api.CreatePlaceholder("picture");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);

```
