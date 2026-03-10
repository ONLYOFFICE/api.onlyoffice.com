# Duplicate

创建指定幻灯片对象的副本，并将新幻灯片添加到幻灯片集合。

## 语法

```javascript
expression.Duplicate(nPos);
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | ApiPresentation.GetSlidesCount() | 新幻灯片将添加到的位置。 |

## 返回值

[ApiSlide](../../ApiSlide/ApiSlide.md) \| null

## 示例

此示例创建指定幻灯片对象的副本，并将新幻灯片添加到幻灯片集合中。

```javascript editor-pptx
// How to create a duplicate slide.

// Get a slide by its index and create its copy.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
const duplicateSlide = slide.Duplicate(1);

```
