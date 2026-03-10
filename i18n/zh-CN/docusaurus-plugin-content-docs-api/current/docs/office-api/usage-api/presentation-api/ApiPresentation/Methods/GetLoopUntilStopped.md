# GetLoopUntilStopped

返回演示文稿是否持续循环播放直到用户停止。

## 语法

```javascript
expression.GetLoopUntilStopped();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example shows how to get the loop-until-stopped setting of the presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.SetLoopUntilStopped(true);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped: " + isLooping);
slide.AddObject(shape);

```
