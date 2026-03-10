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

此示例展示如何创建图片内容控件。

```javascript editor-docx
let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
