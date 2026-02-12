---
hide_table_of_contents: true
---

# 创建考试表单

创建包含选择题的学校考试表单：

- 为每个问题创建单选按钮选项（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md)）；
- 将单选按钮按问题分组以实现单选（[ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md)）；
- 在问题之间添加间距（[ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 创建考试标题
let paragraph = doc.GetElement(0);
paragraph.AddText("天文学选择题测试");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 添加考试说明
paragraph = Api.CreateParagraph();
paragraph.AddText("说明：请为每道题选择正确答案。");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

// 创建带有单选按钮选项的问题的辅助函数
function createQuestion(questionNumber, questionText, options, radioGroupName) {
  // 问题文本
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionNumber + ". " + questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(400);
  doc.Push(questionPara);

  // 创建单选按钮选项
  for (let i = 0; i < options.length; i++) {
    let optionPara = Api.CreateParagraph();

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_option_" + String.fromCharCode(65 + i),
      tip: "选择此答案",
      required: false,
      radio: true
    });

    // 将此问题的单选按钮分组
    radioButton.SetRadioGroup(radioGroupName);

    optionPara.AddElement(radioButton);
    optionPara.AddText(" " + String.fromCharCode(65 + i) + ") " + options[i]);
    optionPara.SetFontSize(11 * 2);
    optionPara.SetSpacingBefore(100);
    doc.Push(optionPara);
  }
}

// 第1题：关于行星
createQuestion(
  "1",
  "哪颗行星被称为红色星球？",
  [
    "金星",
    "火星",
    "木星",
    "土星"
  ],
  "Question1"
);

// 第2题：关于卫星
createQuestion(
  "2",
  "哪颗卫星是太阳系中最大的卫星？",
  [
    "木卫二（欧罗巴）",
    "土卫六（泰坦）",
    "木卫三（盖尼米德）",
    "木卫四（卡利斯托）"
  ],
  "Question2"
);

// 第3题：关于恒星
createQuestion(
  "3",
  "我们的太阳被归类为什么类型的恒星？",
  [
    "红巨星",
    "白矮星",
    "黄矮星",
    "蓝超巨星"
  ],
  "Question3"
);

// 添加页脚部分
paragraph = Api.CreateParagraph();
paragraph.AddText("测试结束");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(600);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("提交前请检查您的答案。");
paragraph.SetFontSize(10 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
doc.Push(paragraph);
```
