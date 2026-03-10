# GetSubject

返回文档主题。

## 语法

```javascript
expression.GetSubject();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何设置和获取当前演示文稿的主题。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetSubject("ApiCore Method Showcase");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const subject = core.GetSubject();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Subject: " + subject);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
