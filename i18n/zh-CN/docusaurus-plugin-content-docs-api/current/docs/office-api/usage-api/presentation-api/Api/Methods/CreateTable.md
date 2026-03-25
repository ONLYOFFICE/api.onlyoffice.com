# CreateTable

创建表格。

## 语法

```javascript
expression.CreateTable(nCols, nRows);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCols | 必需 |  |  | 列数。 |
| nRows | 必需 |  |  | 行数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

此示例创建 2x4 表格并将其插入演示文稿。

```javascript editor-pptx
// How to create new table with two rows and four columns.

// Add a table to the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
slide.RemoveAllObjects();
slide.AddObject(table);

```
