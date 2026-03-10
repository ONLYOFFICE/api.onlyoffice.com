# AddPictureContentControl

向文档添加新的图片内容控件。

## 语法

```javascript
expression.AddPictureContentControl(width, height);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 可选 | [EMU](../../Enumeration/EMU.md) |  | 图像的可选宽度。 |
| height | 可选 | [EMU](../../Enumeration/EMU.md) |  | 图像的可选高度。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例展示如何向文档添加图片内容控件：

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddPictureContentControl();
```
