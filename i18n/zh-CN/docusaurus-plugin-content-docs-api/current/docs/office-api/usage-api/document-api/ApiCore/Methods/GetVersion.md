# GetVersion

返回文档版本。

## 语法

```javascript
expression.GetVersion();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从文档核心属性提取版本字符串。

```javascript editor-docx
// How do I retrieve the version recorded in a document's metadata in a document?

// Confirm the stored version value is accessible by writing it into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);
```
