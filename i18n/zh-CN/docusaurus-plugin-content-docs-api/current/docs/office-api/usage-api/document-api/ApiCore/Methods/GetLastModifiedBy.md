# GetLastModifiedBy

返回最后修改文档的用户名称。

## 语法

```javascript
expression.GetLastModifiedBy();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中最后修改当前文档的用户名称。

```javascript editor-docx
// How can I get last modified by using a core properties in a document?

// Get last modified by for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);
```
