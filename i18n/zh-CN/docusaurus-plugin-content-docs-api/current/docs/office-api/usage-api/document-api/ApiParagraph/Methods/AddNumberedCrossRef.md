# AddNumberedCrossRef

向当前段落添加编号交叉引用。
💡 请注意，此段落必须在文档中。

## 语法

```javascript
expression.AddNumberedCrossRef(sRefType, oParaTo, bLink, bAboveBelow, sSepWith);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRefType | 必需 | [numberedRefTo](../../Enumeration/numberedRefTo.md) |  | 要插入的编号引用的文本或数值。 |
| oParaTo | 必需 | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 要引用的编号段落（必须在文档中）。 |
| bLink | 可选 | boolean | true | 指定引用是否作为超链接插入。 |
| bAboveBelow | 可选 | boolean | false | 指定是否应包含表示引用位置的「上方/下方」字样（不与 "text" 和 "aboveBelow" sRefType 一起使用）。 |
| sSepWith | 可选 | string | "" | 数字分隔符（仅与 "fullCtxParaNum" sRefType 一起使用）。 |

## 返回值

boolean

## 示例

此示例向段落添加编号交叉引用。

```javascript editor-docx
// How to create a numbered reference to the paragraph.

// Add a cross-reference to the numbered paragraph.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let i = 0; i < 8; ++i) {
	let numLvl = numbering.GetLevel(i);
	let formatString = "";
	for (let nTempLvl = 0; nTempLvl <= i; ++nTempLvl) 
		formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(i + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (i + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
let paragraph = Api.CreateParagraph();
paragraph.AddText("An example of the customized numbering type can be found in the paragraph № ");
doc.Push(paragraph);
paragraph.AddNumberedCrossRef("paraNum", numberedParagraphs[1], true, true);
```
