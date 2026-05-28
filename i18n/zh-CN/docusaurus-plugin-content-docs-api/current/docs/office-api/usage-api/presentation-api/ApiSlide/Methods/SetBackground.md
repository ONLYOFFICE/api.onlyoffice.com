# SetBackground

设置当前演示文稿幻灯片的背景。

## 语法

```javascript
expression.SetBackground(oApiFill);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充演示文稿幻灯片背景的颜色或图案。 |

## 返回值

boolean

## 示例

为幻灯片设置背景填充。

```javascript editor-pptx
// Apply a radial gradient fill to the slide background.

// Add the slide to the presentation with the new background.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);
```
