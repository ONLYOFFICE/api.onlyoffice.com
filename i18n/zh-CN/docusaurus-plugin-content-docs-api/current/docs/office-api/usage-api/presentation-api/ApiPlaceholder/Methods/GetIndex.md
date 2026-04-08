# GetIndex

返回占位符索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiPlaceholder](../ApiPlaceholder.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| undefined

## 示例

此示例演示如何获取占位符索引。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let rgb = Api.CreateRGBColor(50, 100, 150);
let fill = Api.CreateSolidFill(rgb);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);

const placeholder = Api.CreatePlaceholder();
shape.SetPlaceholder(placeholder);

placeholder.SetIndex(42);
slide.AddObject(shape);

rgb = Api.CreateRGBColor(50, 100, 150);
fill = Api.CreateSolidFill(rgb);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape('rect', 300 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(0, 110 * 36000);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Placeholder index set to ' + placeholder.GetIndex());

```
