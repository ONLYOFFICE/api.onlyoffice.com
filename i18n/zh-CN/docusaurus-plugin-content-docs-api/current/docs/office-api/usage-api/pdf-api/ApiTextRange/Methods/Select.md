# Select

在编辑器中选择文本范围。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 页面的形状中选中范围所包含的文本。

```javascript editor-pdf
// The selection is made in the editor, as if the user had made it.

// Select the second word.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

range.GetRange(6, 11).Select();
```
