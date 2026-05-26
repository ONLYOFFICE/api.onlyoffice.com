# GetModified

返回文档最后修改的日期。

## 语法

```javascript
expression.GetModified();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

设置和查看演示文稿的最后修改日期。

```javascript editor-pptx
// How do I find when a presentation was last changed?

// Retrieve the timestamp of the most recent edit in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetModified(new Date("10 March 1990"));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedDate = core.GetModified().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
