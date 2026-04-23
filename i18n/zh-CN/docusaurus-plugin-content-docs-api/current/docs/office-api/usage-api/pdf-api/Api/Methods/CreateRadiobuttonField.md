# CreateRadiobuttonField

创建单选按钮字段。

## 语法

```javascript
expression.CreateRadiobuttonField(aRect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiRadiobuttonField](../../ApiRadiobuttonField/ApiRadiobuttonField.md)

## 示例

如何创建单选按钮字段并添加到文档。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let radioField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radioField);
radioField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
radioField.SetValue('Choice 2');
```
