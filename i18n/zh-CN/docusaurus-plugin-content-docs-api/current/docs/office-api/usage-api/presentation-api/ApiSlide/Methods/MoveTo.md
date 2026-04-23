# MoveTo

将当前幻灯片移动到同一集合中的指定位置。

## 语法

```javascript
expression.MoveTo(nPos);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 当前幻灯片将移动到的位置。 |

## 返回值

boolean

## 示例

此示例将当前幻灯片移动到同一集合中的指定位置。

```javascript editor-pptx
// How to move a slide to the position index.

// Create a slide and change its position.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);
slide.MoveTo(0);

```
