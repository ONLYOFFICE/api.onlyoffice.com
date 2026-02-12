---
hide_table_of_contents: true
---

# Resize picture form

Resizes PictureForms based on a predefined size or aspect ratio across the document.

```ts
(function()
{
    /*
    If you enter a Picture Forms key, only images with that key will have their size changed.
    If you leave the Picture Forms key empty, the size will be changed for all Picture Forms.
    */

    let pictureFormsKey = ''; // Enter the Picture Forms key to resize, or leave empty to resize all
    let pictureWidth = 2; // Enter the desired width in centimeters
    let pictureHeight = 2; // Enter the desired height in centimeters
    let aspectRatio = 0; // Optional: Enter aspect ratio (width / height), or leave as 0 to use width and height directly

    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        if (form.GetFormType() === 'pictureForm') {
            
            if (pictureFormsKey === '' || form.GetFormKey() === pictureFormsKey) {
                let img = form.GetImage();
                let newWidth = pictureWidth * 10 * 36000;
                let newHeight = aspectRatio > 0 ? newWidth / aspectRatio : pictureHeight * 10 * 36000;

                form.SetImage(img, newWidth, newHeight);
            }
        }
    }
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [GetImage](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/GetImage.md), [SetImage](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/SetImage.md)

## Result

![ResizePictureForm](/assets/images/plugins/resize-picture-form.png#gh-light-mode-only)
![ResizePictureForm](/assets/images/plugins/resize-picture-form.dark.png#gh-dark-mode-only)