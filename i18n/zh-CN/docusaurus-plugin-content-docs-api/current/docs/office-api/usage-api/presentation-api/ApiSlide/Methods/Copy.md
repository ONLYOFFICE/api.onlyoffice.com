# Copy

创建当前幻灯片对象的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## 示例

在演示文稿中创建幻灯片的副本。

```javascript editor-pptx
// How do I copy a slide in a presentation?

// Add the copied slide to the presentation in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const copySlide = slide.Copy();
presentation.AddSlide(copySlide);
```
