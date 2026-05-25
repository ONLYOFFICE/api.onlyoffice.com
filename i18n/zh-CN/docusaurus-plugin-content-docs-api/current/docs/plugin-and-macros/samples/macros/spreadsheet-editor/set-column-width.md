---
hide_table_of_contents: true
---

# 设置列宽

设置 **B** 列的宽度。

```ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/set-column-width.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/set-column-width.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
