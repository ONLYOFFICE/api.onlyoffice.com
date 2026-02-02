# changeTextStyle

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
(function () {
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

    return func;
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [SelectCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SelectCurrentWord.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md), [SetItalic](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetItalic.md), [SetUnderline](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetUnderline.md), [SetStrikeout](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetStrikeout.md), [SetFontSize](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetFontSize.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/changeTextStyle.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/changeTextStyle.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
