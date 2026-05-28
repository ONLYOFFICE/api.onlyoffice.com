# SetValue

为图片表单设置图像。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 图像源（URL 或 base64 编码图像）。 |

## 返回值

boolean

## 示例

```javascript editor-docx
// The SetValue method of ApiPictureForm is a shorthand for SetImage that fits the unified value interface.

// Create a picture form and assign an image from a URL using SetValue.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Photo", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
