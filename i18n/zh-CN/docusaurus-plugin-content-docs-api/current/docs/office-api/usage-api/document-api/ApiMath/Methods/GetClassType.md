# GetClassType

返回 ApiMath 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"math"

## 示例

识别文档中数学公式的对象类型。

```javascript editor-docx
// Find out what kind of object a formula is in a document.

// Confirm the category a math equation belongs to in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
let classType = math.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
