# GetAllSlides

返回当前演示文稿中所有幻灯片的数组。

## 语法

```javascript
expression.GetAllSlides();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)[]

## 示例

此示例演示如何获取当前演示文稿中的所有幻灯片。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const firstSlide = presentation.GetSlideByIndex(0);

const count = 3;
for (let i = 0; i < count; i++) {
	presentation.AddSlide(Api.CreateSlide());
}

const slides = presentation.GetAllSlides();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(50, 100, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
firstSlide.AddObject(shape);

const paragraph =  shape.GetContent().GetElement(0);
paragraph.AddText('Total slides count: ' + slides.length);

```
