# SetCustomType

设置您自己的自定义编号类型。

## 语法

```javascript
expression.SetCustomType(sType, sTextFormatString, sAlign);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "none" \| "bullet" \| "decimal" \| "lowerRoman" \| "upperRoman" \| "lowerLetter" \| "upperLetter" \| "decimalZero" |  | 用于当前编号定义的自定义编号类型。 |
| sTextFormatString | 必需 | string |  | 此参数中的任何文本都将作为字面文本在此编号级别的每个实例中重复，但百分号 (%) 后跟数字的用法除外，它将用于指示在此级别使用的基于 1 的数字索引。高于此级别的任何级别数字都将被忽略。 |
| sAlign | 必需 | "left" \| "right" \| "center" |  | 应用于当前编号级别中文本运行的对齐类型。 |

## 返回值

boolean

## 示例

此示例设置您自己的自定义编号类型。

```javascript editor-docx
// How to set the custom type of the numbering.

// Apply the lower roman style to the numbering level.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let nTempLvl = 1; nTempLvl <= (lvl + 1); ++nTempLvl) formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
```
