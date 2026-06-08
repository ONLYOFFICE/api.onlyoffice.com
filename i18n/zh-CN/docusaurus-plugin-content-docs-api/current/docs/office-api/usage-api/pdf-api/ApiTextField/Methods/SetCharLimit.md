# SetCharLimit

设置文本字段的字符限制。
\<note\> 字符限制为 0 表示该字段没有字符限制。

## 语法

```javascript
expression.SetCharLimit(charLimit);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| charLimit | 必需 | number |  | 字段中允许的最大字符数。 |

## 返回值

boolean

## 示例

限制可以输入到 PDF 文本字段中的字符数。

```javascript editor-pdf
// How do I prevent users from typing beyond a certain character count in a PDF?

// Control how many characters a text field will accept in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
```
