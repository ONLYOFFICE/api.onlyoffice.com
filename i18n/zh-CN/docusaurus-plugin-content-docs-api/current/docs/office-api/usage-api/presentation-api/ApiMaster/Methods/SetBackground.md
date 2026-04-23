# SetBackground

设置当前幻灯片母版的背景。

## 语法

```javascript
expression.SetBackground(oApiFill);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充演示文稿幻灯片母版背景的颜色或图案。 |

## 返回值

boolean

## 示例

此示例设置当前幻灯片母版的背景。

```javascript editor-pptx
// How to set a background of a slide master.

// Create a solid fill and apply it as a background for a slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.ClearBackground();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);

```
