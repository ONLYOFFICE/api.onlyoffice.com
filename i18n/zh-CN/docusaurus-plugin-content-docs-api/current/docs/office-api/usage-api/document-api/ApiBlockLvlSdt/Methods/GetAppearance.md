# GetAppearance

获取内容控件的可视化效果。

## 语法

```javascript
expression.GetAppearance();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"boundingBox" \| "hidden"

## 示例

读取文档中内容控件的视觉外观设置。

```javascript editor-docx
// How do I check how a content control is displayed in a document?

// Display whether a content control shows a bounding box, tags, or is hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateBlockLvlSdt();
let appearance = contentControl.GetAppearance();
contentControl.GetContent().GetElement(0).AddText("The appearance of this content control: " + appearance);
doc.Push(contentControl);
```
