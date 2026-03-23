# ClearBackground

清除幻灯片背景。

## 语法

```javascript
expression.ClearBackground();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除幻灯片背景。

```javascript editor-pptx
// How to remove the background from the slide.

// Create a duplicate slide and change its background.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const duplicateSlide = slide.Duplicate(1);
duplicateSlide.ClearBackground();

```
