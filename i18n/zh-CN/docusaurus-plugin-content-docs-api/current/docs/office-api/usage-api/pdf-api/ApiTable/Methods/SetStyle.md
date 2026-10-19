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
| oStyle | 必需 | ApiStyle |  | 要应用的表格样式。 |

## 返回值

boolean

## 示例

在 PDF 中将文档中的命名表格样式应用于当前表格。

```javascript editor-pdf
// Look up a built-in table style by name and apply it in a PDF.

// Create a table, retrieve an available style by name, and apply it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
const style = doc.GetStyle('Medium Style 2 - Accent 2');
table.SetStyle(style);
table.GetCell(0, 0).AddText('Set style for table: ' + style.GetName());
```
