# GetAllImages

返回当前工作表中的所有图像。

## 语法

```javascript
expression.GetAllImages();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)[]

## 示例

检索电子表格工作表上嵌入的每个图像。

```javascript editor-xlsx
// How do I list all images placed on a sheet in a spreadsheet?

// Collect the full set of images from a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
let images = worksheet.GetAllImages();
let classType = images[0].GetClassType();
worksheet.GetRange("A10").SetValue("Class Type = " + classType);
```
