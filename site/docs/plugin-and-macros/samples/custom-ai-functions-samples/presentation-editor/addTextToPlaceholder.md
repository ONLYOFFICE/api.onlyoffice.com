# addTextToPlaceholder

This function adds any text content to the specified or the current slide. Use this function for all text insertion requests, including recipes, lists, instructions, notes, ideas, or other text content.

## Prompts

- Add recipe for coffee: Coffee Recipe:\n1. Grind coffee beans\n2. Heat water to 95°C\n3. Pour water over coffee\n4. Wait 4 minutes\n5. Enjoy
- Insert shopping list: Shopping List:\n- Milk\n- Bread\n- Eggs\n- Coffee\n- Sugar
- Add title Introduction to slide 9

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "addTextToPlaceholder";
func.description = "Universal function for adding ANY text content to slides. Use this for ALL text addition requests: recipes, lists, instructions, notes, ideas, or any other text content.";
func.params = [
    "slideNumber (number): the slide number to add text to (optional, default current slide)",
    "text (string): ANY text content to add - recipes, lists, instructions, notes, ideas, descriptions, stories, data, or whatever user asks to add",
    "textType (string): type of text - 'body', 'chart', 'clipArt', 'ctrTitle', 'diagram', 'date', 'footer', 'header', 'media', 'object', 'picture', 'sldImage', 'sldNumber', 'subTitle', 'table', 'title' (optional, default 'body')",
    "prompt (string): AI instructions for text enhancement or generation (optional)"
];

