# GetModified

返回文档最后修改的日期。

## 语法

```javascript
expression.GetModified();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

读取文档核心属性中存储的最后修改日期。

```javascript editor-docx
// How do I get the date a document was last modified from its core properties in a document?

// Compare the modification timestamp against a deadline to flag outdated content in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
```
