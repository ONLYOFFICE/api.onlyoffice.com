# SetAppearance

设置内容控件的可视化类型。

## 语法

```javascript
expression.SetAppearance(type);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "boundingBox" \| "hidden" |  | 所需的可视化类型。 |

## 返回值

此方法不返回任何数据。

## 示例

控制文档中内联内容控件的视觉外观。

```javascript editor-docx
// How do I hide or show the border of an inline content control in a document?

// Make a content control invisible to the reader by setting its appearance to hidden in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.AddText("This is a content control with a hidden appearance");
paragraph.Push(contentControl);
```
