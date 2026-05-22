# GetRange

返回表示指定文档中包含的文档部分的 Range 对象。

## 语法

```javascript
expression.GetRange(Start, End);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 必需 | Number |  | 当前元素中的起始位置索引。 |
| End | 必需 | Number |  | 当前元素中的结束位置索引。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

按字符位置在文档中选择特定文本范围。

```javascript editor-docx
// How do I get a range of characters using start and end indexes in a document?

// Apply bold formatting to a precise word by targeting it with index-based range selection in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);
```
