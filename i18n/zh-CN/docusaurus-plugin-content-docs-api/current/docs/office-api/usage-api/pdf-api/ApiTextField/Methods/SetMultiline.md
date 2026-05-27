# SetMultiline

设置文本字段的多行属性。

## 语法

```javascript
expression.SetMultiline(multiline);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| multiline | 必需 | boolean |  | 字段是否为多行 |

## 返回值

boolean

## 示例

允许 PDF 文本字段中的文本输入跨多行换行。

```javascript editor-pdf
// How do I let users type multiple paragraphs in a single text field in a PDF?

// Enable multiple lines of text input for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
