# changeParagraphStyle

This function modifies the visual style of the specified paragraph.

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "changeParagraphStyle";
func.params = [
    "parNumber (number): the paragraph number to apply style changes to",
    "style (string): the style name to apply to the paragraph"
];

func.examples = [
    "If you need to change the style of paragraph 3 to Heading 1, respond with:" +
    "[functionCalling (changeParagraphStyle)]: {\"parNumber\": 3, \"style\": \"Heading 1\"}"
];
```

### Parameters

| Name      | Type   | Example     | Description                                            |
|-----------|--------|-------------|--------------------------------------------------------|
| parNumber | number | 3           | The number of the paragraph to apply style changes to. |
| style     | string | "Heading 1" | The style name to apply to the paragraph.              |

### Prompts

- Change the style of paragraph 2 to Heading 1

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.parNumber = params.parNumber;
    Asc.scope.styleName = params.style;
    await Asc.Editor.callCommand(function(){
        let doc = Api.GetDocument();
        let par = doc.GetElement(Asc.scope.parNumber - 1);
        if (!par)
            return;

        let style = doc.GetStyle(Asc.scope.styleName);
        par.SetStyle(style);
    });            
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetElement.md), [GetStyle](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetStyle.md), [SetStyle](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetStyle.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![changeParagraphStyle function](/assets/images/plugins/change-paragraph-style-function.png#gh-light-mode-only)
![changeParagraphStyle function](/assets/images/plugins/change-paragraph-style-function.dark.png#gh-dark-mode-only)
![changeParagraphStyle result](/assets/images/plugins/change-paragraph-style-result.png#gh-light-mode-only)
![changeParagraphStyle result](/assets/images/plugins/change-paragraph-style-result.dark.png#gh-dark-mode-only)
