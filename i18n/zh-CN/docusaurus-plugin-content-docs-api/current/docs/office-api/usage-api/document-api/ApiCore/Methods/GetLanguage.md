# GetLanguage

返回文档语言。

## 语法

```javascript
expression.GetLanguage();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取当前文档的语言。

```javascript editor-docx
// How can I get the language using a core properties in a document?

// Get the language for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);
```
