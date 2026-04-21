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

获取表示文档中指定文档所包含的文档部分的 Range 对象。

```javascript editor-docx
// How to get the range using row and column indexes in a document.

// Make a range text bold using the document API in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);
```
