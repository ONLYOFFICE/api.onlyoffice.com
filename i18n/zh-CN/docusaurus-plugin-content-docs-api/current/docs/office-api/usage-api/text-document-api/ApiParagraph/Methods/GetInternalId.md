# GetInternalId

返回当前内容段落的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example shows how to get the internal ID of a paragraph.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is a sample paragraph.');

const internalId = paragraph.GetInternalId();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First paragraph internal ID: ' + internalId);
doc.Push(paragraph2);

```
