# SetPartialName

设置新的字段部分名称。

## 语法

```javascript
expression.SetPartialName(sName);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中设置字段部分名称并显示。

```javascript editor-pdf
// How can I set partial name using a base field in a PDF document?

// Set partial name for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
