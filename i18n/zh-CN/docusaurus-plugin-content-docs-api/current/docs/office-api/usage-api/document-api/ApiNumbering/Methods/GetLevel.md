# GetLevel

返回当前编号的指定级别。

## 语法

```javascript
expression.GetLevel(nLevel);
```

`expression` - 表示 [ApiNumbering](../ApiNumbering.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLevel | 必需 | number |  | 编号级别索引。此值必须在 0 到 8 之间。 |

## 返回值

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md)

## 示例

此示例展示如何获取编号的指定级别。

```javascript editor-docx
// How to find out the level of the bulleted paragraph.

// Print the level of numbering of the text.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	let numLvl = numbering.GetLevel(nLvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (nLvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
```
