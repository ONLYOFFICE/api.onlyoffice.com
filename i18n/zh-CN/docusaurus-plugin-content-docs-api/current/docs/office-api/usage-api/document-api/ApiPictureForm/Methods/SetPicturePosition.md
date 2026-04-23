# SetPicturePosition

设置当前表单中图片的位置：
-**0** - 图片放置在左侧/顶部；
-**50** - 图片放置在中心；
-**100** - 图片放置在右侧/底部。

## 语法

```javascript
expression.SetPicturePosition(nShiftX, nShiftY);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nShiftX | 必需 | [percentage](../../Enumeration/percentage.md) |  | 以百分比表示的水平位置。 |
| nShiftY | 必需 | [percentage](../../Enumeration/percentage.md) |  | 以百分比表示的垂直位置。 |

## 返回值

boolean

## 示例

此示例设置表单中图片的位置。

```javascript editor-docx
// How to move the picture inside the form.

// Specify the picture position of the form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetPicturePosition(70, 70);
let position = pictureForm.GetPicturePosition();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture position: ");
paragraph.AddLineBreak();
for (let i = 0; i < position.length; i++ ){
	let shift = position[i];
	paragraph.AddText("" + shift);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);
```
