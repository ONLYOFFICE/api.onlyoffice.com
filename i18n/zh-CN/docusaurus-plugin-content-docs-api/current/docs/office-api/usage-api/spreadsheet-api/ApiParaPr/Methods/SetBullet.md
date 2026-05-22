# SetBullet

设置当前段落的项目符号或编号。

## 语法

```javascript
expression.SetBullet(oBullet);
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | 必需 | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | 使用 [Api#CreateBullet](../../Api/Methods/CreateBullet.md) 或 [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) 方法创建的项目符号对象。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为形状内的段落添加项目符号标记。

```javascript editor-xlsx
// How do I prepend a dash or symbol to lines of text in a paragraph in a spreadsheet?

// Mark each paragraph entry with a custom bullet character to create a visual list in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
let bullet = Api.CreateBullet("-");
paraPr.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
```
