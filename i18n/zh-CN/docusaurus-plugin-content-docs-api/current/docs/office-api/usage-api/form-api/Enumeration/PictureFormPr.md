# PictureFormPr

图片表单属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [PictureFormPrBase](../Enumeration/PictureFormPrBase.md)

## 示例

使用通用和特定的图片表单属性创建图片表单。

```javascript editor-forms
// How to set the properties to the ApiPictureForm object.

// Specify the picture form properties like placeholder, tip text, position, key, etc.

let pictureFormPr = {
	"key": "Personal information",
	"tip": "Upload your photo",
	"required": true,
	"placeholder": "Photo",
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
};
let pictureForm = Api.CreatePictureForm(pictureFormPr);
```
