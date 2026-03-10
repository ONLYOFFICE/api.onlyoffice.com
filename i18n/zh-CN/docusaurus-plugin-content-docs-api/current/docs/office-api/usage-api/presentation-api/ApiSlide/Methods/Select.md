# Select

选择当前幻灯片。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

This example selects the current slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();
const slide2 = slide1.Copy();
presentation.AddSlide(slide2);

const fill1 = Api.CreateSolidFill(Api.RGB(222, 190, 190));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape('rect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill1, stroke1);
shape1.GetContent().GetElement(0).AddText('This slide will not be selected.');
slide1.AddObject(shape1);

const fill2 = Api.CreateSolidFill(Api.RGB(190, 215, 222));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const shape2 = Api.CreateShape('rect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill2, stroke2);
shape2.GetContent().GetElement(0).AddText('This slide will be selected.');
slide2.AddObject(shape2);

slide2.Select();

```
