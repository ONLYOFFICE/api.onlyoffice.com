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

获取演示文稿中幻灯片的高度（英制度量单位）。

```javascript editor-pptx
// Retrieve the slide height using GetHeight and display the measurement on the slide.

// Convert the height value from EMUs to millimeters for display.

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
