# SetMask

设置字段的掩码。

## 语法

```javascript
expression.SetMask(inputMask);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inputMask | 必需 | string |  | 输入掩码（例如 "(999)999-9999"）。 |

## 返回值

boolean

## 示例

在 PDF 中为字段应用输入模式。

```javascript editor-pdf
// What format should user input follow in a PDF?

// Enforce a specific input structure in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetMask("(999)999-9999");
comboboxField.SetValue("(123)456-7890");
```
