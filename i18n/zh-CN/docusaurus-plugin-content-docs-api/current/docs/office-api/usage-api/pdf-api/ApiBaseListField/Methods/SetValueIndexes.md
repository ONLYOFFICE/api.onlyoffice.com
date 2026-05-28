# SetValueIndexes

设置选定值的索引。

## 语法

```javascript
expression.SetValueIndexes(valueIndexes);
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| valueIndexes | 必需 | number[] |  | 所选值的索引。 |

## 返回值

boolean

## 示例

按位置在 PDF 中的下拉列表中将项目标记为已选中。

```javascript editor-pdf
// How do I select options by index in a dropdown field in a PDF?

// Choose items from a list using their numeric positions in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
```
