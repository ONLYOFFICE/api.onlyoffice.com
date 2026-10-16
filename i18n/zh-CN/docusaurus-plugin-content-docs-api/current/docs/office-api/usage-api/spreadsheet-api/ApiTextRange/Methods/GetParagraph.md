# GetParagraph

返回此范围内指定索引处的段落。如果索引超出范围，则返回 null。

## 语法

```javascript
expression.GetParagraph(index);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 未提供描述。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

在工作表的形状中获取文本范围所包含的某个段落。

```javascript editor-xlsx
// A range may span several paragraphs, which are addressed by index.

// Append text to the second paragraph of the range and make it bold.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
let secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
let thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

let range = shape.GetTextRange();

let secondParagraph = range.GetParagraph(1);
secondParagraph.AddText(" (edited)");
secondParagraph.SetBold(true);
```
