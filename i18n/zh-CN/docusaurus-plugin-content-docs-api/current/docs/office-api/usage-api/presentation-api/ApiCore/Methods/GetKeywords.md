# GetKeywords

返回文档关键字。

## 语法

```javascript
expression.GetKeywords();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何使用 ApiCore 设置和获取当前演示文稿的关键字字符串。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetKeywords("Example; ApiCore; Presentation");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const keywords = core.GetKeywords();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Keywords: " + keywords);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
