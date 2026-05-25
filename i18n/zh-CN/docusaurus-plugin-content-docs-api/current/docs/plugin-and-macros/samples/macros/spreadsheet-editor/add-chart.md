---
hide_table_of_contents: true
---

# 添加图表

向选定的单元格范围添加一个新图表。

```ts
(function()
{
    Api.GetActiveSheet().AddChart("'Sheet1'!$C$5:$D$7", true, "bar", 2, 105 * 36000, 105 * 36000, 0, 0, 9, 0);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [AddChart](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    With ActiveSheet.ChartObjects.Add(Left:=300, Width:=300, Top:=10, Height:=300)
        .Chart.SetSourceData Source:=Sheets("Sheet1").Range("C5:D7")
    End With
End Sub
```

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/add-chart.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/add-chart.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
