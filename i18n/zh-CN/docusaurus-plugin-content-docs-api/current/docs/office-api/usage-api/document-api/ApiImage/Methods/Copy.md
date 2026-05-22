# Copy

复制当前图像。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
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

复制图像并将副本添加到文档中的同一段落。

```javascript editor-docx
// How do I make a copy of an image in a document?

// Clone an image so that two identical pictures appear in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 45 * 36000);
paragraph.AddDrawing(image);

let copyImage = image.Copy();
paragraph.AddDrawing(copyImage);
```
