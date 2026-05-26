# CreatePictureContentControl

创建新的图片容器。

## 语法

```javascript
expression.CreatePictureContentControl(width, height);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 可选 | [EMU](../../Enumeration/EMU.md) |  | 可选的图像宽度。 |
| height | 可选 | [EMU](../../Enumeration/EMU.md) |  | 可选的图像高度。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档的段落中插入图片占位符字段。

```javascript editor-docx
// How do I add an image placeholder that users can click to insert a picture in a document?

// Place a fixed-size picture content control inside a new paragraph in a document.

let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
