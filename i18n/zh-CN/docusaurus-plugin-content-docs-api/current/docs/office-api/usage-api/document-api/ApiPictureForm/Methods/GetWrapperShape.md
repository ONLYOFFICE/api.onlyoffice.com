# GetWrapperShape

返回放置表单的形状，用于控制固定大小表单框架的位置和大小。

对于内联表单将返回 null 值。

继承自 [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md)。

## 语法

```javascript
expression.GetWrapperShape();
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

在文档中获取包裹图片表单的形状，以控制其位置和大小。

```javascript editor-docx
// How do I access the container shape of a picture form in a document?

// Get the outer shape holding a picture form to adjust its layout in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.ToFixed(10 * 240, 10 * 240);
let shape = pictureForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
