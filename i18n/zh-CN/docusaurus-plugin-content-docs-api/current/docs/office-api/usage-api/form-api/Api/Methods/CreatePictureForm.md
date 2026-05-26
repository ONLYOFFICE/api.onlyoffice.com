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

在文档中插入用户可以添加照片的图像上传字段。

```javascript editor-forms
// How do I create an image field for users to upload pictures in a document?

// Enable users to fill in a form by selecting or uploading image files in a document.

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
