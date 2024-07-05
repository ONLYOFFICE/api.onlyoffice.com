Now that you know how macros work, try to write your own macro. We have a table and need to color the alternate table rows (odd will be colored green, even will become red). The table contains 200 rows and columns from **A** to **S**. It would take a lot of time to do that manually. So, using macros will be the best solution for this problem.

1. Open ONLYOFFICE editors and create a new spreadsheet.

2. Now open the **Plugins** tab and select **Macros**. The macros window will pop up.

3. Click **New**. You will be presented with the basic function wrapper which will allow you to enter the necessary code:
   ```
   (function()
   {
       // ... your code goes here ...
   })();
   ```

4. Let's consult the [Office API documentation](/officeapi/spreadsheetapi) to see what we need to complete our task:

   * First, get the current worksheet using the [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet) method:
     ```
     var oWorksheet = Api.GetActiveSheet();
     ```

   * Then create a loop to run from the first to the last row:
     ```
     for (var i = 1; i < 200; i += 2) {
     }
     ```

   * Set two variables: one for odd rows, the second for even rows:
     ```
     var rowOdd = i, rowEven = i + 1;
     ```

   * Now that we can access both the odd and even rows, let's color them in proper colors. Set the desired colors using the [CreateColorFromRGB](/officeapi/spreadsheetapi/api/createcolorfromrgb) method. Get the cell range within the row using the [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange) method and set the color for the odd rows:

     ```
     oWorksheet.GetRange("A" + rowOdd + ":S" + rowOdd).SetFillColor(Api.CreateColorFromRGB(138, 181, 155));
     ```

     The same is for the even rows, but with a different color:

     ```
     oWorksheet.GetRange("A" + rowEven + ":S" + rowEven).SetFillColor(Api.CreateColorFromRGB(216, 227, 220));
     ```

Now let's sum it up with the complete script code:

```
(function()
{
    var oWorksheet = Api.GetActiveSheet();
    for (var i = 1; i < 200; i += 2) {
        var rowOdd = i, rowEven = i + 1;
        oWorksheet.GetRange("A" + rowOdd + ":S" + rowOdd).SetFillColor(Api.CreateColorFromRGB(138, 181, 155));
        oWorksheet.GetRange("A" + rowEven + ":S" + rowEven).SetFillColor(Api.CreateColorFromRGB(216, 227, 220));
    }
})();
```

Paste the code above to the macros window and click **Run**. The table rows from 1 to 200 will be colored alternately in less than a second.

![Alternate raws](/content/img/plugins/alternate-raws.png)

## Subscribing to events

To subscribe to the specified event and call the callback function when the event fires, use the [attachEvent](/officeapi/textdocumentapi/api/attachevent) method.

For example, to subscribe to an event when a hyperlink in a document is clicked, use the following lines:

```
Api.attachEvent("asc_onHyperlinkClick", function(){
    console.log("HYPERLINK!!!");
});
```

When you click any hyperlink in a document, the **asc\_onHyperlinkClick** event will be executed and the *"HYPERLINK!!!"* message will appear in the console.

![Click hyperlink](/content/img/plugins/click-hyperlink.png)

## Assigning macros

In the spreadsheet editor, you can assign a macro to the graphic object:

1. Right-click the graphic object.
2. Click **Assign Macro**.
3. Choose a macro in the appeared window. You can type the macro name in the corresponding field.
4. Click the **OK** button.

![Assign macro](/content/img/plugins/assign-macro.png)

To run the macro, just click the graphic object and the script will be executed.