# GetCreated

返回文档创建日期。

## 语法

```javascript
expression.GetCreated();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

此示例演示如何使用 ApiCore 设置和获取演示文稿的创建日期。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreated(new Date('20 January 2000'));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const createdDate = core.GetCreated().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
