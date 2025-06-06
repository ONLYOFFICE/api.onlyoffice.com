# Validate digital signature

Checks whether the form is signed and updates the date on any signature change.

```ts
(function validateSignatureAndTimestamp() {
    let signatureKey = "Signature";
    let timestampKey = "Timestamp";
    let doc = Api.GetDocument();
    let formFields = doc.GetAllForms();

    let signatureField = null;
    let timestampField = null;

    // Find the signature and timestamp forms
    formFields.forEach(field => {
        if (field.GetFormKey() === signatureKey) {
            signatureField = field;
        }
        if (field.GetFormKey() === timestampKey) {
            timestampField = field;
        }
    });

    // Warn if there is no signature or timestamp form
    if (!signatureField || !timestampField) {
        return;
    }

    // Get the signature image data
    let signatureValue = signatureField.GetImage();

    // Check if the signature is actually signed (not just an empty Base64 image)
    if (signatureValue && !isTransparentSignature(signatureValue)) {
        let timestamp = new Date().toLocaleString();
        timestampField.SetTime(timestamp);
    }

    // Function to detect an empty (transparent) signature image
    function isTransparentSignature(base64Image) {
        let emptySignaturePatterns = [
            "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAA", // Example transparent PNG
            "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAHklEQVR42mP8//8/AzGAiAMAqkYHFpVsLpoAAAAASUVORK5CYII=" // 1x1 transparent PNG
        ];

        return emptySignaturePatterns.some(pattern => base64Image.includes(pattern));
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [GetImage](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/GetImage.md), [SetTime](/docs/office-api/usage-api/form-api/ApiDateForm/Methods/SetTime.md)

## Result

![ValidateDigitalSignature](/assets/images/plugins/validate-digital-signature.png#gh-light-mode-only)
![ValidateDigitalSignature](/assets/images/plugins/validate-digital-signature.dark.png#gh-dark-mode-only)
