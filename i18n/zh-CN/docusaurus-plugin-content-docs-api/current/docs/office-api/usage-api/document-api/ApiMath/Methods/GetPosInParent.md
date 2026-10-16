# GetPosInParent

返回当前数学元素在其父元素中的位置（索引）。

## 语法

```javascript
expression.GetPosInParent();
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

确定数学公式在其父元素中的索引。

```javascript editor-docx
// The position is the math equation's index within its parent paragraph.

// Read a math equation's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let position = math.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The math equation is at position " + position + ".");
doc.Push(report);
```
