# explainFormula

This function explains a formula from the specified range or, if omitted, the active/selected range.

## Prompts

- Explain a formula in the active cell
- Explain a formula in cell A1

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "explainFormula";
func.params = [
    "range (string, optional): cell range containing formula to explain (e.g., 'A1'). If omitted, uses active/selected cell"
];

func.examples = [
    "To explain formula in active cell, respond:" +
    "[functionCalling (explainFormula)]: {}",

    "To explain formula in specific cell A1, respond:" +
    "[functionCalling (explainFormula)]: {\"range\": \"A1\"}",

    "To explain formula in cell B5, respond:" +
    "[functionCalling (explainFormula)]: {\"range\": \"B5\"}"
];
```

### Parameters

| Name  | Type   | Example | Description                                                                                         |
|-------|--------|---------|-----------------------------------------------------------------------------------------------------|
| range | string | "A1"    | The cell range containing the formula to explain. If omitted, the active or selected range is used. |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.range = params.range;

    // Get formula from the specified cell
    let formulaData = await Asc.Editor.callCommand(function(){
        let ws = Api.GetActiveSheet();
        let _range;

        if (!Asc.scope.range) {
            _range = Api.GetSelection();
        } else {
            _range = ws.GetRange(Asc.scope.range);
        }

        if (!_range || !_range.GetCells(1, 1)) {
            return null;
        }

        let cell = _range.GetCells(1, 1);
        let formula = cell.GetFormula();
        let cellAddress = cell.GetAddress();
        
        return {
            formula: formula,
            address: cellAddress,
            hasFormula: formula && formula.toString().startsWith('=')
        };
    });

    if (!formulaData || !formulaData.hasFormula) {
        return; // No formula to explain
    }
    let argPrompt = "Explain the following Excel formula in detail:\n\n" +
        "Formula: " + formulaData.formula + "\n" +
        "Cell: " + formulaData.address + "\n\n" +
        "IMPORTANT RULES:\n" +
        "1. Provide a clear, detailed explanation of what the formula does.\n" +
        "2. Break down each part of the formula if it's complex.\n" +
        "3. Explain the functions used and their parameters.\n" +
        "4. Describe the expected result or output.\n" +
        "5. Use simple, understandable language.\n" +
        "6. If there are nested functions, explain the order of operations.\n" +
        "7. Mention any potential issues or common mistakes.\n" +
        "8. Keep the explanation concise but comprehensive.\n" +
        "9. Be brief and avoid unnecessary verbose explanations.\n" +
        "10. Get straight to the point without filler text.\n" +
        "11. Focus only on essential information.\n" +
        "12. Keep response length under 1024 characters (recommended), maximum 32767 characters.\n" +
        "13. Prioritize the most important information if length constraint requires cuts.\n\n" +
        "Please provide a detailed but concise explanation of this formula.";

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;

    let isSendedEndLongAction = false;
    async function checkEndAction() {
        if (!isSendedEndLongAction) {
            await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            isSendedEndLongAction = true;
        }
    }

    await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    let explanation = await requestEngine.chatRequest(argPrompt, false, async function(data) {
        if (!data)
            return;
        await checkEndAction();
    });

    await checkEndAction();
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);

    // Add comment with explanation to the cell
    if (explanation) {
        Asc.scope.explanation = explanation;
        await Asc.Editor.callCommand(function(){
            let ws = Api.GetActiveSheet();
            let _range;

            if (!Asc.scope.range) {
                _range = Api.GetSelection();
            } else {
                _range = ws.GetRange(Asc.scope.range);
            }

            if (_range) {
                let cell = _range.GetCells(1, 1);
                if (cell) {
                    // Create comment with formula explanation
                    let commentText = "Formula Explanation:\n\n" + Asc.scope.explanation;
                    cell.AddComment(commentText, "AI Assistant");
                }
            }
        });
    }
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetFormula](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetFormula.md), [GetAddress](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [AddComment](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![explainFormula](/assets/images/plugins/functions-gifs/explain-formula-function.gif#gh-light-mode-only)
![explainFormula](/assets/images/plugins/functions-gifs/explain-formula-function.dark.gif#gh-dark-mode-only)
