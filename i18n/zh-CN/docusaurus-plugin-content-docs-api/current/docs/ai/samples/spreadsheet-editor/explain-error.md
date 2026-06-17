---
description: 用自然语言解释单元格错误。
tags: ["Docs", "Plugins", "AI Tools", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 解释错误

此函数通过添加注释的方式，解释指定单元格中的错误。

## 提示词

- 解释活动单元格中的错误
- 解释特定单元格 A1 中的错误
- 解释单元格 B5 中的错误
- 根据用户输入解释 #DIV/0! 错误
- 根据用户输入解释 #N/A 错误
- 根据用户输入解释 #VALUE! 错误

## 自然语言触发示例：

以下是应触发错误解释的用户查询示例。

- 解释 A1 单元格中的错误
- 解释这个错误
- 为什么我的公式在 E33 单元格返回"#VALUE!"？
- 修复 E33 单元格中的电子表格错误
- 选定单元格中的错误是什么意思？
- 为什么会出现这个错误？
- 为什么是 N/A？
- 为什么会看到 #REF？
- 这个公式有什么问题？
- 解释公式错误
- 帮我修复此单元格错误
- 为什么是 div
- 为什么是 na
- ref 是什么
- name 错误的含义
- value 错误的原因

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "explainError",
  description:
    " Explains the error in the specified cell by adding a comment with the explanation. Supports common Excel errors like #DIV/0!, #N/A, #VALUE!, #REF!, and #NAME?. If there is no error in the cell, adds a comment indicating that.Specify the cell range or use the active/selected cell. Natural language triggers are supported to identify the error type from user input.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "cell range containing error to explain (e.g., 'A1'). If omitted, uses active/selected cell",
      },
      userInput: {
        type: "string",
        description: "raw user query that may contain natural language trigger",
      },
    },
    required: [],
  },

  examples: [
    {
      prompt: "Explain error in active cell",
      arguments: {},
    },
    {
      prompt: "Explain error in specific cell A1",
      arguments: { range: "A1" },
    },
    {
      prompt: "Explain error in cell B5",
      arguments: { range: "B5" },
    },
    {
      prompt: "Explain #DIV/0! error from user input",
      arguments: { userInput: "Why do I see #DIV/0! in my cell?" },
    },
    {
      prompt: "Explain #N/A error from user input",
      arguments: { userInput: "What does #N/A mean?" },
    },
    {
      prompt: "Explain #VALUE! error from user input",
      arguments: { userInput: "Explain the #VALUE! error" },
    },
  ],
});
```

### 参数

| Name      | Type   | Example              | Description                                                                                           |
| --------- | ------ | -------------------- | ----------------------------------------------------------------------------------------------------- |
| range     | string | "A1"                 | 指定包含待解释错误的单元格范围（如 'A1'）。如果省略，则使用活动/选定单元格。                           |
| userInput | string | "Explain this error" | 可能包含自然语言触发词的原始用户查询。                                                                |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.range = params.range;

  // Normalize error type based on user input triggers
  let normalizedError = null;
  if (params && params.userInput) {
    let text = params.userInput.toLowerCase();

    const triggers = ["why", "what", "explain", "meaning", "reason", "cause"];
    let hasTrigger = triggers.some((t) => text.includes(t));

    if (hasTrigger) {
      if (/div/.test(text)) normalizedError = "#DIV/0!";
      else if (/\bna\b/.test(text)) normalizedError = "#N/A";
      else if (/value/.test(text)) normalizedError = "#VALUE!";
      else if (/ref/.test(text)) normalizedError = "#REF!";
      else if (/name/.test(text)) normalizedError = "#NAME?";
    }
  }

  // Get error from the specified cell
  let errorData = null;
  if (!normalizedError) {
    errorData = await Asc.Editor.callCommand(function () {
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
      let error = cell.GetValue2();
      let cellAddress = cell.GetAddress();

      return {
        error: error,
        address: cellAddress,
        hasError: error && error.toString().startsWith("#"),
      };
    });
  } else {
    errorData = {
      error: normalizedError,
      address: Asc.scope.range || "?",
      hasError: true,
    };
  }

  // If no error, add comment indicating no error
  if (!errorData || !errorData.hasError) {
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
          cell.AddComment("There is no error in this cell", "AI Assistant");
        }
      }
    });
    return;
  }

  let argPrompt =
    "Explain the following Excel error in detail:\n\n" +
    "Error: " +
    errorData.error +
    "\n" +
    "Cell: " +
    errorData.address +
    "\n\n" +
    "IMPORTANT RULES:\n" +
    "1. Identify the exact meaning of this error type (e.g., division by zero, invalid reference).\n" +
    "2. Explain why this error commonly occurs.\n" +
    "3. Give clear, step-by-step reasoning of the possible cause in this specific cell.\n" +
    "4. Suggest practical ways to fix or avoid the error.\n" +
    "5. Keep explanation simple, clear, and beginner-friendly.\n" +
    "6. Mention common mistakes that lead to this error.\n" +
    "7. If multiple causes are possible, list them briefly in order of likelihood.\n" +
    "8. Keep the explanation concise but comprehensive.\n" +
    "9. Avoid filler text and unnecessary theory.\n" +
    "10. Response length should be under 1024 characters (recommended), maximum 32767.\n" +
    "11. Prioritize the most important fix suggestions if length constraint requires cuts.\n" +
    "12. Output must be plain text only, without Markdown, JSON, or special formatting.\n\n" +
    "13. Formatting rules: each numbered point must start on a new line; if you include multiple causes, format them as sub-items starting on new lines.\n\n" +
    "Please provide a detailed but concise explanation of this error.";

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
          // Create comment with error explanation
          let commentText = "Error Explanation:\n\n" + Asc.scope.explanation;
          cell.AddComment(commentText, "AI Assistant");
        }
      }
    });
  }
};

return func;
```

使用的方法：[GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetCells](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetValue2](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [GetAddress](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [AddComment](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/spreadsheet-editor/explain-error" dark />
