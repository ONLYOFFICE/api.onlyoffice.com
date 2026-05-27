# SetCheckedByDefault

设置控件默认选中。

## 语法

```javascript
expression.SetCheckedByDefault(checked);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checked | 必需 | boolean |  | 指定复选框是否默认被选中。 |

## 返回值

boolean

## 示例

使复选框在 PDF 表单首次打开时显示为已选中。

```javascript editor-pdf
// How do I configure a checkbox to be pre-selected by default in a PDF?

// Set the initial checked state for a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckedByDefault(true);
console.log('Checked by default is: ' + widgets[0].IsCheckedByDefault());
```
