---
description: 在文档中插入新页面。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 插入页面

此函数在文档的指定位置插入新页面。

## 提示词

- 在当前位置插入一页
- 在文档末尾添加一页
- 在文档开头添加一页

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertPage",
    description:
        "Inserts a new page into the document at a specified location.",
    parameters: {
        type: "object",
        properties: {
            location: {
                type: "string",
                description:
                    "Where to insert the new page ('current', 'start', or 'end')",
            },
        },
        required: ["location"],
    },
    examples: [
        {
            prompt: "Insert a page at the current location",
            arguments: { location: "current" },
        },
        {
            prompt: "Add a page at the end of the document",
            arguments: { location: "end" },
        },
        {
            prompt: "Add a page at the start of the document",
            arguments: { location: "start" },
        },
    ],
});

```

### 参数

| Name     | Type   | Example   | Description                                                          |
|----------|--------|-----------|----------------------------------------------------------------------|
| location | string | "current" | 指定新页面的插入位置（"current"、"start" 或 "end"）。 |

## 函数执行 {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "insertPage",
        description:
            "Inserts a new page into the document at a specified location.",
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description:
                        "Where to insert the new page ('current', 'start', or 'end')",
                },
            },
            required: ["location"],
        },
        examples: [
            {
                prompt: "Insert a page at the current location",
                arguments: { location: "current" },
            },
            {
                prompt: "Add a page at the end of the document",
                arguments: { location: "end" },
            },
            {
                prompt: "Add a page at the start of the document",
                arguments: { location: "start" },
            },
        ],
    });

    func.call = async function (params) {
        Asc.scope.location = params.location;

        await Asc.Editor.callCommand(function () {
            let doc = Api.GetDocument();
            if ("start" === Asc.scope.location) doc.MoveCursorToStart();
            else if ("end" === Asc.scope.location) doc.MoveCursorToEnd();

            Api.GetDocument().InsertBlankPage();
        });
    };
    return func;
})();
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToEnd.md), [InsertBlankPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertBlankPage.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/insert-page" dark />
