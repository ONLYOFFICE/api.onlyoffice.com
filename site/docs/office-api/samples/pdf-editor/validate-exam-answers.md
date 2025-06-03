# Validate exam answers

This example demonstrates how to check user responses in a school exam form created with the ONLYOFFICE Office API. It is a continuation of the [Create school exam form](../pdf-editor/exam-form.md) example, where multiple-choice questions were defined using radio buttons.

The script compares selected answers with predefined correct answers and calculates the final score.

```ts editor-pdf
let doc = Api.GetDocument();

// === Correct answers ===
const correctAnswers = {
  "1. Which planet is known as the Red Planet?": "Mars",
  "2. What is the name of Earth's natural satellite?": "The Moon",
  "3. Which star is at the center of our solar system?": "The Sun"
};

let result = {};
let score = 0;

// === Extract selected answers ===
doc.GetAllForms().forEach(form => {
  if (form.GetFormType() === "radioButtonForm" && form.IsChecked()) {
    
    const question = form.GetFormKey();
    const selected = form.GetTipText(); 
    
    const correct = correctAnswers[question];
    const isCorrect = selected === correct;

    result[question] = {
      selected,
      correct,
      result: isCorrect ? "Correct" : "Error"
    };

    if (isCorrect) score++;
  }
});

// === Output result ===
console.log(`Score: ${score} out of ${Object.keys(correctAnswers).length}`);
console.log("Details:", JSON.stringify(result, null, 2));
```

## Script execution steps

### Step 1. Define correct answers

This step defines a lookup object for correct answers using question text as keys.

- Define the exact text of each question as a key
- Assign the correct option text as the value

```ts
const correctAnswers = {
  "1. Which planet is known as the Red Planet?": "Mars",
  "2. What is the name of Earth's natural satellite?": "The Moon",
  "3. Which star is at the center of our solar system?": "The Sun"
};
```

### Step 2. Match selected answers with correct ones
This step extracts selected options and compares them with the correct answers.

- Use [GetFormType](../../usage-api/form-api/ApiCheckBoxForm/Methods/GetFormType.md) to check for `radioButtonForm`
- Use [IsChecked](../../usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md) to identify selected answers
- Use [GetFormKey](../../usage-api/form-api/ApiCheckBoxForm/Methods/GetFormKey.md) to retrieve the question text
- Use [GetTipText](../../usage-api/form-api/ApiCheckBoxForm/Methods/GetTipText.md) to retrieve the selected answer

```ts
doc.GetAllForms().forEach(form => {
  if (form.GetFormType() === "radioButtonForm" && form.IsChecked()) {
    
    const question = form.GetFormKey();
    const selected = form.GetTipText(); 
    
    const correct = correctAnswers[question];
    const isCorrect = selected === correct;

    result[question] = {
      selected,
      correct,
      result: isCorrect ? "Correct" : "Error"
    };

    if (isCorrect) score++;
  }
});
```

### Step 3. Display the final result
This step prints the user’s score and question-wise details.

- Calculate the number of correct answers
- Use `console.log()` to print a score summary and answer breakdown

```ts
console.log(`Score: ${score} out of ${Object.keys(correctAnswers).length}`);
console.log("Details:", JSON.stringify(result, null, 2));
```