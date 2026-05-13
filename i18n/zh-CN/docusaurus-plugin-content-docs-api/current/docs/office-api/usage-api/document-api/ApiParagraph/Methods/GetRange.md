# GetRange

返回表示指定段落中所包含文档部分的 Range 对象。
在调用此方法之前，段落必须已附加到文档。

## 语法

```javascript
expression.GetRange(Start, End);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 必需 | Number |  | 当前元素中的起始位置索引。 |
| End | 必需 | Number |  | 当前元素中的结束位置索引。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

获取表示文档中指定段落所包含的文档部分的 Range 对象。

```javascript editor-docx
// How to get the range where the paragraph is located in a document.

// Get the paragraph range and make it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let range = paragraph.GetRange(8, 11);
range.SetBold(true);
```
