# GetBackgroundColor

返回当前表单的背景颜色。

继承自 [ApiFormBase.GetBackgroundColor](../../ApiFormBase/Methods/GetBackgroundColor.md)。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## 示例

读取文档中文本字段所应用的背景颜色。

```javascript editor-forms
// How do I retrieve the fill color of a text entry area in a document?

// Inspect the color used behind a text field to verify its appearance in a document.

let doc = Api.GetDocument();

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'required': true,
	'placeholder': 'First name',
	'comb': true,
	'maxCharacters': 10,
	'cellWidth': 3,
	'multiLine': false,
	'autoFit': false
});

const themeColor = Api.ThemeColor('accent3');
textForm.SetBackgroundColor(themeColor);
const backgroundColor = textForm.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('Is background color a theme color? -> ' + backgroundColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Background color HEX (for current theme): ' + backgroundColor.GetHex());
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
```
