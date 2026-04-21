# GetCreator

返回文档作者。

## 语法

```javascript
expression.GetCreator();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在演示文稿中使用核心属性设置和获取当前演示文稿的创建者。

```javascript editor-pptx
// How do I get the creator in a presentation?

// Get the creator using a core properties object in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreator("John Smith");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const creator = core.GetCreator();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Creator: " + creator);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
