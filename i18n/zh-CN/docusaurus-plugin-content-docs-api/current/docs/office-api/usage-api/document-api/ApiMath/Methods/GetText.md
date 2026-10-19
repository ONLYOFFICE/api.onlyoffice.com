# GetText

返回当前数学元素的内部文本。

## 语法

```javascript
expression.GetText(format);
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 可选 | "unicode" \| "latex" | "unicode" | 返回文本时所采用的格式。 |

## 返回值

string

## 示例

读取文档中数学公式的文本表示形式，可以是 Unicode 线性文本或 LaTeX。

```javascript editor-docx
// Get the formula of an equation back as plain text or as LaTeX in a document.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
let unicodeText = math.GetText("unicode");
let latexText = math.GetText("latex");
paragraph = Api.CreateParagraph();
paragraph.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
doc.Push(paragraph);
```
