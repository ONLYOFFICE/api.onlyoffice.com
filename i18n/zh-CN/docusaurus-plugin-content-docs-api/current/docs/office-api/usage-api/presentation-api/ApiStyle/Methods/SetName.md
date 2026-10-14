# SetName

为当前样式设置名称。

## 语法

```javascript
expression.SetName(styleName);
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| styleName | 必需 | string |  | 将用于当前样式的名称。 |

## 返回值

boolean

## 示例

在演示文稿中为表格样式设置新名称。

```javascript editor-pptx
// Helps when renaming a table style.

// Get a table style, rename it, and display the new name.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
style.SetName("My Custom Table Style");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("New style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
