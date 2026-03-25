# FollowLayoutBackground

将版式背景设置为幻灯片的背景。

## 语法

```javascript
expression.FollowLayoutBackground();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将版式背景设置为幻灯片的背景。

```javascript editor-pptx
// How to set a slide's background same as the layout's.

// Get a slide by its index and set its background as its layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();

```
