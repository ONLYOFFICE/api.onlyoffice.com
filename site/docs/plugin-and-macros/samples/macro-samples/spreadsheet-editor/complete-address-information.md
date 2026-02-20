---
hide_table_of_contents: true
---

# Complete address information

Completes the basic address data with detailed address information and inserts it into a spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
// Macros structure:
// Read Address (Cell A2) ->
// REQUEST Data -> 
// Get RESPONSE and Create Address Details object ->
// PASTE Address Details -> 
// Read Address on the next row (Cell A3) and REQUEST Data

(function()
{
    let API_KEY = 'YOUR_API_KEY';
    let ENDPOINT = 'https://api.geoapify.com/v1/geocode/search';
    let oWorksheet = Api.GetActiveSheet();
    let row = 2;
    makeRequest(oWorksheet.GetRange(`A${row}`).GetText());
    
    // REQUEST
    function makeRequest(ADDRESS) {
        if (ADDRESS === '') return;
        $.ajax({
            url: `${ENDPOINT}?text=${addressToRequest(ADDRESS)}&apiKey=${API_KEY}`,
            dataType: 'json',
        }).done(successFunction);
    }
    // London, United Kingdom -> London%2C%20United%20Kingdom
    function addressToRequest (address) {
        return address.replaceAll(' ', '%20').replaceAll(',', '%2C');
    }
    
    // RESPONSE
    function successFunction(response) {
        let data = createAddressDetailsObject(response);
        pasteAddressDetails(data);
        reload();
    }
    // Create Address Details object if address is found
    function createAddressDetailsObject(response) {
        if (response.features.length === 0) {
            return { error: 'Address not found' };
        }
        let data = {
            country: response.features[0].properties.country,
            county: response.features[0].properties.county,
            city: response.features[0].properties.city,
            post_code: response.features[0].properties.postcode,
            full_address_line: response.features[0].properties.formatted
        };
        data = checkMissingData(data);
        return data;
    }
    // Replace missing fields with '-'
    function checkMissingData(data) {
        Object.keys(data).forEach(key => {
            if(data[key] === undefined) data[key] = '-';
        })
        return data;
    }
    
    // PASTE
    function pasteAddressDetails(data) {
        let range = oWorksheet.GetRange(`B${row}:F${row}`);
        if (data.error !== undefined) {
            range.SetValue([[data.error]]);
        } else {
            range.SetValue([
                [
                    data.country,
                    data.county,
                    data.city,
                    data.post_code,
                    data.full_address_line
                ]
            ]);
        }
        // Execute recursively until "Address" value is empty
        row++;
        makeRequest(oWorksheet.GetRange(`A${row}:A${row}`).GetText());
    }
    // Sheet has to be reloaded on changes
    function reload() {
        let reload = setInterval(function(){
            Api.asc_calculate(Asc.c_oAscCalculateType.All);
        })
    }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md)

> For the macros to function, replace *yourAPIkey* with the API key obtained from [Geoapify](https://www.geoapify.com/).

## Result

![Write data](/assets/images/plugins/complete-address-information.png#gh-light-mode-only)![Write data](/assets/images/plugins/complete-address-information.dark.png#gh-dark-mode-only)
