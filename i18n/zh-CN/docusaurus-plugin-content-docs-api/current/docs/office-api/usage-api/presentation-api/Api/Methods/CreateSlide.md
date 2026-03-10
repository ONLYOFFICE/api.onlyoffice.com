# CreateSlide

创建新的幻灯片。

## 语法

```javascript
expression.CreateSlide();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md)

## 示例

此示例创建幻灯片并将其插入演示文稿。

```javascript editor-pptx
// How to add a new slide.

// Add new slides to the presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

```
