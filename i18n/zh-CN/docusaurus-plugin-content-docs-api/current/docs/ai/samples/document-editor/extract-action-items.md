---
description: 从选中的文本中提取待办事项。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 提取待办事项

此函数分析选中的文本、会议记录或文档片段，提取清晰的待办事项，并将其格式化为结构化列表。可选择是否删除原始文本。

## 提示词

- "从选中的文本中提取待办事项"
- "将当前段落中的会议记录转换为待办清单"
- "以编号列表形式提取整个文档中的所有待办事项"

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "extractActionItems",
  description:
    "Analyzes selected text, meeting notes, or a document section and extracts clear action items or to-dos, formatting them as a structured list. Can optionally remove the original text.",
  parameters: {
    type: "object",
    properties: {
      scope: {
        type: "string",
        description:
          "whether to extract action items from the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection')",
      },
      format: {
        type: "string",
        description:
          "how to format the extracted items - as 'bullet' or 'numbered' list (default is 'bullet')",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Extract action items from selected text",
      arguments: { scope: "selection", format: "bullet" },
    },
    {
      prompt: "Turn meeting notes in the current paragraph into a to-do list",
      arguments: { scope: "currentParagraph", format: "numbered" },
    },
    {
      prompt:
        "Extract all action items from the entire document as a numbered list",
      arguments: { scope: "entireDocument", format: "numbered" },
    },
    {
      prompt: "Extract action items from the selected text",
      arguments: { scope: "selection" },
    },
  ],
});
```

### 参数

| Name   | Type   | Example     | Description                                                                                                                 |
| ------ | ------ | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| scope  | string | "selection" | 从 'currentParagraph'（当前段落）、'selection'（选区）或 'entireDocument'（整个文档）中提取待办事项（默认为 'selection'）。 |
| format | string | "bullet"    | 提取项的格式化方式，可选 'bullet'（项目符号列表）或 'numbered'（编号列表，默认为 'bullet'）。                                   |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.scope = params.scope || "selection";
    Asc.scope.format = params.format || "bullet";

    let text = await Asc.Editor.callCommand(function () {
      let doc = Api.GetDocument();
      let content = "";
      if (Asc.scope.scope === "entireDocument") {
        content = doc.GetText();
      } else if (Asc.scope.scope === "currentParagraph") {
        let par = doc.GetCurrentParagraph();
        if (par) {
          par.Select();
          content = par.GetText();
        }
      } else {
        let range = doc.GetRangeBySelect();
        if (range && range.GetText()) content = range.GetText();
        else {
          let par = doc.GetCurrentParagraph();
          if (par) {
            par.Select();
            content = par.GetText();
          }
        }
      }
      return content;
    });

    if (!text || text.trim().length === 0) return;

    let argPrompt =
      "Extract all action items and to-dos from the following text.\n" +
      "Format your response EXACTLY as follows:\n" +
      "- First action item\n" +
      "- Second action item\n" +
      "- Third action item\n\n" +
      "Each action item MUST start with '- ' and be on its own line.\n" +
      "Do NOT include any explanations, summaries, or extra text.\n" +
      "If no action items are found, respond with 'No action items found.'\n\n" +
      text;

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
    await Asc.Editor.callMethod("StartAction", [
      "Block",
      "AI (" + requestEngine.modelUI.name + ")",
    ]);

    async function checkEndAction() {
      await Asc.Editor.callMethod("EndAction", [
        "Block",
        "AI (" + requestEngine.modelUI.name + ")",
      ]);
    }

    let actionItems = "";
    await requestEngine.chatRequest(argPrompt, false, async function (data) {
      if (!data) return;
      actionItems += data;
    });

    await checkEndAction();

    if (actionItems.trim() !== "No action items found.") {
      const normalizedText = actionItems.replace(/\s+- /g, "\n- ").trim();
      Asc.scope.actionItems = normalizedText
        .split(/\r?\n/)
        .map((item) => item.trim())
        .map((item) => item.replace(/^- /, ""))
        .filter((item) => item.length > 0);

      await Asc.Editor.callCommand(async function () {
        let doc = Api.GetDocument(),
          data = Asc.scope.actionItems;
        let numbering = doc.CreateNumbering(
          Asc.scope.format === "numbered" ? "numbered" : "bullet"
        );
        let numLvl = numbering.GetLevel(0);

        if (
          Asc.scope.scope === "entireDocument" ||
          Asc.scope.scope === "currentParagraph"
        ) {
          let contextPara =
            Asc.scope.scope === "entireDocument"
              ? doc.GetElement(0)
              : doc.GetCurrentParagraph();
          let paraPr = contextPara.GetTextPr();
          let currentParagraph = contextPara;

          for (let i = data.length - 1; i >= 0; i--) {
            let itemPara = Api.CreateParagraph();
            itemPara.AddText(data[i]);
            itemPara.SetTextPr(paraPr);
            itemPara.SetNumbering(numLvl);
            itemPara.SetContextualSpacing(true);
            currentParagraph.InsertParagraph(itemPara, "before", true);
            currentParagraph = itemPara;
          }

          if (Asc.scope.scope === "entireDocument") {
            while (contextPara) {
              let nextPara = contextPara.GetNext();
              contextPara.Delete();
              contextPara = nextPara;
            }
          } else {
            contextPara.Delete();
          }
        } else {
          let range = doc.GetRangeBySelect();

          let firstPara = range.GetParagraph(0);
          let paraPr = firstPara.GetTextPr();
          let currentParagraph = [];

          if (range.GetStartPos() !== firstPara.GetRange(0, 1).GetStartPos()) {
            let dummyParagraph = Api.CreateParagraph();
            dummyParagraph.SetContextualSpacing(true);
            currentParagraph.push(dummyParagraph);
          }

          for (let i = 0; i < data.length; i++) {
            let itemPara = Api.CreateParagraph();
            itemPara.AddText(data[i]);
            itemPara.SetTextPr(paraPr);
            itemPara.SetNumbering(numLvl);
            itemPara.SetContextualSpacing(true);
            currentParagraph.push(itemPara);
          }

          range.MoveCursorToPos(range.GetStartPos());
          range.Delete();
          doc.InsertContent(currentParagraph);
        }
      });
    }
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  };
  return func;
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetText](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetText.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetCurrentParagraph.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [CreateNumbering](../../../office-api/usage-api/document-api/ApiDocument/Methods/CreateNumbering.md), [GetLevel](../../../office-api/usage-api/document-api/ApiNumbering/Methods/GetLevel.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [GetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetTextPr.md), [SetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetTextPr.md), [SetNumbering](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetNumbering.md), [SetContextualSpacing](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetContextualSpacing.md), [InsertParagraph](../../../office-api/usage-api/document-api/ApiParagraph/Methods/InsertParagraph.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md), [Delete](../../../office-api/usage-api/document-api/ApiParagraph/Methods/Delete.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/extract-action-items" dark />
