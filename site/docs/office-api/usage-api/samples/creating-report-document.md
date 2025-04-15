# Creating report document

Create reports on all the comments added to the document and on every change which was made to the document in the review mode:

- open the created file ([Api/GetDocument](../text-document-api/Api/Methods/GetDocument.md));
- get the comments and review reports and save them to the global variable ([ApiDocument/GetCommentsReport](../text-document-api/ApiDocument/Methods/GetCommentsReport.md), [ApiDocument/GetReviewReport](../text-document-api/ApiDocument/Methods/GetReviewReport.md));
- create a table for the comments/review report and fill it in with the data from the global variable ([Api/CreateParagraph](../text-document-api/Api/Methods/CreateParagraph.md), [Api/CreateTable](../text-document-api/Api/Methods/CreateTable.md), [ApiDocument/Push](../text-document-api/ApiDocument/Methods/Push.md), [ApiDocumentContent/GetElement](../text-document-api/ApiDocumentContent/Methods/GetElement.md), [ApiParagraph/AddText](../text-document-api/ApiParagraph/Methods/AddText.md), [ApiTable/GetRow](../text-document-api/ApiTable/Methods/GetRow.md), [ApiTable/MergeCells](../text-document-api/ApiTable/Methods/MergeCells.md), [ApiTableCell/GetContent](../text-document-api/ApiTableCell/Methods/GetContent.md), [ApiTableRow/GetCell](../text-document-api/ApiTableRow/Methods/GetCell.md));
- edit text style in the table ([ApiDocument/GetStyle](../text-document-api/ApiDocument/Methods/GetStyle.md), [ApiRun/SetColor](../text-document-api/ApiRun/Methods/SetColor.md), [ApiRun/SetStrikeout](../text-document-api/ApiRun/Methods/SetStrikeout.md)).

```ts document-builder={"document": {"url": "https://static.onlyoffice.com/assets/docs/samples/document_review_mode.docx"}, "documentType": "word", "editorConfig": {"customization": {"zoom": 60}}}
let doc = Api.GetDocument();
GlobalVariable["CommentsReport"] = doc.GetCommentsReport();
GlobalVariable["ReviewReport"] = doc.GetReviewReport();

builder.CloseFile();

builder.CreateFile("docx");

let commentsReport = GlobalVariable["CommentsReport"];
let reviewReport = GlobalVariable["ReviewReport"];

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Comments report");

let rows = 1;
for (let userName in commentsReport) {
  rows += commentsReport[userName].length;
}

let cols = 6;
let table = Api.CreateTable(cols, rows);
doc.Push(table);

function fillCell(curRow, curCol, text) {
  let row = table.GetRow(curRow);
  let cell = row.GetCell(curCol);
  let cellContent = cell.GetContent();
  let run = cellContent.GetElement(0).AddText(text);
  return {Cell: cell, Run: run};
}

fillCell(0, 0, "Name");
fillCell(0, 1, "Date");
fillCell(0, 2, "");
fillCell(0, 3, "Solved");
fillCell(0, 4, "Text");
fillCell(0, 5, "Quote text");

let curRow = 1;
for (let userName in commentsReport) {
  let userComments = commentsReport[userName];
  let cells = [];
  for (let index = 0, count = userComments.length; index < count;
    index += 1, curRow += 1) {
    let commentInfo = commentsReport[userName][index];
    cells.push(fillCell(curRow, 0, "").Cell);
    fillCell(curRow, 1, new Date(commentInfo["Date"]).toString());
    let value2;
    if (commentInfo["IsAnswer"] === true) {
      value2 = "answer";
    } else {
      value2 = "comment";
    }
    fillCell(curRow, 2, value2);

    if (commentInfo["IsAnswer"] !== true) {
      let value3;
      if (commentInfo["IsSolved"] === true) {
        value3 = "yes";
        fillCell(curRow, 3, value3).Run.SetColor(0, 255, 0);
      } else {
        value3 = "no";
        fillCell(curRow, 3, value3).Run.SetColor(255, 0, 0);
      }
    }

    let value4;
    if (commentInfo["CommentMessage"]) {
      value4 = commentInfo["CommentMessage"];
    } else {
      value4 = "";
    }
    fillCell(curRow, 4, value4);

    let value5;
    if (commentInfo["QuoteText"]) {
      value5 = commentInfo["QuoteText"];
    } else {
      value5 = "";
    }
    fillCell(curRow, 5, value5);
  }

  let mergedCell = table.MergeCells(cells);
  if (mergedCell) {
    let cellContent = mergedCell.GetContent();
    cellContent.GetElement(0).AddText(userName);
  } else if (cells.length !== 0) {
    let cellContent = cells[0].GetContent();
    cellContent.GetElement(0).AddText(userName);
  }
}
table.SetStyle(doc.GetStyle("Bordered"));

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Review report");

rows = 1;
for (let userName in reviewReport) {
  rows += reviewReport[userName].length;
}

cols = 4;
table = Api.CreateTable(cols, rows);
doc.Push(table);

fillCell(0, 0, "Name");
fillCell(0, 1, "Date");
fillCell(0, 2, "Action");
fillCell(0, 3, "");

curRow = 1;
for (let userName in reviewReport) {
  let userChanges = reviewReport[userName];
  let cells = [];
  for (let index = 0, count = userChanges.length; index < count; index += 1, curRow += 1) {
    let changeInfo = userChanges[index];
    cells.push(fillCell(curRow, 0, "").Cell);
    fillCell(curRow, 1, new Date(changeInfo["Date"]).toString());
    let type = changeInfo["Type"];
    if (type === "TextAdd") {
      fillCell(curRow, 2, "Added text");
      fillCell(curRow, 3, changeInfo["Value"]);
    } else if (type === "TextRem") {
      fillCell(curRow, 2, "Removed text");
      fillCell(curRow, 3, changeInfo["Value"]).Run.SetStrikeout(true);
    } else if (type === "TextPr") {
      fillCell(curRow, 2, "Formatted text");
    } else if (type === "ParaAdd") {
      fillCell(curRow, 2, "Added paragraph");
    } else if (type === "ParaRem") {
      fillCell(curRow, 2, "Removed paragraph");
    } else if (type === "ParaPr") {
      fillCell(curRow, 2, "Formatted paragraph");
    } else {
      fillCell(curRow, 2, "Unknown change");
    }
  }
  let mergedCell = table.MergeCells(cells);
  if (mergedCell) {
    let cellContent = mergedCell.GetContent();
    cellContent.GetElement(0).AddText(userName);
  } else if (cells.length !== 0) {
    let cellContent = cells[0].GetContent();
    cellContent.GetElement(0).AddText(userName);
  }
}
table.SetStyle(doc.GetStyle("Bordered"));
```
