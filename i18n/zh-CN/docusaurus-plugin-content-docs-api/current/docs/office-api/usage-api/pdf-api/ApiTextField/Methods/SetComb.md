# SetComb

设置文本字段是否使用梳状格式。
💡 字符限制必须大于 0。

## 语法

```javascript
expression.SetComb(comb);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| comb | 必需 | boolean |  | 指定是否启用梳状格式。 |

## 返回值

boolean

## 示例

在 PDF 文本字段中以单独的单元格显示文本输入。

```javascript editor-pdf
// How do I spread out characters into separate boxes in a PDF?

// Enable spaced character input for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(12);
textField.SetComb(true);
textField.SetValue('Comb is: ' + textField.IsComb());
```
