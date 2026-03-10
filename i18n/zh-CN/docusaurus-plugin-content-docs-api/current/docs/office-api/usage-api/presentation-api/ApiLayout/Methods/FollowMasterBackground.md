# FollowMasterBackground

将母版背景设置为版式的背景。

## 语法

```javascript
expression.FollowMasterBackground();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将母版背景设置为版式的背景。

```javascript editor-pptx
// How to apply master background to the layout.

// Change background of the presentation layout to the background of a master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);
const layout = master.GetLayout(0);
layout.FollowMasterBackground();
slide.FollowLayoutBackground();

```
