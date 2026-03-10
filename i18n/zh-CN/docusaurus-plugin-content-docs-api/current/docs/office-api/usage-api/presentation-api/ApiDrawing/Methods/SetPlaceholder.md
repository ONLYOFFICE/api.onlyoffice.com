# SetPlaceholder

将指定的占位符设置到当前绘图对象。

## 语法

```javascript
expression.SetPlaceholder(oPlaceholder);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPlaceholder | 必需 | [ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) |  | 占位符对象。 |

## 返回值

boolean

## 示例

此示例为形状设置占位符。

```javascript editor-pptx
// How to set a placeholder for a shape.

// Select a shape object from a slide and change its placeholder.

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
