---
description: Modify the style of selected or current text.
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Change text style

This function modifies the visual style of the selected text. If no text is selected, the current word is used by default.

## Prompts

- Make this text bold and underlined
- Underline this text
- Strike out this text
- Set the font size of this text to 18
- Make this text non-italic

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "changeTextStyle",
    description:
        "Modifies the visual style of the selected text. If no text is selected, the current word is used by default.",
    parameters: {
        type: "object",
        properties: {
            bold: {
                type: "boolean",
                description: "Whether to make the text bold.",
            },
            italic: {
                type: "boolean",
                description: "Whether to make the text italic.",
            },
            underline: {
                type: "boolean",
                description: "Whether to underline the text.",
            },
            strikeout: {
                type: "boolean",
                description: "Whether to strike out the text.",
            },
            fontSize: {
                type: "number",
                description: "Font size to apply to the selected text.",
            },
        },
        required: [],
    },
    examples: [
        {
            prompt: "Make selected text bold and italic",
            arguments: { bold: true, italic: true },
        },
        {
            prompt: "Underline this text",
            arguments: { underline: true },
        },
        {
            prompt: "Strike out this text",
            arguments: { strikeout: true },
        },
        {
            prompt: "Set the font size of this text to 18",
            arguments: { fontSize: 18 },
        },
        {
            prompt: "Make this text bold",
            arguments: { bold: true },
        },
        {
            prompt: "Make this text non-italic",
            arguments: { italic: false },
        },
    ],
});
```

### Parameters

| Name      | Type    | Example | Description                                  |
|-----------|---------|---------|----------------------------------------------|
| bold      | boolean | true    | Specifies whether to make the text bold.     |
| italic    | boolean | true    | Specifies whether to make the text italic.   |
| underline | boolean | true    | Specifies whether to underline the text.     |
| strikeout | boolean | true    | Specifies whether to strike out the text.    |
| fontSize  | number  | 18      | The font size to apply to the selected text. |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
        Asc.scope.bold = params.bold;
        Asc.scope.italic = params.italic;
        Asc.scope.underline = params.underline;
        Asc.scope.strikeout = params.strikeout;
        Asc.scope.fontSize = params.fontSize;
        await Asc.Editor.callCommand(function () {
            let doc = Api.GetDocument();
            let range = doc.GetRangeBySelect();
            if (!range || "" === range.GetText()) {
                doc.SelectCurrentWord();
                range = doc.GetRangeBySelect();
            }

            if (!range) return;

            if (undefined !== Asc.scope.bold) range.SetBold(Asc.scope.bold);

            if (undefined !== Asc.scope.italic)
                range.SetItalic(Asc.scope.italic);

            if (undefined !== Asc.scope.underline)
                range.SetUnderline(Asc.scope.underline);

            if (undefined !== Asc.scope.strikeout)
                range.SetStrikeout(Asc.scope.strikeout);

            if (undefined !== Asc.scope.fontSize)
                range.SetFontSize(Asc.scope.fontSize);
    });
};
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [SelectCurrentWord](../../../office-api/usage-api/document-api/ApiDocument/Methods/SelectCurrentWord.md), [SetBold](../../../office-api/usage-api/document-api/ApiRange/Methods/SetBold.md), [SetItalic](../../../office-api/usage-api/document-api/ApiRange/Methods/SetItalic.md), [SetUnderline](../../../office-api/usage-api/document-api/ApiRange/Methods/SetUnderline.md), [SetStrikeout](../../../office-api/usage-api/document-api/ApiRange/Methods/SetStrikeout.md), [SetFontSize](../../../office-api/usage-api/document-api/ApiRange/Methods/SetFontSize.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<Video src="/assets/images/plugins/functions-video/document-editor/change-text-style" dark />
