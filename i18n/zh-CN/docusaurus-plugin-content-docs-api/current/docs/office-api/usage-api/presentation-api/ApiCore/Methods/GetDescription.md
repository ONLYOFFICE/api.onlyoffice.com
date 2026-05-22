# GetDescription

返回文档描述。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

设置和检索演示文稿中的摘要文本。

```javascript editor-pptx
// How do I access the description of a presentation?

// Read the descriptive text associated with a presentation in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetDescription("This is a sample presentation made to help fellow users understand how to use the ApiCore methods.");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const description = core.GetDescription();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Description: " + description);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
