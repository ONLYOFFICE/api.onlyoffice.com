# CreatePictureForm

使用指定的图片表单属性创建图片表单。

## 语法

```javascript
expression.CreatePictureForm(formPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | 必需 | [PictureFormPr](../../Enumeration/PictureFormPr.md) |  | 图片表单属性。 |

## 返回值

[ApiPictureForm](../../ApiPictureForm/ApiPictureForm.md)

## 示例

此示例使用通用和特定的图片表单属性创建图片表单。

```javascript editor-forms
// How to create a picture form and add it to the paragraph.

// Add the ApiPictureForm object to the document to upload a photo and set its image by a URL.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({
	"key": "Personal information",
	"tip": "Upload your photo",
	"required": true,
	"placeholder": "Photo",
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));

```
