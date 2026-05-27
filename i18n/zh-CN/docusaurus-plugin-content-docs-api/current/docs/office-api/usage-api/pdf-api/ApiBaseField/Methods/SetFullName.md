# SetFullName

如果可能，设置新的字段名称。

## 语法

```javascript
expression.SetFullName(name);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 字段的新完整名称。 |

## 返回值

boolean

## 示例

在 PDF 中为表单字段分配完整的名称标识符。

```javascript editor-pdf
// How do I name a form field in a PDF?

// Set the unique full name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```
