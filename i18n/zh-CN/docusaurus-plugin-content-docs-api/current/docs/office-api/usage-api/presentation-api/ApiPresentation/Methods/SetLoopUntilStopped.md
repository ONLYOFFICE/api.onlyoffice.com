# SetLoopUntilStopped

设置演示文稿是否持续循环播放直到用户停止。

## 语法

```javascript
expression.SetLoopUntilStopped(loopUntilStopped);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| loopUntilStopped | 必需 | boolean |  | 为 true 时设置演示文稿循环播放直到停止；否则为 false。 |

## 返回值

boolean

## 示例

此示例将演示文稿设置为持续循环播放直到手动停止。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped initial value: " + isLooping);

presentation.SetLoopUntilStopped(true);
paragraph.AddText("\nLoop until stopped new value: " + presentation.GetLoopUntilStopped());
slide.AddObject(shape);

```
