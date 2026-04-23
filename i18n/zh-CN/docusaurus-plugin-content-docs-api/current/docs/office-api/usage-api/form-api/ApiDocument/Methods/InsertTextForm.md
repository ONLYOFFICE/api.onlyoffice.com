# InsertTextForm

在选定文本上方插入具有指定文本框属性的文本框。

## 语法

```javascript
expression.InsertTextForm(formPr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [TextFormInsertPr](../../Enumeration/TextFormInsertPr.md) |  | 用于插入文本字段的属性。 |

## 返回值

[ApiTextForm](../../ApiTextForm/ApiTextForm.md)

## 示例

此示例在选定文本上方插入具有指定文本框属性的文本框。

```javascript editor-forms
// How to create a text form and add it to the paragraph.

// Add a text form to the ApiDocument object, set its properties like characters limit, autofit, etc.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First name");
paragraph.Select();
doc.InsertTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "Name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false,
	"placeholderFromSelection": true,
	"keepSelectedTextInForm": false
});

```
