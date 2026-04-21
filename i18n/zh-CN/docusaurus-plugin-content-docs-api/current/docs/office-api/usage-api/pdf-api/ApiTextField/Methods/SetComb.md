# SetComb

设置文本字段的梳状属性。
💡 字符限制应大于 0

## 语法

```javascript
expression.SetComb(bComb);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bComb | 必需 | boolean |  | 字段是否为梳状 |

## 返回值

boolean

## 示例

在 PDF 文档中添加文本字段并设置梳状属性。

```javascript editor-pdf
// How can I set comb using a text field in a PDF document?

// Set comb for a text field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is: ' + textField.IsComb());
```
