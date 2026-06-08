# GetCharLimit

获取文本字段的字符限制。
\<note\> 字符限制为 0 表示该字段没有字符限制

## 语法

```javascript
expression.GetCharLimit();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检查 PDF 中文本字段的最大字符限制。

```javascript editor-pdf
// How do I find out how many characters a text field accepts in a PDF?

// Read the character limit restriction of a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
```
