---
order: -2
---

ONLYOFFICE macros are different from Microsoft macros due to the reason the latter use the Visual Basic for Applications (VBA) scripting language. JavaScript is more flexible and can be used with any platform (which is important as ONLYOFFICE editors are supported on Windows, Linux and macOS platforms).

This can be the reason for some inconvenience in case you previously used Microsoft Office with macros, as they will become incompatible with ONLYOFFICE macros. You can convert your previously used macros to use them with the new editors.

The process is not too complicated. Let's see the following example:

``` vb
Sub Example()
    Dim myRange
    Dim result
    Dim Run As Long
 
    For Run = 1 To 3
        Select Case Run
        Case 1
            result = "=SUM(A1:A100)"
        Case 2
            result = "=SUM(A1:A300)"
        Case 3
            result = "=SUM(A1:A25)"
        End Select
        ActiveSheet.range("B" & Run) = result
    Next Run
End Sub
```

The macro counts the sum of the values from the three cell ranges of the **A** column and puts the results to the three cells of the **B** column.

The exact same thing can be achieved using ONLYOFFICE macros, the code will be almost identical and easy to understand if you know both Visual Basic for Applications and JavaScript:

<!-- This code is related to macros. -->

<!-- eslint-skip -->

``` ts
(function()
{
  for (let run = 1; run <= 3; run += 1) {
    let result = ""
    switch (run) {
    case 1:
      result = "=SUM(A1:A100)"
      break
    case 2:
      result = "=SUM(A1:A300)"
      break
    case 3:
      result = "=SUM(A1:A25)"
      break
    default:
      break
    }
    Api.GetActiveSheet().GetRange(`B${run}`).Value = result
  }
})();
```

The same way any other Visual Basic for Applications script can be converted into JavaScript code compatible with ONLYOFFICE macros. In future we hope to add a converter to our editors which will allow to convert the macros automatically.
