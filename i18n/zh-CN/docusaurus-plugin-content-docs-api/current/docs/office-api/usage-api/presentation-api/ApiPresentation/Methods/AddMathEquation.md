# AddMathEquation

向当前演示文稿添加数学公式。

## 语法

```javascript
expression.AddMathEquation(sText, sFormat);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 数学公式文本。 |
| sFormat | 必需 | string |  | 数学公式格式。可能的值为 "unicode"、"latex" 和 "mathml"。 |

## 返回值

boolean

## 示例

此示例以三种不同格式向文档添加数学公式：LaTeX、Unicode 和 MathML。

```javascript editor-pptx
// How to add math equations in different formats.

// Insert math equations using LaTeX, Unicode, and MathML formats.

const presentation = Api.GetPresentation();

presentation.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

presentation.AddMathEquation("e^(iπ) + 1 = 0", "unicode");

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
presentation.AddMathEquation(xml, "mathml");

```
