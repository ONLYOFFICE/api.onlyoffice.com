# AddOption

向复选框组添加选项。

## 语法

```javascript
expression.AddOption(nPage, aRect, sExportValue);
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | 必需 | number |  | 添加选项的页面 |
| aRect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 新选项的矩形 |
| sExportValue | 可选 | string |  | 选项的选中值 |

## 返回值

[ApiCheckboxWidget](../../ApiCheckboxWidget/ApiCheckboxWidget.md)

## 示例

此示例为复选框字段组添加选项。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
