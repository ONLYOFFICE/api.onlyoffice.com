# GetAllowedSymbols

返回当前文本字段允许的符号。

## 语法

```javascript
expression.GetAllowedSymbols();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中文本字段接受的字符集。

```javascript editor-docx
// How do I find out which symbols are permitted in a text field in a document?

// Confirm the character restriction applied to a text entry area in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Letters", placeholder: "Letters only" });
textForm.SetAllowedSymbols("abcdefghijklmnopqrstuvwxyz");
let allowedSymbols = textForm.GetAllowedSymbols();
let paragraph = doc.GetElement(0);
paragraph.AddText("Allowed symbols: " + allowedSymbols);
paragraph.Push(textForm);
```
