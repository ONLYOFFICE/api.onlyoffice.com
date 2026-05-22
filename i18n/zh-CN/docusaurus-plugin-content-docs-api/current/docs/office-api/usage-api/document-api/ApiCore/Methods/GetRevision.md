# GetRevision

返回文档修订版本。

## 语法

```javascript
expression.GetRevision();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索文档属性中存储的修订标签。

```javascript editor-docx
// How do I read the revision value from a document's metadata in a document?

// Display the current revision string in the document body to confirm it was saved correctly in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);
```
