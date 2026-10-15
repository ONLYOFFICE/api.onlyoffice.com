# GetInternalId

返回当前文档内容的内部 ID。

继承自 [ApiDocumentContent.GetInternalId](../../ApiDocumentContent/Methods/GetInternalId.md)。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档的唯一内部标识符。

```javascript editor-docx
// How do I read the internal ID assigned to a document?

// Display the document ID as text to confirm it is accessible in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const internalId = doc.GetInternalId();
paragraph.AddText('Document internal ID: ' + internalId);
```
