# SetPlaceholderText

设置当前表单的占位符文本。

:::note
无法为复选框或单选按钮表单设置占位符文本。
:::

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

在文档中为日期表单设置占位符文本。

```javascript editor-forms
// How do I add hint text to an empty date form in a document?

// Replace the default prompt inside a date form with custom guidance text in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetPlaceholderText("Your placeholder");
```
