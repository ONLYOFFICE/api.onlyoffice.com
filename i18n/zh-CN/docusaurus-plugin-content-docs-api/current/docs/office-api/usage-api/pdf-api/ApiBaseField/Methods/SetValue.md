# SetValue

设置字段值

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 字段的新值。 |

## 返回值

boolean

## 示例

在 PDF 中向表单字段输入文本。

```javascript editor-pdf
// How do I fill in a form field in a PDF?

// Set a text value for a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```
