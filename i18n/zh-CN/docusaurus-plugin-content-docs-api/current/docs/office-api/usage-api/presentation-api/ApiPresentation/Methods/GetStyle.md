# GetStyle

按名称返回演示文稿样式。

## 语法

```javascript
expression.GetStyle(sStyleName);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | 必需 | string |  | 要查找的表格样式名称。 |

## 返回值

[ApiStyle](../../ApiStyle/ApiStyle.md) \| null

## 示例

获取命名表格样式，对其重命名并将其应用于表格。

```javascript editor-pptx
// A built-in table style can be retrieved by name and then customized.

// Fetch "Dark Style 1 - Accent 2", rename it, and apply it to a 3×3 table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
style.SetName("My Custom Table Style");
const paragraph = Api.CreateParagraph();
paragraph.AddText("New style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
