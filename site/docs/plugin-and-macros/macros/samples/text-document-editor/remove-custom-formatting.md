# Remove custom formatting 

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

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateTextPr](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateTextPr.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md), [SetColor](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md), [SetUnderline](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetUnderline.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [SetTextPr](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetTextPr.md)  

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