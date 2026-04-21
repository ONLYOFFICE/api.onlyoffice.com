# GetKeywords

返回文档关键字。

## 语法

```javascript
expression.GetKeywords();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取当前文档的关键字。

```javascript editor-docx
// How do I get the keywords in a document?

// Get the keywords using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
