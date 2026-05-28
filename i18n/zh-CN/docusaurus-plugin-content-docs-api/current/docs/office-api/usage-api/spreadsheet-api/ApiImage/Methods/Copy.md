# Copy

创建指定图像的副本。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)

## 示例

在工作表上复制图像并将副本放在电子表格中原始图像旁边。

```javascript editor-xlsx
// How do I make a copy of an image in a spreadsheet?

// Clone an image and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let image = worksheet.AddImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 35 * 36000, 0, 2 * 36000, 2, 3 * 36000);

let copyImage = image.Copy();
worksheet.AddDrawing(copyImage, 4, 2 * 36000, 2, 3 * 36000);
```
