# ToJSON

将 ApiTable 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteTableStyles);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteTableStyles | 可选 | boolean | false | 指定是否将使用的表格样式写入 JSON 对象（true）或否（false）。 |

## 返回值

JSON

## 示例

此示例将表格对象转换为 JSON 对象。

```javascript editor-pptx
// How to get JSON object from the table.

// Get a slide by its index, convert its table to JSON and create another one from the JSON.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 4);
const json = table.ToJSON(true);
const tableFromJSON = Api.FromJSON(json);

const type = tableFromJSON.GetClassType();
const row = tableFromJSON.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type = " + type);
content.Push(paragraph);
slide.AddObject(tableFromJSON);

```
