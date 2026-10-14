# GetTextRange

返回涵盖形状完整文本内容的 ApiTextRange。如果形状还没有文本主体，则创建一个。

继承自 [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md)。

## 语法

```javascript
expression.GetTextRange();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

获取形状的完整文本范围并用它设置格式化文本。

```javascript editor-pptx
// Creates a text body if the shape does not have one yet; returns null for drawings that are not shapes.

// Create a shape, get its text range, then set the text and make it bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetBold(true);
```
