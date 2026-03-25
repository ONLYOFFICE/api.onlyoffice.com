# SetScaleFlag

设置当前图片表单的缩放条件。

## 语法

```javascript
expression.SetScaleFlag(sScaleFlag);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScaleFlag | 必需 | [ScaleFlag](../../Enumeration/ScaleFlag.md) |  | 图片缩放条件："always"、"never"、"tooBig" 或 "tooSmall"。 |

## 返回值

boolean

## 示例

此示例设置当前图片表单的缩放条件。

```javascript editor-forms
// How to set the image scale flag of the form.

// Make the picture scalable.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetScaleFlag("tooBig");
let scaleFlag = pictureForm.GetScaleFlag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture scale flag: " + scaleFlag);
doc.Push(paragraph);
```
