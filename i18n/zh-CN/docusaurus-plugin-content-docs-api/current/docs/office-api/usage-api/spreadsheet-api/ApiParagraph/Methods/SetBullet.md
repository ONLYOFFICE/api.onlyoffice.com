# SetBullet

设置当前段落的项目符号或编号。

继承自 [ApiParaPr.SetBullet](../../ApiParaPr/Methods/SetBullet.md)。

## 语法

```javascript
expression.SetBullet(oBullet);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | 必需 | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | 使用 [Api#CreateBullet](../../Api/Methods/CreateBullet.md) 或 [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) 方法创建的项目符号对象。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为形状内的段落添加短划线项目符号。

```javascript editor-xlsx
// How do I turn a paragraph into a bulleted list item in a spreadsheet?

// Mark a line of text as a list entry by attaching a custom bullet character in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
```
