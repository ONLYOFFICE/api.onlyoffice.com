# GetName

返回当前版式的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取演示文稿中布局的名称。

```javascript editor-pptx
// How do I view the layout name in a presentation?

// Display the name of a layout after assigning it a custom value in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
layout.SetName('SERENITY');

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Name of the first layout: ' + layout.GetName());
layout.AddObject(shape);
```
