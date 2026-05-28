# SetBackground

设置当前幻灯片版式的背景。

## 语法

```javascript
expression.SetBackground(oApiFill);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充演示文稿幻灯片版式背景的颜色或图案。\ |

## 返回值

boolean

## 示例

在演示文稿中为布局的背景应用填充颜色。

```javascript editor-pptx
// How do I change the background appearance of a layout in a presentation?

// Create a gradient fill and assign it as the layout background in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
layout.SetBackground(fill);
slide.FollowLayoutBackground();
```
