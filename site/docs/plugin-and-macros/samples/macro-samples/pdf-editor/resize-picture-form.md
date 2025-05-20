# Resize picture form

This macro resizes PictureForms based on a predefined size or aspect ratio across the document.

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
    let resizedCount = 0;

    for (let form of forms) {
        if (form.GetFormType() === 'pictureForm') {
            
            if (pictureFormsKey === '' || form.GetFormKey() === pictureFormsKey) {
                let img = form.GetImage();
                let newWidth = pictureWidth * 10 * 36000;
                let newHeight = aspectRatio > 0 ? newWidth / aspectRatio : pictureHeight * 10 * 36000;

                form.SetImage(img, newWidth, newHeight);
                resizedCount++;
            }
        }
    }

    console.log(`${resizedCount} picture form${resizedCount === 1 ? '' : 's'} resized successfully.`);
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormKey.md), [GetImage](../../../../office-api/usage-api/form-api/ApiPictureForm/Methods/GetImage.md), [SetImage](../../../../office-api/usage-api/form-api/ApiPictureForm/Methods/SetImage.md)

## Result

![ResizePictureForm](/assets/images/plugins/resize-picture-form.png#gh-light-mode-only)
![ResizePictureForm](/assets/images/plugins/resize-picture-form.dark.png#gh-dark-mode-only)