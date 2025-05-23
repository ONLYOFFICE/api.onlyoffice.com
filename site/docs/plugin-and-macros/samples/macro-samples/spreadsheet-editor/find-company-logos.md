# Find company logos

Searches for a company logo throughout the spreadsheet using the [Logo API](https://api-ninjas.com/api/logo) offered by [API Ninjas](https://api-ninjas.com).

> To use this macro, you need to obtain your own API key from API Ninjas.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function() {
    // Get the active worksheet
    let worksheet = Api.GetActiveSheet();
    // Get the currently selected range of cells
    let selectedRange = Api.GetSelection();
    // Define a mapping of values to insert into specific columns
    let valuesToInsert = {
        "name": "B",
        "ticker": "C",
        "image": "D"
    };
    // Loop through the values to insert and populate empty cells
    for (let value in valuesToInsert) {
        let cell = worksheet.GetRange(valuesToInsert[value] + "1");
        if (!cell.GetValue()) cell.SetValue(value);
    } 
    // Iterate through each cell in the selected range
    selectedRange.ForEach(function (cell) {
        let value = cell.GetValue();
        if (value) {
            // Make an AJAX request to an API to retrieve data based on the cell value
            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/logo?name=' + value,
                headers: { 'X-Api-Key': 'yourAPIkey' },
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                    // Iterate through the API response and populate data into specific columns
                    for (let i = 0; i < result.length; i++) {
                        let data = result[i];
                        let currentRow = cell.GetRow() + i - 1;
                        // Populate data into specific columns and adjust column width
                        worksheet.GetRangeByNumber(currentRow, 1).SetValue(data.name);
                        worksheet.GetRangeByNumber(currentRow, 1).AutoFit(false, true);
                        worksheet.GetRangeByNumber(currentRow, 2).SetValue(data.ticker);
                        worksheet.GetRangeByNumber(currentRow, 2).AutoFit(false, true);
                        worksheet.GetRangeByNumber(currentRow, 3).SetValue(data.image);
                        worksheet.GetRangeByNumber(currentRow, 3).AutoFit(false, true);
                    }
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });
        }
    });
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [ForEach](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [AutoFit](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md)

## Result

<!-- imgpath -->

![Find Company Logos](/assets/images/plugins/find-company-logos.png#gh-light-mode-only)![Find Company Logos](/assets/images/plugins/find-company-logos.dark.png#gh-dark-mode-only)
