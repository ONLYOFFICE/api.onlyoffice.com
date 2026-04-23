# SetPlaceholder

设置文本字段占位符。

## 语法

```javascript
expression.SetPlaceholder(sPlaceholder);
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPlaceholder | 必需 | string |  | 字段占位符 |

## 返回值

boolean

## 示例

此示例为文本控件设置占位符。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
widgets[0].SetPlaceholder('Your text here');
```
