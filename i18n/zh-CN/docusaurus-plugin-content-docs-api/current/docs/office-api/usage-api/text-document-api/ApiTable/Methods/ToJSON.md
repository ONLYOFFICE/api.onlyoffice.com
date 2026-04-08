# ToJSON

将 ApiTable 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将表格对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the table object.

// Convert the table to json and add it to the document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
let json = table.ToJSON(false, true);
let tableFromJSON = Api.FromJSON(json);
tableFromJSON.SetTableBorderTop("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderRight("single", 32, 0, 51, 51, 51);
tableFromJSON.SetTableBorderInsideV("single", 32, 0, 255, 111, 6);
tableFromJSON.SetTableBorderInsideH("single", 32, 0, 255, 111, 6);
tableFromJSON.SetWidth("percent", 100);
doc.Push(tableFromJSON);
```
