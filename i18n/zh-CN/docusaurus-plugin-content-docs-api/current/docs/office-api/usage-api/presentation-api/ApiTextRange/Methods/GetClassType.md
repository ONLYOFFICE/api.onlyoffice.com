# GetClassType

返回类类型标识符。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textRange"

## 示例

获取 ApiTextRange 对象的类类型并将其显示在演示文稿形状中。

```javascript editor-pptx
// Useful for confirming the object type before calling range-specific methods.

// Retrieve the class type and insert it into the paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();
const classType = range.GetClassType();
paragraph.AddText(" Class type: " + classType);
slide.AddObject(shape);
```
