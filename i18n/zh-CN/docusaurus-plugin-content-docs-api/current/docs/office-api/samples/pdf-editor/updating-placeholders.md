---
hide_table_of_contents: true
---

# 更新占位符

根据用户语言或使用环境调整表单字段中的占位符文本，以在多语言系统中提供更好的用户体验：

- 创建带有可本地化占位符文本的表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 实现语言检测和占位符更新（[ApiDocument/GetFormsByKey](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetFormsByKey.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)）；
- 管理多语言占位符字典（[ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)、[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 模拟用户语言偏好
let currentUser = {
  username: "marie.dubois",
  language: "fr",  // 可以是 "en", "fr", "de", "es", "ru"
  country: "France",
  department: "HR"
};

// 多语言占位符字典
let placeholderDictionary = {
  "en": {
    "full_name": "Enter your full name",
    "email": "Work email address",
    "phone": "Phone number with country code",
    "department": "Select your department",
    "position": "Your job title",
    "start_date": "Employment start date (DD.MM.YYYY)",
    "salary": "Annual salary amount",
    "emergency_contact": "Emergency contact name",
    "emergency_phone": "Emergency contact phone",
    "comments": "Additional comments or notes"
  },
  "fr": {
    "full_name": "Saisissez votre nom complet",
    "email": "Adresse email professionnelle",
    "phone": "Numéro de téléphone avec indicatif pays",
    "department": "Sélectionnez votre département",
    "position": "Votre titre de poste",
    "start_date": "Date de début d'emploi (JJ.MM.AAAA)",
    "salary": "Montant du salaire annuel",
    "emergency_contact": "Nom du contact d'urgence",
    "emergency_phone": "Téléphone du contact d'urgence",
    "comments": "Commentaires ou notes supplémentaires"
  },
  "de": {
    "full_name": "Geben Sie Ihren vollständigen Namen ein",
    "email": "Geschäftliche E-Mail-Adresse",
    "phone": "Telefonnummer mit Ländervorwahl",
    "department": "Wählen Sie Ihre Abteilung",
    "position": "Ihre Berufsbezeichnung",
    "start_date": "Beschäftigungsbeginn (TT.MM.JJJJ)",
    "salary": "Jahresgehalt",
    "emergency_contact": "Name des Notfallkontakts",
    "emergency_phone": "Notfallkontakt Telefon",
    "comments": "Zusätzliche Kommentare oder Notizen"
  },
  "es": {
    "full_name": "Ingrese su nombre completo",
    "email": "Dirección de correo electrónico laboral",
    "phone": "Número de teléfono con código de país",
    "department": "Seleccione su departamento",
    "position": "Su título de trabajo",
    "start_date": "Fecha de inicio de empleo (DD.MM.AAAA)",
    "salary": "Monto del salario anual",
    "emergency_contact": "Nombre del contacto de emergencia",
    "emergency_phone": "Teléfono del contacto de emergencia",
    "comments": "Comentarios o notas adicionales"
  },
  "ru": {
    "full_name": "Введите ваше полное имя",
    "email": "Рабочий адрес электронной почты",
    "phone": "Номер телефона с кодом страны",
    "department": "Выберите ваш отдел",
    "position": "Ваша должность",
    "start_date": "Дата начала работы (ДД.ММ.ГГГГ)",
    "salary": "Размер годовой зарплаты",
    "emergency_contact": "Имя контактного лица для экстренных случаев",
    "emergency_phone": "Телефон экстренного контакта",
    "comments": "Дополнительные комментарии или заметки"
  }
};

// 创建带有默认英语占位符的人力资源员工注册表单
function createEmployeeRegistrationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("员工注册表");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // 个人信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("个人信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 全名
  paragraph = Api.CreateParagraph();
  paragraph.AddText("全名：");
  paragraph.SetFontSize(12 * 2);
  let nameForm = Api.CreateTextForm({
    key: "full_name",
    required: true,
    placeholder: "Enter your full name",  // 默认英语
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // 电子邮件
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电子邮件：");
  paragraph.SetFontSize(12 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "Work email address",  // 默认英语
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // 电话
  paragraph = Api.CreateParagraph();
  paragraph.AddText("电话：");
  paragraph.SetFontSize(12 * 2);
  let phoneForm = Api.CreateTextForm({
    key: "phone",
    required: false,
    placeholder: "Phone number with country code",  // 默认英语
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(phoneForm);
  doc.Push(paragraph);

  // 工作信息部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("工作信息");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 部门
  paragraph = Api.CreateParagraph();
  paragraph.AddText("部门：");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "Select your department",  // 默认英语
    editable: false,
    autoFit: true,
    items: ["人力资源", "信息技术", "销售", "市场", "财务", "运营"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // 职位
  paragraph = Api.CreateParagraph();
  paragraph.AddText("职位：");
  paragraph.SetFontSize(12 * 2);
  let positionForm = Api.CreateTextForm({
    key: "position",
    required: true,
    placeholder: "Your job title",  // 默认英语
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(positionForm);
  doc.Push(paragraph);

  // 入职日期
  paragraph = Api.CreateParagraph();
  paragraph.AddText("入职日期：");
  paragraph.SetFontSize(12 * 2);
  let startDateForm = Api.CreateTextForm({
    key: "start_date",
    required: true,
    placeholder: "Employment start date (DD.MM.YYYY)",  // 默认英语
    maxCharacters: 10,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(startDateForm);
  doc.Push(paragraph);

  // 薪资（敏感字段）
  paragraph = Api.CreateParagraph();
  paragraph.AddText("年薪：");
  paragraph.SetFontSize(12 * 2);
  let salaryForm = Api.CreateTextForm({
    key: "salary",
    required: false,
    placeholder: "Annual salary amount",  // 默认英语
    maxCharacters: 15,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(salaryForm);
  doc.Push(paragraph);

  // 紧急联系人部分
  paragraph = Api.CreateParagraph();
  paragraph.AddText("紧急联系人");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // 紧急联系人姓名
  paragraph = Api.CreateParagraph();
  paragraph.AddText("联系人姓名：");
  paragraph.SetFontSize(12 * 2);
  let emergencyContactForm = Api.CreateTextForm({
    key: "emergency_contact",
    required: false,
    placeholder: "Emergency contact name",  // 默认英语
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyContactForm);
  doc.Push(paragraph);

  // 紧急联系电话
  paragraph = Api.CreateParagraph();
  paragraph.AddText("联系人电话：");
  paragraph.SetFontSize(12 * 2);
  let emergencyPhoneForm = Api.CreateTextForm({
    key: "emergency_phone",
    required: false,
    placeholder: "Emergency contact phone",  // 默认英语
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyPhoneForm);
  doc.Push(paragraph);

  // 备注
  paragraph = Api.CreateParagraph();
  paragraph.AddText("附加备注：");
  paragraph.SetFontSize(12 * 2);
  let commentsForm = Api.CreateTextForm({
    key: "comments",
    required: false,
    placeholder: "Additional comments or notes",  // 默认英语
    maxCharacters: 300,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(commentsForm);
  doc.Push(paragraph);
}

// 检测用户语言的函数（模拟）
function detectUserLanguage(user) {
  // 在实际应用中，可以检查：
  // - 用户配置文件中的语言设置
  // - 浏览器语言偏好
  // - 系统区域设置
  // - 地理位置

  let languageMap = {
    "marie.dubois": "fr",
    "hans.mueller": "de",
    "carlos.garcia": "es",
    "anna.petrov": "ru",
    "john.smith": "en"
  };

  return languageMap[user.username] || user.language || "en";
}

// 根据语言更新表单占位符的函数
function updatePlaceholdersForLanguage(language) {
  let updatedCount = 0;
  let dictionary = placeholderDictionary[language] || placeholderDictionary["en"];

  // 获取文档中的所有表单
  let forms = doc.GetAllForms();

  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();

    // 如果存在翻译则更新占位符
    if (dictionary[key]) {
      if (formType === "textForm" || formType === "comboBoxForm") {
        // 注意：在实际 API 中，占位符更新可能以不同方式完成
        // 这是一个概念演示
        try {
          // 为了演示，我们将通过使用新占位符重新创建来更新表单
          // 在实际实现中，您将使用适当的 API 方法
          form.SetPlaceholderText(dictionary[key]);
          updatedCount++;
        } catch (e) {
          // 如果 SetPlaceholder 不可用，我们可以更新文本内容
          // 或使用其他可用的方法
          console.log(`无法更新 ${key} 的占位符`);
        }
      }
    }
  }

  return { updatedCount, language, dictionary };
}

// 获取语言名称用于显示的函数
function getLanguageName(languageCode) {
  let languageNames = {
    "en": "English",
    "fr": "Français",
    "de": "Deutsch",
    "es": "Español",
    "ru": "Русский"
  };

  return languageNames[languageCode] || languageCode;
}

// 创建员工注册表单
createEmployeeRegistrationForm();

// 添加间距
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// 添加本地化演示
paragraph = Api.CreateParagraph();
paragraph.AddText("占位符本地化演示");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// 第一步：检测用户语言
paragraph = Api.CreateParagraph();
paragraph.AddText("第一步：用户语言检测");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let detectedLanguage = detectUserLanguage(currentUser);
currentUser.language = detectedLanguage;

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 用户：${currentUser.username}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 检测到的语言：${getLanguageName(detectedLanguage)} (${detectedLanguage})`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 国家：${currentUser.country}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 第二步：加载占位符字典
paragraph = Api.CreateParagraph();
paragraph.AddText("第二步：占位符字典加载");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let availableLanguages = Object.keys(placeholderDictionary);
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 可用语言：${availableLanguages.join(", ")}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

let currentDictionary = placeholderDictionary[detectedLanguage];
let dictionarySize = Object.keys(currentDictionary).length;
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 已加载 ${dictionarySize} 个 ${getLanguageName(detectedLanguage)} 占位符翻译`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 第三步：更新表单占位符
paragraph = Api.CreateParagraph();
paragraph.AddText("第三步：表单占位符更新");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let updateResult = updatePlaceholdersForLanguage(detectedLanguage);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ 已更新 ${updateResult.updatedCount} 个表单字段占位符`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

// 显示示例翻译
paragraph = Api.CreateParagraph();
paragraph.AddText("示例翻译：");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let sampleFields = ["full_name", "email", "department"];
for (let fieldKey of sampleFields) {
  paragraph = Api.CreateParagraph();
  let englishText = placeholderDictionary["en"][fieldKey];
  let localizedText = currentDictionary[fieldKey];
  paragraph.AddText(`• ${fieldKey}: "${englishText}" → "${localizedText}"`);
  paragraph.SetFontSize(10 * 2);
  doc.Push(paragraph);
}

// 添加实施指南
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("实施指南：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. 用户语言检测");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 检查用户配置文件语言设置");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 检测浏览器语言偏好");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 使用系统区域设置或地理位置");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. 占位符字典管理");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 维护所有支持语言的翻译");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 使用结构化 JSON 格式便于维护");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 实现回退到默认语言（英语）");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. 动态占位符更新");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 在表单显示之前更新占位符");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 适当处理不同的表单类型");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 为缺失的翻译提供错误处理");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// 添加优势部分
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("优势：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 改善多语言环境中的用户体验");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 减少表单填写错误");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 增加用户信任度和参与度");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• 为国际用户提供更好的可访问性");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
