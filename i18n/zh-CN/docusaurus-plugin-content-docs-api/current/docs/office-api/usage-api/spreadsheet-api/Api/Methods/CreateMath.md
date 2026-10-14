# CreateMath

根据线性文本字符串创建数学公式。生成的对象可以像文本块一样插入到段落中（例如，通过 [ApiParagraph#AddElement](../../ApiParagraph/Methods/AddElement.md) 或 [ApiParagraph#Push](../../ApiParagraph/Methods/Push.md)）。

## 语法

```javascript
expression.CreateMath(text, format);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 以线性文本字符串形式编写的公式。 |
| format | 可选 | "unicode" \| "latex" \| "mathml" | "unicode" | 指定线性表示的格式。 |

## 返回值

[ApiMath](../../ApiMath/ApiMath.md)

## 示例

在电子表格中构建数学公式对象，并像文本块一样将其插入到形状的段落中。

```javascript editor-xlsx
// Insert a formula into a shape as if it were a run of text in a spreadsheet.

// Produce a reusable equation object and place it into a shape's paragraph content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let paragraph = shape.GetContent().GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
```
