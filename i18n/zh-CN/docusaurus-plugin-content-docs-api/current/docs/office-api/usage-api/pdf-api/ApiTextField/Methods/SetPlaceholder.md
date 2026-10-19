# SetPlaceholder

设置文本字段占位符。

## 语法

```javascript
expression.SetPlaceholder(sPlaceholder);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPlaceholder | 必需 | string |  | 字段占位符 |

## 返回值

boolean

## 示例

在 PDF 中添加在文本字段中输入前显示的提示文本。

```javascript editor-pdf
// Useful for adding a hint text to an empty text field in a PDF.

// Configure what example text shows when a text field is empty in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPlaceholder("Your text here");
```
