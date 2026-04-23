# LinkWithStyle

将指定的段落样式与当前编号级别链接。

## 语法

```javascript
expression.LinkWithStyle(oStyle);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 段落样式。 |

## 返回值

boolean

## 示例

此示例展示如何将编号级别与指定的标题样式链接。

```javascript editor-docx
// How to link the numbering with the style of another element.

// Apply the style of the element to the numbering.

const doc = Api.GetDocument();
const headings = [];

for (let nLvl = 0; nLvl < 3; ++nLvl) {
    const headingLvlStyle = doc.CreateStyle("Heading " + (nLvl + 1));
    const textPr = headingLvlStyle.GetTextPr();
    textPr.SetBold(true);
    textPr.SetColor(nLvl*125, 0, 0, false);
    headings.push(headingLvlStyle);
}

let numLvl, formatString;
const numbering = doc.CreateNumbering("numbered");
for (let nLvl = 0; nLvl < 3; ++nLvl) {
    numLvl = numbering.GetLevel(nLvl);
    formatString = "";
    for (let nFSLvl = 1; nFSLvl <= (nLvl + 1); ++nFSLvl) {
        formatString += "%" + nFSLvl + ".";
    }
        
    numLvl.SetCustomType("decimal", formatString, "left");
    numLvl.LinkWithStyle(headings[nLvl]);

    const para = Api.CreateParagraph();
    para.SetStyle(headings[nLvl]);
    para.AddText("This paragraph with style: " + headings[nLvl].GetName());
    doc.Push(para);
}

```
