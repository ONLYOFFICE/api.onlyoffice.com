# SetRequired

指定当前表单是否为必填项。

继承自 [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md)。

## 语法

```javascript
expression.SetRequired(bRequired);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | 必需 | boolean |  | 定义当前表单是否为必填项（true）或非必填项（false）。 |

## 返回值

boolean

## 示例

在文档中将图片字段标记为必填，必须填写后才能提交文档。

```javascript editor-forms
// How do I make filling in a picture field obligatory in a document?

// Enforce that a picture field must be completed before the form is finished in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetRequired(true);
let required = pictureForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
