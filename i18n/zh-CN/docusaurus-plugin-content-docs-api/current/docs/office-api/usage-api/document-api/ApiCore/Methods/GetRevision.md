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

此示例演示如何获取当前文档的修订版本。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);

```
