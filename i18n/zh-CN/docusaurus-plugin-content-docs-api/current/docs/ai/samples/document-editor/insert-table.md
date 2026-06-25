---
description: 在文档中插入表格。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 插入表格

此函数在当前光标位置或文档的开头/末尾插入表格。可指定行数和列数，并可选择性地添加表头。

## 提示词

- 创建一个 3 行 4 列的表格
- 在文档开头插入一个带表头的 5 行 3 列表格
- 在当前位置创建一个 2 行 2 列的表格

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertTable",
    description: "Use this function to insert a table at the current cursor position or at the start/end of the document. You can specify the number of rows and columns, and optionally add headers.",
    parameters: {
        type: "object",
        properties: {
            rows: { type: "number", description: "number of rows in the table" },
            columns: { type: "number", description: "number of columns in the table" },
            hasHeaders: { type: "boolean", description: "whether the first row should be formatted as headers" },
            tableStyle: { type: "string", description: "optional table style name (e.g., 'Table Grid', 'Light Grid')" },
            width: { type: "number", description: "table width percentage (default is 100)" },
            widthType: { type: "string", description: "width type - 'percent' or 'point' (default is 'percent')" },
            position: { type: "string", description: "where to insert the table - 'current', 'start', or 'end' (default is 'current')" }
        },
        required: ["rows", "columns"]
    }
});
```

### 参数

| Name       | Type    | Example      | Description                                                                      |
| ---------- | ------- | ------------ | -------------------------------------------------------------------------------- |
| rows       | number  | 3            | 表格的行数。                                                                     |
| columns    | number  | 4            | 表格的列数。                                                                  |
| hasHeaders | boolean | true         | 是否将第一行格式化为表头。                            |
| tableStyle | string  | "Table Grid" | 可选的表格样式名称（例如 'Table Grid'、'Light Grid'）。                    |
| width      | number  | 100          | 表格宽度百分比（默认为 100）。                                                         |
| widthType  | string  | "percent"    | 宽度类型：'percent'（百分比）或 'point'（磅值，默认为 'percent'）。                        |
| position   | string  | "current"    | 表格的插入位置：'current'（当前位置）、'start'（开头）或 'end'（末尾，默认为 'current'）。 |

## 函数执行 {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.rows = params.rows || 3;
    Asc.scope.columns = params.columns || 3;
    Asc.scope.hasHeaders = params.hasHeaders || false;
    Asc.scope.tableStyle = params.tableStyle;
    Asc.scope.width = params.width || 100;
    Asc.scope.widthType = params.widthType || "percent";
    Asc.scope.position = params.position || "current";

    await Asc.Editor.callCommand(function() {
        let doc = Api.GetDocument();
        
        if (Asc.scope.position === "start") {
            doc.MoveCursorToStart();
        } else if (Asc.scope.position === "end") {
            doc.MoveCursorToEnd();
        }
        
        let table = Api.CreateTable(Asc.scope.rows, Asc.scope.columns);
        doc.InsertContent([table]);
    
        let unit = (Asc.scope.widthType === "point") ? "twips" : Asc.scope.widthType;
        let widthValue = (Asc.scope.widthType === "point") ? (Asc.scope.width * 20) : Asc.scope.width;
        table.SetWidth(unit, widthValue);
    
        if (Asc.scope.tableStyle) {
            table.SetStyle(Asc.scope.tableStyle);
        }
    
        if (Asc.scope.hasHeaders) {
            for (let col = 0; col < Asc.scope.columns; col++) {
                let cell = table.GetCell(0, col);
                if (cell) {
                    let para = cell.GetContent().GetElement(0);
                    if (para) {
                        let textPr = para.GetTextPr();
                        textPr.SetBold(true);
                        para.SetTextPr(textPr);
                    }
                }
            }
        }
    });
};

return func;
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToEnd.md), [CreateTable](../../../office-api/usage-api/document-api/Api/Methods/CreateTable.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md), [SetWidth](../../../office-api/usage-api/document-api/ApiTable/Methods/SetWidth.md), [SetStyle](../../../office-api/usage-api/document-api/ApiTable/Methods/SetStyle.md), [GetCell](../../../office-api/usage-api/document-api/ApiTable/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/document-api/ApiTableCell/Methods/GetContent.md), [GetElement](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetElement.md), [GetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetTextPr.md), [SetBold](../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetBold.md), [SetTextPr](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetTextPr.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/insert-table" dark />
