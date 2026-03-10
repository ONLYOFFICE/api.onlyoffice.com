# ClearBackground

清除幻灯片版式背景。

## 语法

```javascript
expression.ClearBackground();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除幻灯片的背景。

```javascript editor-pptx
// How to remove a background from a layout.

// Clear background from a layout object.

const presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
layout.SetBackground(fill);
slide.FollowLayoutBackground();
slide = Api.CreateSlide();
presentation.AddSlide(slide);
layout.ClearBackground();
slide.FollowLayoutBackground();

```
