# AddSlide

在演示文稿末尾追加新幻灯片。

## 语法

```javascript
expression.AddSlide(oSlide, nIndex);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSlide | 必需 | [ApiSlide](../../ApiSlide/ApiSlide.md) |  | 使用 [Api#CreateSlide](../../Api/Methods/CreateSlide.md) 方法创建的幻灯片。 |
| nIndex | 必需 | number |  | 要添加的幻灯片的索引。如果未指定，幻灯片将添加到演示文稿末尾。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例在演示文稿末尾追加新幻灯片。

```javascript editor-pptx
// How to add a new slide to the presentation.

// Create a slide and add it to the end of presentation.

const presentation = Api.GetPresentation();
const slide = Api.CreateSlide();
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

```
