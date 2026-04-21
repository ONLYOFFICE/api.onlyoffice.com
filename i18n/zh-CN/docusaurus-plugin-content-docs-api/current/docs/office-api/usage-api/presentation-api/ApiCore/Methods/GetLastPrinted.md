# GetLastPrinted

返回文档最后打印的日期。

## 语法

```javascript
expression.GetLastPrinted();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

在演示文稿中设置和获取当前演示文稿的最后打印日期。

```javascript editor-pptx
// How can I get last printed using a core properties in a presentation?

// Get last printed for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastPrinted(new Date());

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastPrintedDate = core.GetLastPrinted().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
