# SetStartPos

设置当前范围对象的起始位置。

## 语法

```javascript
expression.SetStartPos(nPos);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | Number |  | 起始位置。 |

## 返回值

boolean

## 示例

将文本选区的起始位置移动到文档中的不同位置。

```javascript editor-docx
// How do I change where a text range starts without altering where it ends in a document?

// Trim or expand the leading edge of a selected region to cover a different set of words in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);
```
