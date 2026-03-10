# GetLayout

返回当前幻灯片的版式。

## 语法

```javascript
expression.GetLayout();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## 示例

此示例展示如何获取当前幻灯片的版式。

```javascript editor-pptx
// How to return a slide layout.

// Get a slide layout and set its background color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();

```
