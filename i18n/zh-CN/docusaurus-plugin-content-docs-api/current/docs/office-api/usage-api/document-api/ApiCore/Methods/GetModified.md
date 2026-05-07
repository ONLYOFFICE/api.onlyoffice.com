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

获取文档中当前文档的最后修改日期。

```javascript editor-docx
// How to get the modified for a core properties in a document?

// Get the modified and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
```
