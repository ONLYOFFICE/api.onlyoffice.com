---
sidebar_position: 
---

## Description

Removes all custom formatting and applies a default style.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    try {
        const oDocument = Api.GetDocument();

        // Create a new with default settings
        const defaultTextPr = Api.CreateTextPr();
        defaultTextPr.SetFontSize(24);
        defaultTextPr.SetFontFamily("Arial");
        defaultTextPr.SetBold(false);
        defaultTextPr.SetItalic(false);
        defaultTextPr.SetHighlight("white");
        defaultTextPr.SetColor(0, 0, 0);
        defaultTextPr.SetUnderline(false);

        const paragraphs = oDocument.GetAllParagraphs();

        for (let i = 0; i < paragraphs.length; i++) {
            // Apply text properties
            paragraphs[i].SetTextPr(defaultTextPr);
        }

        console.log("ende");
    } catch (error) {
        console.log(error);
    }
})();
```

Methods used: GetDocument, CreateTextPr, SetFontSize, SetFontFamily, SetBold, SetItalic, SetHighlight, SetColor, SetUnderline, GetAllParagraphs, SetTextPr

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub ClearFormatting()
    ActiveDocument.Content.ClearFormatting
    ActiveDocument.Styles("Normal").Apply ActiveDocument.Content
    MsgBox "All formatting removed and default style applied!"
End Sub
```

## Result

<!-- imgpath -->

![](/assets/images/plugins/remove-custom-formatting.png)