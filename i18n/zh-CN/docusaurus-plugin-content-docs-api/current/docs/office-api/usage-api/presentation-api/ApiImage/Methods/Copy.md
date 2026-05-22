# Copy

创建指定图像的副本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)

## 示例

复制图像并将副本放在演示文稿的另一张幻灯片上。

```javascript editor-pptx
// How do I make a copy of an image in a presentation?

// Create an exact duplicate of an image and add it to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 60 * 36000);
slide.AddObject(image);

const copyImage = image.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyImage);
```
