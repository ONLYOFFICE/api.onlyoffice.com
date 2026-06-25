---
description: 修改选中文本或当前文本的样式。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 更改文本样式

此函数修改选中文本的视觉样式。如果未选中任何文本，则默认使用当前光标所在的单词。

## 提示词

- 将此文本设为粗体并添加下划线
- 为此文本添加下划线
- 为此文本添加删除线
- 将此文本的字号设为 18
- 取消此文本的斜体格式

## 函数注册 {#function-registration}

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

### 参数

| Name      | Type    | Example | Description                                  |
|-----------|---------|---------|----------------------------------------------|
| bold      | boolean | true    | 指定是否将文本设为粗体。     |
| italic    | boolean | true    | 指定是否将文本设为斜体。   |
| underline | boolean | true    | 指定是否为文本添加下划线。     |
| strikeout | boolean | true    | 指定是否为文本添加删除线。    |
| fontSize  | number  | 18      | 要应用于选中文本的字体大小。 |

## 函数执行 {#function-execution}

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

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](../../../office-api/usage-api/document-api/ApiRange/Methods/GetText.md), [SelectCurrentWord](../../../office-api/usage-api/document-api/ApiDocument/Methods/SelectCurrentWord.md), [SetBold](../../../office-api/usage-api/document-api/ApiRange/Methods/SetBold.md), [SetItalic](../../../office-api/usage-api/document-api/ApiRange/Methods/SetItalic.md), [SetUnderline](../../../office-api/usage-api/document-api/ApiRange/Methods/SetUnderline.md), [SetStrikeout](../../../office-api/usage-api/document-api/ApiRange/Methods/SetStrikeout.md), [SetFontSize](../../../office-api/usage-api/document-api/ApiRange/Methods/SetFontSize.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/change-text-style" dark />
