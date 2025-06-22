# LinkWithStyle

Links the specified paragraph style with the current numbering level.

## Syntax

```javascript
expression.LinkWithStyle(oStyle);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The paragraph style. |

## Returns

boolean

## Example

This shows how to link numbering level with the specified heading style.

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
