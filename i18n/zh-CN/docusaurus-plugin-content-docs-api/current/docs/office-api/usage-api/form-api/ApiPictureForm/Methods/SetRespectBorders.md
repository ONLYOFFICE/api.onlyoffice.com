# SetRespectBorders

缩放图像时遵守表单边框宽度。

## 语法

```javascript
expression.SetRespectBorders(isRespect);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isRespect | 可选 | boolean | true | 指定是否遵守表单边框宽度（true）或不遵守（false）。 |

## 返回值

boolean

## 示例

此示例在缩放图像时遵守表单边框宽度。

```javascript editor-forms
// How to make borders respected when increasing it.

// Set respect borders property of the picture form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetRespectBorders(true);
let respectBorders = pictureForm.IsRespectBorders();
paragraph = Api.CreateParagraph();
paragraph.AddText("The borders of the picture form in this document are respected when scaling the image: " + respectBorders);
doc.Push(paragraph);
```
