---
description: 在文档中插入格式化列表。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 插入列表

此函数在当前光标位置或文档的开头/末尾创建简单的编号列表或项目符号列表。

## 提示词

- 创建包含以下项目的编号列表："第一项"、"第二项"、"第三项"
- 在文档开头插入包含以下项目的项目符号列表："任务 1"、"任务 2"、"任务 3"

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertList",
    description: "Use this function to create simple numbered or bulleted lists at the current cursor position or at the start/end of the document.",
    parameters: {
        type: "object",
        properties: {
            items: { type: "array", description: "array of strings representing list items", items: { type: "string" } },
            listType: { type: "string", description: "'numbered' for numbered list, 'bulleted' for bulleted list (default is 'bulleted')" },
            position: { type: "string", description: "where to insert the list - 'current', 'start', or 'end' (default is 'current')" }
        },
        required: ["items"]
    }
});
```

### 参数

| Name     | Type   | Example                                     | Description                                                                         |
| -------- | ------ | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| items    | array  | ["First item", "Second item", "Third item"] | 表示列表项的字符串数组。                                           |
| listType | string | "numbered"                                  | 'numbered' 表示编号列表，'bulleted' 表示项目符号列表（默认为 'bulleted'）。 |
| position | string | "current"                                   | 列表的插入位置：'current'（当前位置）、'start'（开头）或 'end'（末尾，默认为 'current'）。     |

## 函数执行 {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.items = params.items || ["Item 1", "Item 2", "Item 3"];
    Asc.scope.listType = params.listType || "bulleted";
    Asc.scope.position = params.position || "current";

    await Asc.Editor.callCommand(function() {
        let doc = Api.GetDocument();
        
        if (Asc.scope.position === "start") {
            doc.MoveCursorToStart();
        } else if (Asc.scope.position === "end") {
            doc.MoveCursorToEnd();
            let newParagraph = Api.CreateParagraph();
            doc.InsertContent([newParagraph]);
        } else if (Asc.scope.position === "current") {
            let newParagraph = Api.CreateParagraph();
            doc.InsertContent([newParagraph]);
        }
        
        let paragraphs = [];
        let numbering;
        
        if (Asc.scope.listType === "numbered") {
            numbering = doc.CreateNumbering("numbered");
        } else {
            numbering = doc.CreateNumbering("bullet");
        }
        
        let numLvl = numbering.GetLevel(0);
        
        for (let i = 0; i < Asc.scope.items.length; i++) {
            let item = Asc.scope.items[i];
            let paragraph = Api.CreateParagraph();
            paragraph.AddText(item);
            paragraph.SetNumbering(numLvl);
            paragraph.SetContextualSpacing(true);
            paragraphs.push(paragraph);
        }
        
        doc.InsertContent(paragraphs);
    });
};

return func;
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToEnd.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md), [CreateNumbering](../../../office-api/usage-api/document-api/ApiDocument/Methods/CreateNumbering.md), [GetLevel](../../../office-api/usage-api/document-api/ApiNumbering/Methods/GetLevel.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [SetNumbering](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetNumbering.md), [SetContextualSpacing](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetContextualSpacing.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/insert-list" dark />
