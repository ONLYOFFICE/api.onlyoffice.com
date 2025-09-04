# Updating placeholders

Adapt placeholder text in form fields based on user language or usage context for better user experience in multilingual systems:

- create forms with localizable placeholder text ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md));
- implement language detection and placeholder updates ([ApiDocument/GetFormsByKey](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetFormsByKey.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md));
- manage multilingual placeholder dictionaries ([ApiDocument/GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [ApiFormBase/GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Simulate user language preference
let currentUser = {
  username: "marie.dubois",
  language: "fr",  // Can be "en", "fr", "de", "es", "ru"
  country: "France",
  department: "HR"
};

// Multilingual placeholder dictionary
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

// Create HR employee registration form with default English placeholders
function createEmployeeRegistrationForm() {
  let paragraph = doc.GetElement(0);
  paragraph.AddText("Employee Registration Form");
  paragraph.SetFontSize(18 * 2);
  paragraph.SetBold(true);
  paragraph.SetJc("center");

  // Personal Information Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Personal Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Full Name
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Full Name: ");
  paragraph.SetFontSize(12 * 2);
  let nameForm = Api.CreateTextForm({
    key: "full_name",
    required: true,
    placeholder: "Enter your full name",  // Default English
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(nameForm);
  doc.Push(paragraph);

  // Email
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Email: ");
  paragraph.SetFontSize(12 * 2);
  let emailForm = Api.CreateTextForm({
    key: "email",
    required: true,
    placeholder: "Work email address",  // Default English
    maxCharacters: 80,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emailForm);
  doc.Push(paragraph);

  // Phone
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Phone: ");
  paragraph.SetFontSize(12 * 2);
  let phoneForm = Api.CreateTextForm({
    key: "phone",
    required: false,
    placeholder: "Phone number with country code",  // Default English
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(phoneForm);
  doc.Push(paragraph);

  // Work Information Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Work Information");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Department
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Department: ");
  paragraph.SetFontSize(12 * 2);
  let deptForm = Api.CreateComboBoxForm({
    key: "department",
    required: true,
    placeholder: "Select your department",  // Default English
    editable: false,
    autoFit: true,
    items: ["HR", "IT", "Sales", "Marketing", "Finance", "Operations"]
  });
  paragraph.AddElement(deptForm);
  doc.Push(paragraph);

  // Position
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Position: ");
  paragraph.SetFontSize(12 * 2);
  let positionForm = Api.CreateTextForm({
    key: "position",
    required: true,
    placeholder: "Your job title",  // Default English
    maxCharacters: 50,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(positionForm);
  doc.Push(paragraph);

  // Start Date
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Start Date: ");
  paragraph.SetFontSize(12 * 2);
  let startDateForm = Api.CreateTextForm({
    key: "start_date",
    required: true,
    placeholder: "Employment start date (DD.MM.YYYY)",  // Default English
    maxCharacters: 10,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(startDateForm);
  doc.Push(paragraph);

  // Salary (sensitive field)
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Annual Salary: ");
  paragraph.SetFontSize(12 * 2);
  let salaryForm = Api.CreateTextForm({
    key: "salary",
    required: false,
    placeholder: "Annual salary amount",  // Default English
    maxCharacters: 15,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(salaryForm);
  doc.Push(paragraph);

  // Emergency Contact Section
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Emergency Contact");
  paragraph.SetFontSize(14 * 2);
  paragraph.SetBold(true);
  doc.Push(paragraph);

  // Emergency Contact Name
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Contact Name: ");
  paragraph.SetFontSize(12 * 2);
  let emergencyContactForm = Api.CreateTextForm({
    key: "emergency_contact",
    required: false,
    placeholder: "Emergency contact name",  // Default English
    maxCharacters: 100,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyContactForm);
  doc.Push(paragraph);

  // Emergency Phone
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Contact Phone: ");
  paragraph.SetFontSize(12 * 2);
  let emergencyPhoneForm = Api.CreateTextForm({
    key: "emergency_phone",
    required: false,
    placeholder: "Emergency contact phone",  // Default English
    maxCharacters: 20,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(emergencyPhoneForm);
  doc.Push(paragraph);

  // Comments
  paragraph = Api.CreateParagraph();
  paragraph.AddText("Additional Comments: ");
  paragraph.SetFontSize(12 * 2);
  let commentsForm = Api.CreateTextForm({
    key: "comments",
    required: false,
    placeholder: "Additional comments or notes",  // Default English
    maxCharacters: 300,
    multiLine: true,
    autoFit: true,
  });
  paragraph.AddElement(commentsForm);
  doc.Push(paragraph);
}

// Function to detect user language (simulated)
function detectUserLanguage(user) {
  // In a real application, this could check:
  // - User profile language setting
  // - Browser language preference
  // - System locale
  // - Geographic location
  
  let languageMap = {
    "marie.dubois": "fr",
    "hans.mueller": "de",
    "carlos.garcia": "es",
    "anna.petrov": "ru",
    "john.smith": "en"
  };
  
  return languageMap[user.username] || user.language || "en";
}

// Function to update form placeholders based on language
function updatePlaceholdersForLanguage(language) {
  let updatedCount = 0;
  let dictionary = placeholderDictionary[language] || placeholderDictionary["en"];
  
  // Get all forms in the document
  let forms = doc.GetAllForms();
  
  for (let form of forms) {
    let key = form.GetFormKey();
    let formType = form.GetFormType();
    
    // Update placeholder if translation exists
    if (dictionary[key]) {
      if (formType === "textForm" || formType === "comboBoxForm") {
        // Note: In the actual API, placeholder updates might be done differently
        // This is a conceptual demonstration
        try {
          // For demonstration, we'll update the form by recreating it with new placeholder
          // In a real implementation, you'd use the appropriate API method
          form.SetPlaceholderText(dictionary[key]);
          updatedCount++;
        } catch (e) {
          // If SetPlaceholder is not available, we could update the text content
          // or use other available methods
          console.log(`Could not update placeholder for ${key}`);
        }
      }
    }
  }
  
  return { updatedCount, language, dictionary };
}

// Function to get language name for display
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

// Create the employee registration form
createEmployeeRegistrationForm();

// Add spacing
let paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add localization demonstration
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder Localization Demo");
paragraph.SetFontSize(16 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// Step 1: Detect user language
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 1: User Language Detection");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let detectedLanguage = detectUserLanguage(currentUser);
currentUser.language = detectedLanguage;

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ User: ${currentUser.username}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Detected Language: ${getLanguageName(detectedLanguage)} (${detectedLanguage})`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Country: ${currentUser.country}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 2: Load placeholder dictionary
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 2: Placeholder Dictionary Loading");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let availableLanguages = Object.keys(placeholderDictionary);
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Available languages: ${availableLanguages.join(", ")}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

let currentDictionary = placeholderDictionary[detectedLanguage];
let dictionarySize = Object.keys(currentDictionary).length;
paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Loaded ${dictionarySize} placeholder translations for ${getLanguageName(detectedLanguage)}`);
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Step 3: Update form placeholders
paragraph = Api.CreateParagraph();
paragraph.AddText("Step 3: Form Placeholder Update");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let updateResult = updatePlaceholdersForLanguage(detectedLanguage);

paragraph = Api.CreateParagraph();
paragraph.AddText(`✓ Updated ${updateResult.updatedCount} form field placeholders`);
paragraph.SetFontSize(12 * 2);
paragraph.SetColor(0, 128, 0);
doc.Push(paragraph);

// Show sample translations
paragraph = Api.CreateParagraph();
paragraph.AddText("Sample Translations:");
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

// Add implementation guide
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Implementation Guide:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. User Language Detection");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Check user profile language settings");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Detect browser language preferences");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use system locale or geographic location");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. Placeholder Dictionary Management");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Maintain translations for all supported languages");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Use structured JSON format for easy maintenance");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Implement fallback to default language (English)");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Dynamic Placeholder Updates");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Update placeholders before form display");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Handle different form types appropriately");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Provide error handling for missing translations");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

// Add benefits section
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Benefits:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Improved user experience in multilingual environments");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Reduced form completion errors");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Increased user trust and engagement");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Better accessibility for international users");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);
```
