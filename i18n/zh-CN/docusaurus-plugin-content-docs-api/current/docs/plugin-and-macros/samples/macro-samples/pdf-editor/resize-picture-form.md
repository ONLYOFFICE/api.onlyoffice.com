# 调整图片表单尺寸

根据预设的尺寸或宽高比调整文档中所有图片表单的大小。

```ts
(function()
{
    /*
    如果指定图片表单键值，则只调整匹配该键值的图片尺寸。
    如果留空图片表单键值，则会调整所有图片表单的尺寸。
    */

    let pictureFormsKey = ''; // 输入要调整的图片表单键值，留空则调整所有图片尺寸
    let pictureWidth = 2; // 输入目标宽度（单位：厘米）
    let pictureHeight = 2; // 输入目标高度（单位：厘米）
    let aspectRatio = 0; // 可选：可输入宽高比（宽度/高度），默认 0 则直接使用原来的宽高值

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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有表单](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)，[获取表单类型](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)，[获取表单键值](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)，[获取图片](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/GetImage.md)，[设置图片](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/SetImage.md)

## 结果

![图片表单尺寸调整](/assets/images/plugins/resize-picture-form.png#gh-light-mode-only)
![图片表单尺寸调整](/assets/images/plugins/resize-picture-form.dark.png#gh-dark-mode-only)