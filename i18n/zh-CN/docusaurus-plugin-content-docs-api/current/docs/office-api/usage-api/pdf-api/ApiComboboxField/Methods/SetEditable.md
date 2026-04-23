# SetEditable

设置字段的可编辑属性。

## 语法

```javascript
expression.SetEditable(bEditable);
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bEditable | 必需 | boolean |  | 允许用户输入自定义文本 |

## 返回值

boolean

## 示例

此示例为组合框字段设置可编辑属性。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
