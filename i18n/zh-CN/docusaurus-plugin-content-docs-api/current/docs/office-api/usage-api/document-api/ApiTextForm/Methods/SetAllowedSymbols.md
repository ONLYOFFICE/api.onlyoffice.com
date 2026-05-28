# SetAllowedSymbols

设置当前文本字段允许的符号。只接受指定的字符作为输入。

## 语法

```javascript
expression.SetAllowedSymbols(symbols);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| symbols | 必需 | string |  | 允许的字符字符串。 |

## 返回值

boolean

## 示例

限制文档中的文本字段仅接受特定的字符集。

```javascript editor-docx
// How do I limit which characters a user can type into a text field in a document?

// Prevent unwanted input by defining the exact characters allowed in a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Digits", placeholder: "Digits only" });
textForm.SetAllowedSymbols("0123456789");
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form accepting digits only: ");
paragraph.Push(textForm);
```
