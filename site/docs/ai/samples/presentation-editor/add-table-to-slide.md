---
description: Add a table to a presentation slide.
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# Add table to slide

This function adds a table to the specified or the current slide. By default, the table is 194x97 mm and centered.

## Prompts

- Add a 3x3 table on slide 2
- Add a table with data [["Name", "Age", "City"], ["John", "30", "New York"], ["Jane", "25", "London"]] on the current slide
- Add a simple 2x4 table

## Function registration {#function-registration}

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

### Parameters

| Name        | Type   | Example                                                                                 | Description                                                                                          |
| ----------- | ------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| slideNumber | number | 2                                                                                       | The slide number where the table will be added. If omitted, the table is added to the current slide. |
| rows        | number | 2                                                                                       | The number of rows. The default value is 3.                                                          |
| columns     | number | 4                                                                                       | The number of columns. The default value is 3.                                                       |
| data        | array  | \[\["Name", "Age", "City"\], \["John", "30", "New York"\], \["Jane", "25", "London"\]\] | A two-dimensional array of cell values, structured as rows × columns.                                |

## Function execution {#function-execution}

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

Methods used: [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateTable](../../../office-api/usage-api/presentation-api/Api/Methods/CreateTable.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [SetSize](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [GetRow](../../../office-api/usage-api/presentation-api/ApiTable/Methods/GetRow.md), [GetCell](../../../office-api/usage-api/presentation-api/ApiTableRow/Methods/GetCell.md), [GetContent](../../../office-api/usage-api/presentation-api/ApiTableCell/Methods/GetContent.md), [RemoveAllElements](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-table-to-slide" dark />
