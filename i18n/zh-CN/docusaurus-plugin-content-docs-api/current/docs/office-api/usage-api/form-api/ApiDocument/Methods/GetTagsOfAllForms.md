# GetTagsOfAllForms

返回文档中所有表单使用的所有标签的列表。

## 语法

```javascript
expression.GetTagsOfAllForms();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

String[]

## 示例

此示例展示如何获取文档中所有表单使用的所有标签列表。

```javascript editor-forms
// How to get tags of all forms and print their names in the document.

// Display the style name of the "Heading 6".

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "tag": "form_2", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = doc.GetAllForms();
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");
let tags = doc.GetTagsOfAllForms();
paragraph = Api.CreateParagraph();
paragraph.AddText("Forms tags: ");
paragraph.AddLineBreak();
for (let i = 0; i < tags.length; i++ ){
	paragraph.AddText(tags[i]);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
