# FollowMasterBackground

将母版背景设置为幻灯片的背景。

## 语法

```javascript
expression.FollowMasterBackground();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将母版幻灯片的背景应用于演示文稿中的幻灯片。

```javascript editor-pptx
// How do I use a master slide's background for a slide in a presentation?

// Set the slide's background to match its master slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowMasterBackground();
```
