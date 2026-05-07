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

获取文档中当前文档的版本。

```javascript editor-docx
// How to get the version for a core properties in a document?

// Get the version and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);
```
