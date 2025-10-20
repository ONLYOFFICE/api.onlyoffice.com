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
let func = new RegisteredFunction();
func.name = "changeTextStyle";
func.params = [
    "bold (boolean): whether to make the text bold",
    "italic (boolean): whether to make the text italic",
    "underline (boolean): whether to underline the text",
    "strikeout (boolean): whether to strike out the text",
    "fontSize (number): font size to apply to the selected text"
];

func.examples = [
    "If you need to make selected text bold and italic, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"bold\": true, \"italic\": true }",

    "If you need to underline the selected text, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"underline\": true }",

    "If you need to strike out the selected text, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"strikeout\": true }",

    "If you need to set the font size of selected text to 18, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"fontSize\": 18 }",

    "If you need to make selected text bold, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"bold\": true }",

    "If you need to make selected text non-italic, respond with:" +
    "[functionCalling (changeTextStyle)]: {\"italic\": false }"
];
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
func.call = async function(params) {
    Asc.scope.bold = params.bold;
    Asc.scope.italic = params.italic;
    Asc.scope.underline = params.underline;
    Asc.scope.strikeout = params.strikeout;
    Asc.scope.fontSize = params.fontSize;
    await Asc.Editor.callCommand(function(){
        let doc = Api.GetDocument();
        let range = doc.GetRangeBySelect();
        if (!range || "" === range.GetText())
        {
            doc.SelectCurrentWord();
            range = doc.GetRangeBySelect();
        }

        if (!range)
            return;

        if (undefined !== Asc.scope.bold)
            range.SetBold(Asc.scope.bold);

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
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [SelectCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SelectCurrentWord.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md), [SetItalic](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetItalic.md), [SetUnderline](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetUnderline.md), [SetStrikeout](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetStrikeout.md), [SetFontSize](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/SetFontSize.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/changeTextStyle.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/changeTextStyle.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
