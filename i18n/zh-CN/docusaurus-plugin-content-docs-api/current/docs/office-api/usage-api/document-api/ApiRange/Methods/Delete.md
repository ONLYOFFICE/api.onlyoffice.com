# Delete

删除当前范围中的所有内容。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中完全删除选定的文本部分。

```javascript editor-docx
// How do I erase a specific stretch of words from the body of a document?

// Wipe out a passage so it no longer appears anywhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
```
