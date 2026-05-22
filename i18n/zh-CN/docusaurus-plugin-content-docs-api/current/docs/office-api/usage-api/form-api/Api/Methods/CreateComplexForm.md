# CreateComplexForm

使用指定的复杂表单属性创建复杂表单。

## 语法

```javascript
expression.CreateComplexForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [FormPrBase](../../Enumeration/FormPrBase.md) |  | 复杂表单属性。 |

## 返回值

[ApiComplexForm](../../ApiComplexForm/ApiComplexForm.md)

## 示例

在文档中将多个输入字段合并为单个复杂表单字段。

```javascript editor-forms
// How do I create a form field that contains multiple parts in a document?

// Build a composite field that allows users to enter different types of data together in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({
	"key": "Email",
	"tip": "Email",
	"placeholder": "Start to fill complex form"
});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
