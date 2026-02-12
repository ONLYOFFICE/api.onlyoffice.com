---
hide_table_of_contents: true
---

# 创建反馈表单

创建带有评分表格的客户反馈表单：

- 创建带边框的表格用于评分等级布局（[Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md)、[ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md)、[ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md)、[ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md)、[ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md)）；
- 为每个满意度级别添加单选按钮选项（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md)）；
- 使用背景颜色设置表头样式（[ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 设置表格边框的辅助函数
function setBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

// 获取表格单元格段落的辅助函数
function getCellParagraph(table, row, col) {
  return table.GetCell(row, col).GetContent().GetElement(0);
}

// 为问题创建评分表格的辅助函数
function createRatingTable(questionText, radioGroupName) {
  let ratingLabels = ["非常满意", "满意", "一般", "不满意", "非常不满意"];

  // 问题段落
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(300);
  doc.Push(questionPara);

  // 创建评分表格（2行：表头 + 单选按钮）
  let table = Api.CreateTable(5, 2);
  table.SetWidth("percent", 100);
  setBorders(table, 150);
  table.SetTableCellMarginTop(80);
  table.SetTableCellMarginBottom(80);

  // 设置表头行样式
  table.GetRow(0).SetBackgroundColor(240, 240, 240, false);

  // 在表头行添加评分标签
  for (let i = 0; i < ratingLabels.length; i++) {
    let para = getCellParagraph(table, 0, i);
    para.AddText(ratingLabels[i]);
    para.SetFontSize(10 * 2);
    para.SetBold(true);
    para.SetJc("center");
  }

  // 在第二行添加单选按钮
  for (let i = 0; i < ratingLabels.length; i++) {
    let para = getCellParagraph(table, 1, i);

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_" + String.fromCharCode(65 + i),
      tip: "选择 " + ratingLabels[i],
      required: false,
      radio: true
    });
    radioButton.SetRadioGroup(radioGroupName);

    para.AddElement(radioButton);
    para.SetJc("center");
  }

  doc.Push(table);
}

// 创建表单标题
let paragraph = doc.GetElement(0);
paragraph.AddText("客户反馈表单");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 添加表单说明
paragraph = Api.CreateParagraph();
paragraph.AddText("请评价您对我们支持团队的体验。");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(150);
doc.Push(paragraph);

// 第1题：问题解决满意度
createRatingTable(
  "1. 您对问题解决的满意程度如何？",
  "issue_resolution"
);

// 第2题：支持清晰度
createRatingTable(
  "2. 支持服务的说明是否清晰？",
  "support_clarity"
);

// 第3题：获得帮助的便捷程度
createRatingTable(
  "3. 获得帮助的难易程度如何？",
  "ease_of_help"
);

// 附加意见部分
paragraph = Api.CreateParagraph();
paragraph.AddText("附加意见：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
let commentsForm = Api.CreateTextForm({
  key: "additional_comments",
  required: false,
  placeholder: "请在此输入您的意见...",
  maxCharacters: 500,
  multiLine: true,
  autoFit: false,
});
paragraph.AddElement(commentsForm);
doc.Push(paragraph);

// 感谢语
paragraph = Api.CreateParagraph();
paragraph.AddText("感谢您的反馈！");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);
```
