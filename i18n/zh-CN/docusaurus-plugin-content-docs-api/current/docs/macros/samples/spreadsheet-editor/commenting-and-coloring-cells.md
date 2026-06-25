---
hide_table_of_contents: true
description: 为单元格添加注释并更改其背景颜色。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 批注与单元格着色

为所选单元格添加批注，也可以更改单元格的背景颜色。

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

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [AddComment](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md), [SetFillColor](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## 参考 Microsoft VBA 宏代码

```vb
Sub SimpleAddCommentsAndChangeColor()
    Range("A1").ClearComments
    Range("A1").AddComment "This is a comment for A1"
    Range("A1").Interior.Color = RGB(255, 255, 0)
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/commenting-and-coloring-cells" dark />
