# AddMathEquation

向当前文档添加数学公式。

## 语法

```javascript
expression.AddMathEquation(sText, sFormat);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 以线性文本字符串形式编写的公式。 |
| sFormat | 可选 | "unicode" \| "latex" \| "mathml" | "unicode" | 指定线性表示的格式。 |

## 返回值

boolean

## 示例

此示例以三种不同格式向文档添加数学公式：LaTeX、Unicode 和 MathML。

```javascript editor-docx
// How to add math equations in different formats.

// Insert math equations using LaTeX, Unicode, and MathML formats.

let doc = Api.GetDocument();
doc.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.AddMathEquation("e^(iπ) + 1 = 0", "unicode");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
let xml = `<math>
		<mrow>
			<msup>
				<mi>a</mi>
				<mn>2</mn>
			</msup>
			<mo>+</mo>
			<msup>
				<mi>b</mi>
				<mn>2</mn>
			</msup>
			<mo>=</mo>
			<msup>
				<mi>c</mi>
				<mn>2</mn>
			</msup>
		</mrow>
</math>`;
doc.AddMathEquation(xml, "mathml");
```
