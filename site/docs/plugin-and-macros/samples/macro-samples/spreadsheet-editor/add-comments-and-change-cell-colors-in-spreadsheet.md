# Add comments and change cell colors in spreadsheet

Adds comments to the cells in the selection and can also change the background color of the cells.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range = Api.GetSelection();
  range.ForEach(function (range) {
    let sValue = range.GetValue();
    if (sValue > 100) {
      range.AddComment("The value is bigger than 100.");
      range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
    } else {
      range.AddComment("The value is less than 100.");
      range.SetFillColor(Api.CreateColorFromRGB(204, 255, 255));
    }
  });
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [AddComment](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub SimpleAddCommentsAndChangeColor()
    Range("A1").ClearComments
    Range("A1").AddComment "This is a comment for A1"
    Range("A1").Interior.Color = RGB(255, 255, 0)
End Sub
```

## Result

<!-- imgpath -->

![Add comments and change cell colors in spreadsheet](/assets/images/plugins/add-comments-and-highlight-cells-spreadsheet.png#gh-light-mode-only)![Add comments and change cell colors in spreadsheet](/assets/images/plugins/add-comments-and-highlight-cells-spreadsheet.dark.png#gh-dark-mode-only)
