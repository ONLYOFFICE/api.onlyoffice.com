# CreateComboboxField

创建组合框字段。

## 语法

```javascript
expression.CreateComboboxField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiComboboxField](../../ApiComboboxField/ApiComboboxField.md)

## 示例

在 PDF 中创建具有多个选项的下拉字段。

```javascript editor-pdf
// How do I add a combobox to a form in a PDF?

// Populate a dropdown list with selectable choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let comboboxField = Api.CreateComboboxField([10, 10, 160, 32]);
page.AddObject(comboboxField);
comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
```
