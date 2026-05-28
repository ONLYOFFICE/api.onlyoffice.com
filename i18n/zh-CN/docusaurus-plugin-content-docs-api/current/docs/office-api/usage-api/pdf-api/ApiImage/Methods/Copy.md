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

复制图像并将副本放在 PDF 的另一页上。

```javascript editor-pdf
// How do I make a copy of an image in a PDF?

// Create an exact duplicate of an image and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 60 * 36000);
image.SetPosition(608400, 1267200);
page.AddObject(image);

const copyImage = image.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyImage);
```
