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

在 PDF 页面的形状中获取文本范围所包含的某个段落。

```javascript editor-pdf
// A range may span several paragraphs, which are addressed by index.

// Append text to the second paragraph of the range and make it bold.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
const secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
const thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

const range = shape.GetTextRange();

const secondParagraph = range.GetParagraph(1);
secondParagraph.AddText(" (edited)");
secondParagraph.SetBold(true);
```
