# SetMask

设置输入文本的输入掩码。

## 语法

```javascript
expression.SetMask(inputMask);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inputMask | 必需 | string |  | 输入掩码（例如 "(999)999-9999"）。 |

## 返回值

boolean

## 示例

要求 PDF 文本字段中的文本输入遵循特定模式。

```javascript editor-pdf
// How do I enforce a phone number or ID format when users type in a PDF?

// Set an input pattern that users must follow in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");
```
