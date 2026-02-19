---
hide_table_of_contents: true
---

# 根据表单添加批注

根据表单字段的选择自动向文档添加上下文批注，可用于触发后续操作或标记需要关注的回复：

- 创建带有单选按钮选项的调查表单（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md)）；
- 检测特定选项是否被选中（[ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md)）；
- 自动添加批注以标记需要审核的选择（[Api/AddComment](/docs/office-api/usage-api/text-document-api/Api/Methods/AddComment.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建调查标题
let paragraph = doc.GetElement(0);
paragraph.AddText("工作满意度调查");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 添加调查说明
paragraph = Api.CreateParagraph();
paragraph.AddText("请评价您的整体工作满意度：");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 添加间距
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 定义单选按钮组的满意度级别
let satisfactionLevels = [
  { label: "非常满意", value: "very_satisfied" },
  { label: "满意", value: "satisfied" },
  { label: "一般", value: "neutral" },
  { label: "不满意", value: "dissatisfied" },
  { label: "非常不满意", value: "very_dissatisfied" }
];

// 存储单选按钮及其段落的引用以供后续检查
let radioButtons = [];

// 为每个满意度级别创建单选按钮
for (let level of satisfactionLevels) {
  paragraph = Api.CreateParagraph();

  let radioButton = Api.CreateCheckBoxForm({
    key: level.value,
    tip: "选择您的满意度级别",
    required: true,
    placeholder: "满意度",
    radio: true
  });

  // 将所有单选按钮分组
  radioButton.SetRadioGroup("JobSatisfaction");

  // 预选"非常不满意"以演示自动批注功能
  if (level.value === "very_dissatisfied") {
    radioButton.SetChecked(true);
  }

  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + level.label);
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // 存储表单和段落的引用以便添加批注
  radioButtons.push({ form: radioButton, paragraph: paragraph, value: level.value, label: level.label });
}

// 在批注部分前添加间距
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 检查选择并添加批注的函数
function checkAndAddComments() {
  for (let radio of radioButtons) {
    if (radio.form.IsChecked() && radio.value === "very_dissatisfied") {
      // 向包含单选按钮的段落添加批注
      Api.AddComment(
        radio.paragraph,
        "注意：员工选择了'非常不满意'。请安排后续会议讨论相关问题并探讨改进措施。",
        "人力资源审核系统"
      );
      return true;
    }
  }
  return false;
}

// 检查选择并在需要时添加批注
let commentAdded = checkAndAddComments();

// 添加状态部分
paragraph = Api.CreateParagraph();
paragraph.AddText("自动批注状态");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

if (commentAdded) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("已自动为'非常不满意'选项添加审核批注。");
  paragraph.SetFontSize(11 * 2);
  paragraph.SetColor(200, 100, 0);
  doc.Push(paragraph);

  paragraph = Api.CreateParagraph();
  paragraph.AddText("此批注将通知人力资源部门跟进该员工。");
  paragraph.SetFontSize(11 * 2);
  doc.Push(paragraph);
} else {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("当前选择无需添加审核批注。");
  paragraph.SetFontSize(11 * 2);
  paragraph.SetColor(0, 128, 0);
  doc.Push(paragraph);
}

// 添加实现说明
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("工作原理：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. 使用 SetRadioGroup() 创建单选按钮，确保只能选择一个选项。");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. IsChecked() 检测当前选中的选项。");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Api.AddComment() 在满足特定条件时向包含选项的段落添加批注。");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("4. 批注可以包含作者信息，以标识自动反馈的来源。");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
