# GetTag

返回当前表单的标签属性。

## 语法

```javascript
expression.GetTag();
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取表单元素的标签。

```javascript editor-forms
const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const textForm = Api.CreateTextForm({
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
textForm.SetTag('MY_TAG');
paragraph.AddElement(textForm);

const formTag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + formTag);
doc.Push(paragraph);

```
