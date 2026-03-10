# SetCheckedByDefault

设置控件默认选中。

## 语法

```javascript
expression.SetCheckedByDefault(bChecked);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bChecked | 必需 | boolean |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets checkbox widget checked by default property.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckedByDefault(true);
console.log('Checked by default is: ' + widgets[0].IsCheckedByDefault());
```
