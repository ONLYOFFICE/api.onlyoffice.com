# CreateTextField

创建文本字段。

## 语法

```javascript
expression.CreateTextField(aRect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiTextField](../../ApiTextField/ApiTextField.md)

## 示例

如何创建文本字段并添加到文档。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');
```
