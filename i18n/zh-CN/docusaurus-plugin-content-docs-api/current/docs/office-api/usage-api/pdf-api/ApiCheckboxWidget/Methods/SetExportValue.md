# SetExportValue

设置控件导出值。

## 语法

```javascript
expression.SetExportValue(value);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 复选框被选中时要导出的值。 |

## 返回值

boolean

## 示例

定义 PDF 中复选框被选中时提交的值。

```javascript editor-pdf
// How do I set what data is recorded when someone checks a checkbox in a PDF?

// Assign an export value to a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
