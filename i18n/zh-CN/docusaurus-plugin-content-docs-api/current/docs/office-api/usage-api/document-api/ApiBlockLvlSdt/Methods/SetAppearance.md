# SetAppearance

设置内容控件的可视化效果。

## 语法

```javascript
expression.SetAppearance(type);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "boundingBox" \| "hidden" |  | 所需的可视化类型。 |

## 返回值

此方法不返回任何数据。

## 示例

更改文档中内容控件的视觉外观。

```javascript editor-docx
// How do I hide the border and frame of a content control in a document?

// Make a content control invisible to users while keeping its content visible in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);
```
