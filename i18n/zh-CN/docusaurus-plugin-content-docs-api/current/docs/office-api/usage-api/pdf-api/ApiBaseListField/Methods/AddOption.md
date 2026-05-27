# AddOption

向列表选项添加新选项。

## 语法

```javascript
expression.AddOption(option, index);
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| option | 必需 | [ListOption](../../Enumeration/ListOption.md) |  | 要添加的列表选项 |
| index | 可选 | number | this.GetOptions().lenght | 要添加选项的索引。 |

## 返回值

boolean

## 示例

在 PDF 中向下拉列表或列表字段添加选项。

```javascript editor-pdf
// How can I add options to a dropdown list in a PDF?

// Populate a form field with multiple selectable items in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
