# CreateTextForm

使用指定的文本字段属性创建文本字段。

## 语法

```javascript
expression.CreateTextForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [TextFormPr](../../Enumeration/TextFormPr.md) |  | 文本字段属性。 |

## 返回值

[ApiTextForm](../../ApiTextForm/ApiTextForm.md)

## 示例

在文档中添加文本输入字段供用户输入信息。

```javascript editor-forms
// How do I create a text box field in a document?

// Insert a fillable text area where users can type their responses in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
```
