# Delete

从演示文稿中删除当前幻灯片。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例从演示文稿中删除当前幻灯片。

```javascript editor-pptx
// How to delete a slide.

// Remove a slide from the presentation.

const presentation = Api.GetPresentation();
let slide = Api.CreateSlide();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

slide = presentation.GetSlideByIndex(0);
slide.Delete();

```
