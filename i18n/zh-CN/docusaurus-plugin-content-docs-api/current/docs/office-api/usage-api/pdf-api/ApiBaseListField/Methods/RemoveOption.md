# RemoveOption

从列表选项中移除选项。

## 语法

```javascript
expression.RemoveOption(index);
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 选项索引。 |

## 返回值

boolean

## 示例

从 PDF 中的下拉字段删除选项。

```javascript editor-pdf
// How do I remove an option from a list field in a PDF?

// Take out an item from a dropdown's available choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
comboboxField.RemoveOption(2);
```
