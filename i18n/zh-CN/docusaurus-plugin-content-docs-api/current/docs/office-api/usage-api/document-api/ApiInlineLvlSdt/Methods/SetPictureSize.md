# SetPictureSize

设置内容控件中图片的大小。
如果内容控件是图片，此方法会调整图像的宽度和高度。

## 语法

```javascript
expression.SetPictureSize(width, height);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 所需的图像宽度。 |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 所需的图像高度。 |

## 返回值

boolean

## 示例

调整文档中图片内容控件内图像的大小。

```javascript editor-docx
// How do I set the exact width and height of a picture content control in a document?

// Control the display dimensions of an embedded image to fit a fixed layout in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);
```
