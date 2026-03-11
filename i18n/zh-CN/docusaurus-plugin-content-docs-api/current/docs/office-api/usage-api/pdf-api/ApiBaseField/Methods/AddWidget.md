# AddWidget

添加新控件 - 字段的可视化表示

## 语法

```javascript
expression.AddWidget(nPage, aRect);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | 必需 | number |  | 添加控件的页面 |
| aRect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 字段矩形 |

## 返回值

[ApiWidget](../../Enumeration/ApiWidget.md)

## 示例

此示例添加新的控件 - 字段的可视化表示

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);

```
