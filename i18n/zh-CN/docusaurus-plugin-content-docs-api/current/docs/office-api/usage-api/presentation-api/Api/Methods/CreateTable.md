# CreateTable

创建表格。
:::danger[Breaking Change]
从版本 9.4.0 开始，参数顺序已从 `Api.CreateTable(cols, rows)` 更改为 `Api.CreateTable(rows, cols)`。
:::

## 语法

```javascript
expression.CreateTable(rows, cols);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rows | 必需 |  |  | 行数。 |
| cols | 必需 |  |  | 列数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

向演示文稿添加具有多行多列的表格。

```javascript editor-pptx
// How do I insert a table with specific dimensions in a presentation?

// Create a table with 2 rows and 4 columns and place it on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
slide.RemoveAllObjects();
slide.AddObject(table);
```
