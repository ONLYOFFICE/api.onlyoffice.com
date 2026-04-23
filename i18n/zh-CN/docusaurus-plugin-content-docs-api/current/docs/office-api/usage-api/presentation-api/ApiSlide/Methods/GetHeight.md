# GetHeight

返回以英制单位表示的幻灯片高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

此示例展示如何获取以英制单位表示的幻灯片高度。

```javascript editor-pptx
// How to find a slide's height and display it on the slide.

// Get a height ofthe  ApiSlide object and show it in the slide.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);

const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const slideHeight = slide.GetHeight();
paragraph.AddText("The slide height = " + slideHeight / 36000 + " mm");
slide.AddObject(shape);

```
