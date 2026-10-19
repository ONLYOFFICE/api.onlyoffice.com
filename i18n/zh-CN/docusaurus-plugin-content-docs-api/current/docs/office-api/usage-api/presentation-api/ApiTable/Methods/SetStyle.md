# SetStyle

设置当前表格的样式。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 要应用的表格样式。 |

## 返回值

boolean

## 示例

将演示文稿中的命名表格样式应用于当前表格。

```javascript editor-pptx
// SetStyle looks up the style by name from the presentation's available table styles.

// Create a table, retrieve the first available style by name, and apply it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
slide.AddObject(table);
const style = presentation.GetStyle("Medium Style 2 - Accent 2");
table.SetStyle(style);
table.GetCell(0,0).AddText('Set style for table: ' + style.GetName());
```
