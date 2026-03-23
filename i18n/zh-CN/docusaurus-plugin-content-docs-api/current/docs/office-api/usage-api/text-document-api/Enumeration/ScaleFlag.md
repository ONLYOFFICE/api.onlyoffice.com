# ScaleFlag

在图片表单中缩放图像的条件。

## 类型

枚举

## 值

- "always"
- "never"
- "tooBig"
- "tooSmall"


## 示例

This example sets the scaling condition when the current picture form is scaled if it is too big.

```javascript editor-docx
// How to set a scale flag for picture form.

// Set picture form scale flag to "tooBig".

pictureForm.SetScaleFlag("tooBig");
```
