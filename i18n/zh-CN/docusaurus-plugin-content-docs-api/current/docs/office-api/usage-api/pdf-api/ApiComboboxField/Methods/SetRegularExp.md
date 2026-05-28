# SetRegularExp

设置字段的正则表达式。

## 语法

```javascript
expression.SetRegularExp(regularExpression);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| regularExpression | 必需 | string |  | 验证正则表达式（例如 "\\S+@\\S+\\.\\S+"） |

## 返回值

boolean

## 示例

在 PDF 中使用模式规则验证字段输入。

```javascript editor-pdf
// Can I check that data matches a pattern in a PDF?

// Ensure text follows a specific format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");
```
