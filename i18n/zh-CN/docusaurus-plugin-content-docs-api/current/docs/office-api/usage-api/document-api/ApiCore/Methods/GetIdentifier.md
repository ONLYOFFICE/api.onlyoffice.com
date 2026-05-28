# GetIdentifier

返回文档标识符。

## 语法

```javascript
expression.GetIdentifier();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档核心属性中存储的唯一标识符。

```javascript editor-docx
// How do I get the identifier value from the core properties in a document?

// Look up a document's assigned ID to reference it in an external system in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);
```
