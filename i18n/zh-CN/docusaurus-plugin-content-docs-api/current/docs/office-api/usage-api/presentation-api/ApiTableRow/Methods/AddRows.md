# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 指定行是添加在当前行之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在演示文稿中从某一行向表格添加新行。

```javascript editor-pptx
// Useful for adding rows after a specific row.

// Insert two new rows after the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row")
row.GetCell(0).GetContent().Push(para);
row.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);
```
