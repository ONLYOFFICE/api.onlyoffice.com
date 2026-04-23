# SetTimeFormat

设置字段的时间格式。

## 语法

```javascript
expression.SetTimeFormat(sFormat);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | [TimeFormat](../../Enumeration/TimeFormat.md) |  | 可用时间格式 |

## 返回值

boolean

## 示例

此示例获取文本字段并为其设置时间格式。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("12HR:MM:SS");
textField.SetValue("8:45:30");

```
