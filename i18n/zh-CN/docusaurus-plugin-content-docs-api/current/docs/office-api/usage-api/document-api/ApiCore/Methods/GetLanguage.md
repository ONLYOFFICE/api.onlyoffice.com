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

读取文档核心属性中存储的语言设置。

```javascript editor-docx
// How do I get the language value from the core properties in a document?

// Detect the declared locale of a document to apply the correct spell-check or formatting rules in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);
```
