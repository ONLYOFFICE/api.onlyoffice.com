# SetPartialName

设置新的字段部分名称。

## 语法

```javascript
expression.SetPartialName(name);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 字段的新部分名称。 |

## 返回值

boolean

## 示例

在 PDF 中为表单字段分配本地名称。

```javascript editor-pdf
// How do I set the local name for a form field in a PDF?

// Define the partial name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
