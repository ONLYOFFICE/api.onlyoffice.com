# SetMultiline

设置文本字段的多行属性。

## 语法

```javascript
expression.SetMultiline(bMultiline);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | 必需 | boolean |  | 字段是否为多行 |

## 返回值

boolean

## 示例

This example adds text field and sets multiline for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());

```
