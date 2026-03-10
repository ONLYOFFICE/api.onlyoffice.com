# SetRegularExp

设置字段的正则表达式。

## 语法

```javascript
expression.SetRegularExp(sReg);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReg | 必需 | string |  | 字段正则表达式（例如 "\\S+@\\S+\\.\\S+"） |

## 返回值

boolean

## 示例

This example gets text field and sets regular expression validate for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");

```
