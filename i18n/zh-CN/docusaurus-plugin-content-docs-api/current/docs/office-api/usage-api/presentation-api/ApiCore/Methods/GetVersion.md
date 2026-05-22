# GetVersion

返回文档版本。

## 语法

```javascript
expression.GetVersion();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

设置和检索演示文稿的版本。

```javascript editor-pptx
// How do I get the version of a presentation in a presentation?

// Retrieve and display the version as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetVersion("v9.0");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const version = core.GetVersion();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Version: " + version);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
