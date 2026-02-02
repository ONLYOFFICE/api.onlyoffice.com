# renameFormKeys

This function collects all form fields (keys/placeholders), renames the fields to UPPER_SNAKE_CASE, and optionally updates placeholders.

## Prompts

- Rename all form keys
- Generate unique form fields
- Create keys from placeholders
- Standardize form field names
- Make form keys consistent

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "renameFormKeys",
  description:
    "Collect all form fields (keys/placeholders), ask the AI to generate unique UPPER_SNAKE_CASE keys, then rename the fields (and optionally update placeholders).",
  // Define parameters so the AI knows what to ask for
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description:
          "Instruction for the AI (e.g., 'Rename all form keys to UPPER_SNAKE_CASE' or 'Create unique keys from placeholders').",
      },
    },
    required: ["prompt"],
  },
  // Provide examples to train the AI on usage
  examples: [
    {
      prompt: "Rename all form keys",
      arguments: {
        prompt: "Rename all form keys to be unique and descriptive",
      },
    },
    {
      prompt: "Generate unique form fields",
      arguments: {
        prompt: "Generate unique UPPER_SNAKE_CASE keys for all form fields",
      },
    },
    {
      prompt: "Create keys from placeholders",
      arguments: {
        prompt:
          "Create new keys for the form fields based on their placeholders",
      },
    },
    {
      prompt: "Standardize form field names",
      arguments: {
        prompt: "Standardize all form field names to UPPER_SNAKE_CASE format",
      },
    },
    {
      prompt: "Make form keys consistent",
      arguments: {
        prompt:
          "Make all form keys consistent and meaningful using UPPER_SNAKE_CASE",
      },
    },
  ],
});
```

### Parameters

| Name   | Type   | Example                | Description                  |
| ------ | ------ | ---------------------- | ---------------------------- |
| prompt | string | "Rename all form keys" | Instruction for the AI agent |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
  // Helper function for parsing JSON from AI response
  function safeParseJsonFromText(text) {
    if (!text) throw new Error("Empty AI content");
    let trimmed = ("" + text).trim();
    try {
      return JSON.parse(trimmed);
    } catch (_) {
      // Extract JSON from text if wrapped in other content
      const i1 = trimmed.indexOf("{");
      const i2 = trimmed.lastIndexOf("}");
      if (i1 === -1 || i2 === -1 || i2 <= i1) {
        throw new Error(
          'AI content is not valid JSON. Got: "' +
            trimmed.slice(0, 200) +
            '..."'
        );
      }
      return JSON.parse(trimmed.slice(i1, i2 + 1));
    }
  }

  // Step 1: Collect all form fields from the document
  let fieldsMap = await Asc.Editor.callCommand(function () {
    var doc = Api.GetDocument();
    var forms = doc.GetAllForms();
    var out = {};

    // Build a map of form fields
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      var key = f.GetFormKey();
      var t = f.GetFormType();
      var ph = "";
      if (typeof f.GetPlaceholderText === "function") {
        try {
          ph = f.GetPlaceholderText() || "";
        } catch (e) {
          ph = "";
        }
      }

      var val = "";
      var chk = null;
      if (t === "textForm" || t === "comboBoxForm") {
        // Get text value for text and combo box forms
        if (typeof f.GetText === "function") {
          try {
            val = f.GetText() || "";
          } catch (e) {
            val = "";
          }
        }
      } else if (t === "checkBoxForm") {
        // Get checked state for checkbox forms
        if (typeof f.IsChecked === "function") {
          try {
            chk = !!f.IsChecked();
          } catch (e) {
            chk = null;
          }
        }
      }

      out[key] = { type: t, ph: ph, val: val, chk: chk };
    }
    return out;
  });

  // Exit if no form fields found
  if (!fieldsMap || !Object.keys(fieldsMap).length) return;

  // Step 2: Prepare system instructions for AI
  const systemHint =
    "Return ONLY valid JSON with two properties: " +
    '"keys" (map oldKey->newKey) and "newValues" (map newKey->placeholder). ' +
    "Rules: " +
    "1) New keys MUST be UPPER_SNAKE_CASE (letters, numbers, underscores only). " +
    '2) Derive each new key from the semantic meaning of the field. Prefer "ph" (placeholder), ' +
    '   but if "ph" is empty, use "val" (current text). Do NOT include words like ENTER/INDICATE in the key. ' +
    "3) If multiple fields share the same meaning, add numeric suffixes (_1, _2, …). " +
    "4) All new keys must be globally unique. " +
    '5) "newValues" must map each new key to a short placeholder (≤60 chars). ' +
    "Output JSON only — no explanations, no code fences.";

  // Combine system hint with form fields data
  const argPrompt =
    systemHint + "\n\nFIELDS_JSON:\n" + JSON.stringify({ fields: fieldsMap });
  console.log("[AI PROMPT PREVIEW]", argPrompt);

  // Step 3: Create AI chat request
  let requestEngine = AI.Request.create(AI.ActionType.Chat);
  if (!requestEngine) return;

  // Begin action group
  await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
  await Asc.Editor.callMethod("StartAction", [
    "Block",
    "AI (" + requestEngine.modelUI.name + ")",
  ]);

  let isSendedEndLongAction = false;
  async function checkEndAction() {
    if (!isSendedEndLongAction) {
      await Asc.Editor.callMethod("EndAction", [
        "Block",
        "AI (" + requestEngine.modelUI.name + ")",
      ]);
      isSendedEndLongAction = true;
    }
  }

  // Step 4: Send request to AI and collect response
  let resultText = "";

  let result = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      console.log("[AI RAW RESPONSE]", data);
      await checkEndAction();
      resultText += data;
      await Asc.Editor.callMethod("EndAction", ["GroupActions", "", "cancel"]);
      await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
    }
  );

  await checkEndAction();

  await Asc.Editor.callMethod("EndAction", ["GroupActions", "", "cancel"]);
  await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

  // Step 5: Parse AI response
  let ai;
  try {
    ai = safeParseJsonFromText(resultText);
  } catch (e) {
    try {
      ai =
        result && result.message && typeof result.message.content === "string"
          ? safeParseJsonFromText(result.message.content)
          : null;
    } catch (_) {}
  }

  // Validate AI response structure
  if (
    !ai ||
    typeof ai !== "object" ||
    !ai.keys ||
    typeof ai.keys !== "object"
  ) {
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    return;
  }
  if (!ai.newValues || typeof ai.newValues !== "object") {
    ai.newValues = {};
  }

  // Step 6: Apply new keys to form fields
  Asc.scope._keysMap = ai.keys;
  Asc.scope._newValues = ai.newValues;
  await Asc.Editor.callCommand(function () {
    var keysMap = Asc.scope._keysMap || {};
    var newValues = Asc.scope._newValues || {};
    var doc = Api.GetDocument();
    var forms = doc.GetAllForms();

    // Rename each form key based on AI mapping
    for (var i = 0; i < forms.length; i++) {
      var form = forms[i];
      var oldKey = form.GetFormKey();
      var newKey = oldKey in keysMap ? keysMap[oldKey] : null;
      if (!newKey) continue;

      form.SetFormKey(newKey);
    }
  });

  // End action group
  await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/GetFormKey.md), [GetFormType](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/GetFormType.md), [GetPlaceholderText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/GetPlaceholderText.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [IsChecked](/docs/office-api/usage-api/text-document-api/ApiCheckBoxForm/Methods/IsChecked.md), [SetFormKey](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetFormKey.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands/#ascscope-object.md)

## Result (Video needs to be updated)

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/text-document-editor/renameFormKeys.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/renameFormKeys.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
