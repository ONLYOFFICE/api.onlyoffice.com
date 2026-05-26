# GetSelection

返回当前演示文稿中的选择。

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSelection](../../ApiSelection/ApiSelection.md)

## 示例

检索演示文稿中当前选定的对象或文本。

```javascript editor-pptx
// How do I access the selected content in a presentation in a presentation?

// Read the properties of selected elements in a presentation.

const presentation = Api.GetPresentation();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 10 * 36000, fill, stroke);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.Select();

const selection = Api.GetSelection();
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Type: ' + selection.GetType());
```
