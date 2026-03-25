# SetCheckStyle

设置控件复选框样式。

## 语法

```javascript
expression.SetCheckStyle(sStyle);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyle | 必需 | [CheckStyle](../../Enumeration/CheckStyle.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例设置复选框控件的选中样式。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');
```
