# GetParagraph

从范围中的所有段落返回一个段落。

## 语法

```javascript
expression.GetParagraph(nPos);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | Number |  | 段落在范围中的位置。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

此示例展示如何从范围中的所有段落获取一个段落。

```javascript editor-docx
// Get a paragraph using its index position.

// Make bold the second paragraph of the range.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let rangeParagraph = range.GetParagraph(1);
rangeParagraph.SetBold("true");
```
