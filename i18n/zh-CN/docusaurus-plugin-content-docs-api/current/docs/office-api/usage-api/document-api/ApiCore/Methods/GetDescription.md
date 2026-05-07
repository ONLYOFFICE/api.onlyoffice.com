# GetDescription

返回文档描述。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取当前文档的描述。

```javascript editor-docx
// How can I get the description using a core properties in a document?

// Get the description for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);
```
