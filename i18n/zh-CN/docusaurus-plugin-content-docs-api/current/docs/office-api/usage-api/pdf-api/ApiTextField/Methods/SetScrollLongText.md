# SetScrollLongText

设置文本字段是否可以滚动长文本。

## 语法

```javascript
expression.SetScrollLongText(allowScroll);
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| allowScroll | 必需 | boolean |  | 指定长文本是否可以滚动。 |

## 返回值

boolean

## 示例

当文本超过 PDF 中字段宽度时允许水平滚动。

```javascript editor-pdf
// How do I make a narrow text field scrollable for longer content in a PDF?

// Enable scrolling for text that overflows the field boundary in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
