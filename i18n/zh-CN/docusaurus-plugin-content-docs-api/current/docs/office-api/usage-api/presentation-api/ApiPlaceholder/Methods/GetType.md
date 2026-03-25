# GetType

返回占位符类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiPlaceholder](../ApiPlaceholder.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PlaceholderType](../../Enumeration/PlaceholderType.md)

## 示例

此示例获取占位符类型。

```javascript editor-pptx
// How to get a placeholder type (chart, table, etc.).

// Create a shape and get its placeholder type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Placeholder type in this shape is: "' + placeholder.GetType() + '"');
slide.AddObject(shape);

```
