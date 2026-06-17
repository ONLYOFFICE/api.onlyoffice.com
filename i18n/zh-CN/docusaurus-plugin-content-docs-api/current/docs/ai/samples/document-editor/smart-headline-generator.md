---
description: 根据文档内容生成标题。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 智能标题生成器

此函数根据当前选中的文本（段落、幻灯片或章节）生成清晰、相关的标题。标题旨在准确概括内容，而非过分追求吸引眼球。

## 提示词

- "为选中的文本生成标题"
- "为当前段落撰写标题"
- "创建一个能代表整篇文档的标题"
- "为公告建议一个简洁的标题"

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "smartHeadlineGenerator",
  description:
    "Generates a clear and relevant headline from the currently selected text (paragraph, slide, or section). This headline is meant to accurately represent the content, not be overly catchy.",
  parameters: {
    type: "object",
    properties: {
      scope: {
        type: "string",
        description:
          "whether to summarize the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection')",
      },
    },
    required: ["prompt"],
  },
  examples: [
    {
      prompt: "Generate a headline for the selected text",
      arguments: {
        scope: "selection",
        prompt: "Generate a clear headline for this text",
      },
    },
    {
      prompt: "Write a headline for the current paragraph",
      arguments: {
        scope: "currentParagraph",
        prompt: "Write a precise headline for this paragraph",
      },
    },
    {
      prompt: "Create a headline",
      arguments: {
        scope: "entireDocument",
        prompt: "Create a headline that represents the full document",
      },
    },
    {
      prompt: "Suggest a simple headline for an announcement",
      arguments: {
        scope: "selection",
        prompt: "Provide a straightforward headline for this announcement",
      },
    },
    {
      prompt:
        "Generate a headline for the current paragraph without extra instructions",
      arguments: { scope: "currentParagraph" },
    },
  ],
});
```

### 参数

| Name  | Type   | Example     | Description                                                                                                 |
| ----- | ------ | ----------- | ----------------------------------------------------------------------------------------------------------- |
| scope | string | "selection" | 对 'currentParagraph'（当前段落）、'selection'（选区）或 'entireDocument'（整个文档）生成标题（默认为 'selection'）。 |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
    let scope = params.scope || "selection";

    Asc.scope.scope = scope;
    let text = await Asc.Editor.callCommand(function () {
      let doc = Api.GetDocument();
      let content = "";
      // console.log('scope', Asc.scope.scope);
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
        if (range && range.GetText()) {
          content = range.GetText();
        } else {
          let par = doc.GetCurrentParagraph();
          if (par) {
            par.Select();
            content = par.GetText();
          }
        }
      }
      return content;
    });
    if (!text) return;
    let argPrompt =
      params.prompt +
      ":\n" +
      text +
      "\n Answer with only the headline, do not add explanations.";

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
    await Asc.Editor.callMethod("StartAction", [
      "Block",
      "AI (" + requestEngine.modelUI.name + ")",
    ]);

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

    let resultHeading = "";
    await requestEngine.chatRequest(argPrompt, false, async function (data) {
      if (!data) return;
      resultHeading += data;
    });

    await checkEndAction();
    if (resultHeading.startsWith('"') && resultHeading.endsWith('"')) {
      resultHeading = resultHeading.slice(1, -1);
    }
    Asc.scope.data = resultHeading;
    await Asc.Editor.callCommand(async function () {
      let doc = Api.GetDocument(),
        data = Asc.scope.data;
      if (
        Asc.scope.scope === "entireDocument" ||
        Asc.scope.scope === "currentParagraph"
      ) {
        const contextPara =
          Asc.scope.scope === "entireDocument"
            ? doc.GetElement(0)
            : doc.GetCurrentParagraph();
        const textProperties = contextPara.GetTextPr();
        let headLine = Api.CreateParagraph();
        headLine.AddText(data);
        headLine.SetTextPr(textProperties);
        contextPara.InsertParagraph(headLine, "before", true);
      } else {
        let range = doc.GetRangeBySelect();
        if (!range) return;
        range.AddText(data + "\n\n", "before");
      }
    });
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  };
  return func;
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetText](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetText.md), [GetText(Paragraph)](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [GetText(Range)](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetCurrentParagraph.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocumentContent/Methods/GetElement.md), [GetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetTextPr.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiRun/Methods/AddText.md), [SetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetTextPr.md), [InsertParagraph](../../../office-api/usage-api/document-api/ApiParagraph/Methods/InsertParagraph.md), [AddText(Range)](../../../office-api/usage-api/document-api/ApiRange/Methods/AddText.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/smart-headline-generator" dark />
