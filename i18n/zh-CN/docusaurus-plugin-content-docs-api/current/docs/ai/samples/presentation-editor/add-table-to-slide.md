---
description: 向演示文稿幻灯片添加表格。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 向幻灯片添加表格

此函数向指定幻灯片或当前幻灯片添加表格。默认情况下，表格尺寸为 194×97 毫米并居中显示。

## 提示词

- 在第 2 张幻灯片上添加一个 3×3 的表格
- 在当前幻灯片上添加包含数据 [["Name", "Age", "City"], ["John", "30", "New York"], ["Jane", "25", "London"]] 的表格
- 添加一个简单的 2×4 表格

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "addTableToSlide",
    description: "Adds a table to the slide (194x97mm, centered)",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description: "the slide number to add table",
          minimum: 1,
        },
        rows: {
          type: "number",
          description: "number of rows",
        },
        columns: {
          type: "number",
          description: "number of columns",
        },
        data: {
          type: "array",
          description: "2D array of cell values - rows x columns",
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "add a 3x3 table on slide 2",
        arguments: { slideNumber: 2, rows: 3, columns: 3 },
      },
      {
        prompt: "add a table with data on current slide",
        arguments: {
          data: [
            ["Name", "Age", "City"],
            ["John", "30", "New York"],
            ["Jane", "25", "London"],
          ],
        },
      },
    ],
  });
  return func;
})();
```

### 参数

| Name        | Type   | Example                                                                                 | Description                                                                                          |
| ----------- | ------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| slideNumber | number | 2                                                                                       | 要添加表格的幻灯片编号。如果省略，则将表格添加到当前幻灯片。                                          |
| rows        | number | 2                                                                                       | 表格的行数。默认值为 3。                                                                              |
| columns     | number | 4                                                                                       | 表格的列数。默认值为 3。                                                                              |
| data        | array  | \[\["Name", "Age", "City"\], \["John", "30", "New York"\], \["Jane", "25", "London"\]\] | 以行×列结构组织的二维单元格值数组。                                                                   |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.params = params;

  await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let slide;

    if (Asc.scope.params.slideNumber) {
      slide = presentation.GetSlideByIndex(Asc.scope.params.slideNumber - 1);
    } else {
      slide = presentation.GetCurrentSlide();
    }

    if (!slide) return;

    let slideWidth = presentation.GetWidth();
    let slideHeight = presentation.GetHeight();

    let data = Asc.scope.params.data;
    let rows = Asc.scope.params.rows || 3;
    let columns = Asc.scope.params.columns || 3;

    if (data && Array.isArray(data) && data.length > 0) {
      rows = data.length;
      if (data[0] && Array.isArray(data[0])) {
        columns = data[0].length;
      }
    }

    let tableWidth = 7000000;
    let tableHeight = 3500000;
    let x = (slideWidth - tableWidth) / 2;
    let y = (slideHeight - tableHeight) / 2;

    let table = Api.CreateTable(columns, rows);

    if (table) {
      table.SetPosition(x, y);
      table.SetSize(tableWidth, tableHeight);
      let rowHeight = tableHeight / rows;
      if (data && Array.isArray(data)) {
        let rowCount = Math.min(data.length, rows);
        for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
          let row = table.GetRow(rowIdx);
          if (Array.isArray(data[rowIdx])) {
            let cellCount = Math.min(data[rowIdx].length, columns);
            for (let col = 0; col < cellCount; col++) {
              let cell = row.GetCell(col);
              if (cell) {
                let cellContent = cell.GetContent();
                if (cellContent) {
                  cellContent.RemoveAllElements();
                  let paragraph = Api.CreateParagraph();
                  let value = data[rowIdx][col];
                  if (value !== null && value !== undefined) {
                    paragraph.AddText(value);
                    cellContent.Push(paragraph);
                  }
                }
              }
            }
          }
        }
      }

      slide.AddObject(table);
    }
  });
};
```

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateTable](../../../office-api/usage-api/presentation-api/Api/Methods/CreateTable.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [SetSize](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [GetRow](../../../office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md), [GetCell](../../../office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md), [RemoveAllElements](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-table-to-slide" dark />
