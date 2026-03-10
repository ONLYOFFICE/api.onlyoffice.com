# SetPicture

设置图片内容控件的内容（图像）。
此方法通过从提供的 URL 设置图像来更新内容控件中的图片。
URL 应该是指向图像的互联网链接。

## 语法

```javascript
expression.SetPicture(imageUrl);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 必需 | string |  | 用于内容控件的图像 URL。目前仅支持互联网 URL。 |

## 返回值

boolean

## 示例

此示例展示如何为图片内容控件设置图像。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
contentControl.SetPicture('https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg');
```
