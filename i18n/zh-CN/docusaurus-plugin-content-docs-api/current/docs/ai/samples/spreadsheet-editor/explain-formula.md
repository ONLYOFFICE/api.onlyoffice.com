---
description: 用自然语言解释单元格公式。
tags: ["Docs", "Plugins", "AI Tools", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 解释公式

此函数解释指定范围中的公式；如果省略范围，则解释活动/选定范围中的公式。

## 提示词

- 解释活动单元格中的公式
- 解释单元格 A1 中的公式

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "explainFormula",
  description:
    "Analyzes and explains Excel formulas in natural language. Uses AI to provide detailed explanations of formula logic, function parameters, nested operations, and expected results. The explanation is added as a cell comment to the cell containing the formula. Particularly useful for understanding complex formulas with multiple nested functions or unfamiliar Excel functions. Keeps explanations concise (under 1024 characters recommended) while covering all essential information.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "Cell range containing formula to explain (e.g., 'A1'). If omitted, uses active/selected cell.",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Explain formula in active cell",
      arguments: {},
    },
    {
      prompt: "Explain formula in specific cell A1",
      arguments: { range: "A1" },
    },
    {
      prompt: "Explain formula in cell B5",
      arguments: { range: "B5" },
    },
  ],
});
```

### 参数

| Name  | Type   | Example | Description                                                                                         |
| ----- | ------ | ------- | --------------------------------------------------------------------------------------------------- |
| range | string | "A1"    | 包含待解释公式的单元格范围。如果省略，则使用活动或选定范围。                                         |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.range = params.range;

  let formulaData = await Asc.Editor.callCommand(function () {
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
      hasFormula: formula && formula.toString().startsWith("="),
    };
  });

  if (!formulaData || !formulaData.hasFormula) {
    return; // No formula to explain
  }

  let argPrompt =
    "Explain the following Excel formula in detail:\n\n" +
    "Formula: " +
    formulaData.formula +
    "\n" +
    "Cell: " +
    formulaData.address +
    "\n\n" +
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
  if (!requestEngine) return;

  let isSendedEndLongAction = false;
  async function checkEndAction() {
    if (!isSendedEndLongAction) {
      await Asc.Editor.callMethod("EndAction", [
        "Block",
        "AI (" + requestEngine.modelUI.name + ")",
      ]);
      isSendedEndLongAction = true;
    }
  }

  await Asc.Editor.callMethod("StartAction", [
    "Block",
    "AI (" + requestEngine.modelUI.name + ")",
  ]);
  await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

  let explanation = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      await checkEndAction();
    }
  );

  await checkEndAction();
  await Asc.Editor.callMethod("EndAction", ["GroupActions"]);

  // Add comment with explanation to the cell
  if (explanation) {
    Asc.scope.explanation = explanation;
    await Asc.Editor.callCommand(function () {
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

使用的方法：[GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetCells](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetFormula](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetFormula.md), [GetAddress](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [AddComment](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/spreadsheet-editor/explain-formula" dark />
