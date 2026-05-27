# MoveOption

将选项移动到列表选项中的指定位置。

## 语法

```javascript
expression.MoveOption(currentIndex, newIndex);
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| currentIndex | 必需 | number |  | 要移动的选项的当前索引。 |
| newIndex | 必需 | number |  | 选项的目标索引。 |

## 返回值

boolean

## 示例

在 PDF 中重新排序下拉字段中的选项。

```javascript editor-pdf
// How do I rearrange the order of options in a dropdown in a PDF?

// Change the position of an item in a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
