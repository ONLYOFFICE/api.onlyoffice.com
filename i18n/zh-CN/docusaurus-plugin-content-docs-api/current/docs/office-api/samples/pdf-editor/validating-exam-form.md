---
hide_table_of_contents: true
---

# 验证考试表单

验证选择题测试的答案并计算分数（[创建考试表单](creating-exam-form.md)的延续）：

- 使用单选按钮选项重建考试表单结构（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md)）；
- 预填示例答案用于演示（[ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md)）；
- 遍历所有表单并验证答案（[ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)、[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)）；
- 检查所选选项并与正确答案比较（[ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)）；
- 获取表单提示文本以提供详细反馈（[ApiFormBase/GetTipText](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetTipText.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 定义考试的正确答案
const correctAnswers = {
  "Question1": "B", // 火星是红色星球
  "Question2": "C", // 木卫三是最大的卫星
  "Question3": "C"  // 太阳是黄矮星
};

// 定义问题详情用于评分反馈
const questionDetails = {
  "Question1": {
    text: "哪颗行星被称为红色星球？",
    options: ["金星", "火星", "木星", "土星"]
  },
  "Question2": {
    text: "哪颗卫星是太阳系中最大的卫星？",
    options: ["木卫二（欧罗巴）", "土卫六（泰坦）", "木卫三（盖尼米德）", "木卫四（卡利斯托）"]
  },
  "Question3": {
    text: "我们的太阳被归类为什么类型的恒星？",
    options: ["红巨星", "白矮星", "黄矮星", "蓝超巨星"]
  }
};

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
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionNumber + ". " + questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(400);
  doc.Push(questionPara);

  for (let i = 0; i < options.length; i++) {
    let optionPara = Api.CreateParagraph();
    let optionLetter = String.fromCharCode(65 + i);

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_option_" + optionLetter,
      tip: "选项 " + optionLetter + "：" + options[i],
      required: false,
      radio: true
    });

    radioButton.SetRadioGroup(radioGroupName);

    optionPara.AddElement(radioButton);
    optionPara.AddText(" " + optionLetter + ") " + options[i]);
    optionPara.SetFontSize(11 * 2);
    optionPara.SetSpacingBefore(100);
    doc.Push(optionPara);
  }
}

// 创建问题
createQuestion("1", questionDetails["Question1"].text, questionDetails["Question1"].options, "Question1");
createQuestion("2", questionDetails["Question2"].text, questionDetails["Question2"].options, "Question2");
createQuestion("3", questionDetails["Question3"].text, questionDetails["Question3"].options, "Question3");

// 预填示例答案用于演示（模拟学生作答）
// 学生答案：Q1=B（正确）、Q2=B（错误 - 选择了泰坦）、Q3=C（正确）
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  if (form.GetFormType() === "checkBoxForm") {
    if (key === "Question1_option_B") form.SetChecked(true); // 正确
    if (key === "Question2_option_B") form.SetChecked(true); // 错误（选择泰坦而非盖尼米德）
    if (key === "Question3_option_C") form.SetChecked(true); // 正确
  }
}

// 验证考试并计算分数的函数
function validateExam() {
  let results = {
    totalQuestions: Object.keys(correctAnswers).length,
    correctCount: 0,
    wrongCount: 0,
    details: []
  };

  let forms = doc.GetAllForms();

  // 检查每道题
  for (let questionKey in correctAnswers) {
    let correctOption = correctAnswers[questionKey];
    let selectedOption = null;
    let selectedTip = "";

    // 查找此问题选择的选项
    for (let form of forms) {
      let formKey = form.GetFormKey();
      let formType = form.GetFormType();

      if (formType === "checkBoxForm" && formKey.startsWith(questionKey + "_option_")) {
        if (form.IsChecked()) {
          // 从键中提取选项字母（例如："Question1_option_B" -> "B"）
          selectedOption = formKey.split("_option_")[1];
          selectedTip = form.GetTipText();
          break;
        }
      }
    }

    let isCorrect = selectedOption === correctOption;
    if (isCorrect) {
      results.correctCount++;
    } else {
      results.wrongCount++;
    }

    let questionInfo = questionDetails[questionKey];
    let correctIndex = correctOption.charCodeAt(0) - 65;
    let selectedIndex = selectedOption ? selectedOption.charCodeAt(0) - 65 : -1;

    results.details.push({
      question: questionKey,
      questionText: questionInfo.text,
      selectedAnswer: selectedOption || "未作答",
      selectedText: selectedIndex >= 0 ? questionInfo.options[selectedIndex] : "无",
      correctAnswer: correctOption,
      correctText: questionInfo.options[correctIndex],
      isCorrect: isCorrect,
      tipText: selectedTip
    });
  }

  results.score = Math.round((results.correctCount / results.totalQuestions) * 100);
  return results;
}

// 验证考试
let examResults = validateExam();

// 输出结果到控制台
console.log("=== 考试验证结果 ===");
console.log("题目总数：" + examResults.totalQuestions);
console.log("正确答案：" + examResults.correctCount);
console.log("错误答案：" + examResults.wrongCount);
console.log("最终得分：" + examResults.score + "%");
console.log("");
console.log("=== 详细结果 ===");

for (let detail of examResults.details) {
  console.log("问题：" + detail.questionText);
  console.log("  所选：" + detail.selectedAnswer + "（" + detail.selectedText + "）");
  console.log("  正确：" + detail.correctAnswer + "（" + detail.correctText + "）");
  console.log("  结果：" + (detail.isCorrect ? "✓ 正确" : "✗ 错误"));
  if (detail.tipText) {
    console.log("  提示：" + detail.tipText);
  }
  console.log("");
}

// 在文档中添加结果部分
paragraph = Api.CreateParagraph();
paragraph.AddText("考试结果");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(600);
doc.Push(paragraph);

// 分数显示
paragraph = Api.CreateParagraph();
paragraph.AddText("得分：" + examResults.correctCount + "/" + examResults.totalQuestions + "（" + examResults.score + "%）");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

// 详细结果
paragraph = Api.CreateParagraph();
paragraph.AddText("详细反馈：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

for (let detail of examResults.details) {
  paragraph = Api.CreateParagraph();
  let resultIcon = detail.isCorrect ? "✓" : "✗";
  let resultText = resultIcon + " " + detail.question.replace("Question", "第") + "题：";
  resultText += detail.selectedAnswer + "（" + detail.selectedText + "）";
  if (!detail.isCorrect) {
    resultText += " → 正确答案：" + detail.correctAnswer + "（" + detail.correctText + "）";
  }
  paragraph.AddText(resultText);
  paragraph.SetFontSize(10 * 2);
  paragraph.SetSpacingBefore(100);
  if (detail.isCorrect) {
    paragraph.SetColor(0, 128, 0);
  } else {
    paragraph.SetColor(200, 0, 0);
  }
  doc.Push(paragraph);
}
```
