# CreateNumbering

使用 numType 参数指定的编号字符或符号为段落创建项目符号。

## 语法

```javascript
expression.CreateNumbering(numType, startAt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numType | 必需 | [BulletType](../../Enumeration/BulletType.md) |  | 段落将使用的编号类型。 |
| startAt | 必需 | number |  | 第一个编号段落的起始编号。 |

## 返回值

[ApiBullet](../../ApiBullet/ApiBullet.md)

## 示例

此示例使用 sType 参数指定的编号字符或符号为段落创建项目符号。

```javascript editor-xlsx
// How to create a numbered paragraphs or sentences.

// Create number bullets to number paragraphs.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(paragraph);
```