func.examples = [
    "IMPORTANT: Use this function for ANY text addition request!",
    "if user asks 'add [anything]' or 'write [anything]' or 'create text about [anything]', respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"[generated or specified content]\", \"textType\": \"body\"}",
    "if user asks 'add recipe for coffee' or just 'recipe for coffee', respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"Coffee Recipe:\\n1. Grind coffee beans\\n2. Heat water to 95°C\\n3. Pour water over coffee\\n4. Wait 4 minutes\\n5. Enjoy\", \"textType\": \"body\"}",
    "if user asks 'insert shopping list' or 'shopping list', respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"Shopping List:\\n- Milk\\n- Bread\\n- Eggs\\n- Coffee\\n- Sugar\", \"textType\": \"body\"}",
    "if user asks 'put some text' or 'add some information', respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"[the requested information]\", \"textType\": \"body\"}",
    "if user asks 'add meeting notes' or 'meeting agenda', respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"Meeting Notes:\\n- Introduction\\n- Main topics\\n- Action items\\n- Next steps\", \"textType\": \"body\"}",
    "if user asks to add title to slide 1, respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"slideNumber\": 1, \"text\": \"Introduction\", \"textType\": \"title\"}",
    "if user asks to generate content, respond with:\n" +
    "[functionCalling (addTextToPlaceholder)]: {\"text\": \"Topic\", \"textType\": \"body\", \"prompt\": \"generate detailed content about this topic\"}"
];
```

### Parameters

| Name        | Type   | Example                                      | Description                                                                                                                                                                                                           |
|-------------|--------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slideNumber | number | 2                                            | The slide number where the text will be added. If omitted, the text is added to the current slide.                                                                                                                    |
| text        | string | "Introduction"                               | The text content to add. Can include recipes, lists, instructions, notes, ideas, descriptions, stories, data, or any other text requested by the user.                                                                |
| textType    | string | "title"                                      | The text type can be "body", "chart", "clipArt", "ctrTitle", "diagram", "date", "footer", "header", "media", "object", "picture", "sldImage", "sldNumber", "subTitle", "table", "title". The default value is "body". |
| prompt      | string | "generate detailed content about this topic" | The AI instructions for text enhancement or generation.                                                                                                                                                               |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.slideNum = params.slideNumber;
    Asc.scope.text = params.text;
    Asc.scope.textType = params.textType || "body";
    Asc.scope.prompt = params.prompt;

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide;

        if (Asc.scope.slideNum) {
            slide = presentation.GetSlideByIndex(Asc.scope.slideNum - 1);
        }
        else {
            slide = presentation.GetCurrentSlide();
        }

        if (!slide) return;

        const placeholderGroups = {
            titles: ['title', 'ctrTitle'],
            subTitles: ['subTitle'],
            content: ['body', 'object', 'unknown'],
            media: ['picture', 'chart', 'media', 'clipArt', 'diagram', 'sldImage', 'table'],
            footer: ['footer', 'date', 'sldNumber', 'header']
        };

        function findPlaceholderGroup(type) {
            for (let groupName in placeholderGroups) {
                if (placeholderGroups[groupName].includes(type)) {
                    return placeholderGroups[groupName];
                }
            }
            return [type];
        }

        function findShapeByPlaceholderType(slide, placeholderTypes) {
            let allDrawings = slide.GetAllDrawings();

            for (let type of placeholderTypes) {
                for (let i = 0; i < allDrawings.length; i++) {
                    let drawing = allDrawings[i];

                    let ph = drawing.GetPlaceholder();
                    if (ph) {
                        if (ph.GetType() === type) {
                            return {shape: drawing, foundType: type};
                        }
                    }
                }
            }

            return null;
        }

        let placeholderGroup = findPlaceholderGroup(Asc.scope.textType);

        let searchResult = findShapeByPlaceholderType(slide, placeholderGroup);
        let targetShape = searchResult ? searchResult.shape : null;
        let foundType = searchResult ? searchResult.foundType : null;

        if (!targetShape && !placeholderGroups.content.includes(Asc.scope.textType)) {
            searchResult = findShapeByPlaceholderType(slide, placeholderGroups.content);
            targetShape = searchResult ? searchResult.shape : null;
            foundType = searchResult ? searchResult.foundType : null;
        }

        let bNewShape = false;
        if (!targetShape) {
            let slideWidth = presentation.GetWidth();
            let slideHeight = presentation.GetHeight();

            let sizes = {
                title: {width: 0.8, height: 0.1},
                ctrTitle: {width: 0.8, height: 0.1},
                subTitle: {width: 0.8, height: 0.08},
                body: {width: 0.8, height: 0.6},
                object: {width: 0.8, height: 0.6},
                picture: {width: 0.5, height: 0.4},
                chart: {width: 0.6, height: 0.5},
                table: {width: 0.8, height: 0.6},
                media: {width: 0.6, height: 0.5},
                clipArt: {width: 0.3, height: 0.3},
                diagram: {width: 0.7, height: 0.5},
                sldImage: {width: 0.6, height: 0.5},
                footer: {width: 0.8, height: 0.06},
                header: {width: 0.8, height: 0.06},
                date: {width: 0.2, height: 0.04},
                sldNumber: {width: 0.1, height: 0.04}
            };

            let size = sizes[Asc.scope.textType] || sizes.body;
            let shapeWidth = slideWidth * size.width;
            let shapeHeight = slideHeight * size.height;
            let x = (slideWidth - shapeWidth) / 2;
            let y = (slideHeight - shapeHeight) / 2;

            let oFill = Api.CreateNoFill();
            let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
            targetShape = Api.CreateShape("rect", shapeWidth, shapeHeight, oFill, oStroke);
            targetShape.SetPosition(x, y);

            slide.AddObject(targetShape);
            foundType = Asc.scope.textType;
            bNewShape = true;
        }

        let docContent = targetShape.GetDocContent();
        if (docContent) {
            let internalContent = docContent.Content || docContent;

            while (internalContent.GetElementsCount() > 1) {
                internalContent.RemoveElement(1);
            }

            let lines = Asc.scope.text.split('\n').filter(line => line.trim() !== '');

            if (lines.length === 1) {
                let paragraph = internalContent.GetElement(0);
                if (paragraph) {
                    paragraph.RemoveAllElements();
                    paragraph.AddText(lines[0]);
                }
            }
            else {
                let firstParagraph = internalContent.GetElement(0);
                if (firstParagraph) {
                    firstParagraph.RemoveAllElements();
                    let run = firstParagraph.AddText(lines[0]);
                    if (bNewShape) {
                        run.SetFill(Api.CreateSolidFill(Api.CreateSchemeColor("tx1")));
                    }
                }

                for (let i = 1; i < lines.length; i++) {
                    let newParagraph = Api.CreateParagraph();
                    let run = newParagraph.AddText(lines[i]);
                    if (bNewShape) {
                        run.SetFill(Api.CreateSolidFill(Api.CreateSchemeColor("tx1")));
                    }
                    internalContent.Push(newParagraph);
                }
            }
            return;
        }
        return;
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetPlaceholder](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetPlaceholder.md), [GetType](/docs/office-api/usage-api/presentation-api/ApiPlaceholder/Methods/GetType.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateNoFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateNoFill.md), [CreateStroke](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md), [CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [RemoveElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveElement.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [RemoveAllElements](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetFill](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateSchemeColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSchemeColor.md), [CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/addTextToPlaceholder.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/addTextToPlaceholder.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
