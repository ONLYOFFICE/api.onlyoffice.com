---
sidebar_position: -2
---

# Converting VBA macros

ONLYOFFICE macros are different from Microsoft macros due to the reason the latter use the Visual Basic for Applications (VBA) scripting language. JavaScript is more flexible and can be used with any platform (which is important as ONLYOFFICE editors are supported on Windows, Linux and macOS platforms).

This can be the reason for some inconvenience in case you previously used Microsoft Office with macros, as they will become incompatible with ONLYOFFICE macros. You can convert your previously used macros to use them with the new editors in two ways:

- [Automatically](#automatic-conversion-using-ai-plugin) — using the AI plugin for ONLYOFFICE (recommended for quick conversion).

- [Manually](#manual-conversion-of-vba-macros) — by rewriting the logic in JavaScript using the [ONLYOFFICE Office API](../../office-api/get-started/overview.md).

## Automatic conversion using AI plugin

If you want to speed up the process, starting from version 9.0, you can use the AI plugin built into ONLYOFFICE to automatically convert VBA code into JavaScript compatible with ONLYOFFICE macros:

1. Configure the AI plugin. The detailed instructions on how to do this can be found [here](/docs/plugin-and-macros/samples/plugin-samples/ai.md#configuring).
2. Open the **View** tab and click **Macros**.
3. Click the **AI** icon in the **Macros** window and select **Convert from VBA**.

    ![AI plugin](/assets/images/plugins/ai-plugin.png#gh-light-mode-only)![AI plugin](/assets/images/plugins/ai-plugin.dark.png#gh-dark-mode-only)

4. Insert VBA code into the **Convert macros from VBA** window and click **Create**. The generated macro sample will be inserted into the **Macros** window.

    ![Convert VBA](/assets/images/plugins/convert-vba.png#gh-light-mode-only)![Convert VBA](/assets/images/plugins/convert-vba.dark.png#gh-dark-mode-only)

5. Review the code and make adjustments if necessary.

    > While the AI plugin can generate a complete and working macro, it's not always perfect. Make sure to review the output carefully and test it thoroughly, especially for complex macros.

6. Click ![Play icon](/assets/images/plugins/play.svg) to test the script.

For example, you have a simple VBA macro that unmerges all merged cells in the active sheet:

``` vba
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

You can paste this VBA code into the AI plugin converter. The plugin will return the following JavaScript macro:

``` ts
(function(){
    // This code will unmerge all the merged cells in the active worksheet
    
    // Get the active sheet
    var oWorksheet = Api.GetActiveSheet();
    
    // Get all cells in the worksheet by getting the used range
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // Check if there is any used range
    if (oUsedRange) {
        // Unmerge all cells in the used range
        oUsedRange.UnMerge();
    }
    
    // Alternative approach: Get the entire sheet range and unmerge
    // This ensures all possible merged cells are unmerged
    var oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

Run this macro to check that it successfully unmerges all merged cells in the worksheet.

## Manual conversion of VBA macros

If the AI-generated version doesn't work properly, or you want to fully understand and control the macro behavior, you can convert your VBA macro manually:

1. Analyze the logic of your original VBA macro.
2. Find equivalent methods and events in the [ONLYOFFICE Office API](../../office-api/get-started/overview.md).
3. Rewrite the macro in JavaScript.
4. Test it directly in ONLYOFFICE editors.

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
    let result = "";
    switch (run) {
    case 1:
      result = "=SUM(A1:A100)";
      break;
    case 2:
      result = "=SUM(A1:A300)";
      break;
    case 3:
      result = "=SUM(A1:A25)";
      break;
    default:
      break;
    }
    Api.GetActiveSheet().GetRange(`B${run}`).Value = result;
  }
})();
```

The same way any other Visual Basic for Applications script can be converted into JavaScript code compatible with ONLYOFFICE macros.
