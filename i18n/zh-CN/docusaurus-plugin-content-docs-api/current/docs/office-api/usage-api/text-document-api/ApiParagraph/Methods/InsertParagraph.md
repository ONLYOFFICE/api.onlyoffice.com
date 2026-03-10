# InsertParagraph

在指定位置插入段落。

## 语法

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | 必需 | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 文本或段落。 |
| sPosition | 必需 | string |  | 将插入文本或段落的位置（指定段落的「之前」或「之后」）。 |
| beRNewPara | 必需 | boolean |  | 定义此方法是返回新段落（true）还是当前段落（false）。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## 示例

此示例在指定位置插入段落。

```javascript editor-docx
// How to insert the paragraph object into the another element.

// Add paragraph to the content control.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This paragraph was inserted here.");
paragraph1.InsertParagraph(paragraph2, "after", true);
```
