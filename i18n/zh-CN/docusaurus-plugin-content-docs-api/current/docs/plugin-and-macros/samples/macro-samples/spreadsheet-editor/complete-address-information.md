# # 补全地址信息

完善基础地址数据，补充详细地址信息并插入到表格中。

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
    let API_KEY = 'yourAPIkey';
    let ENDPOINT = 'https://api.geoapify.com/v1/geocode/search';
    let worksheet = Api.GetActiveSheet();
    let row = 2;
    makeRequest(worksheet.GetRange(`A${row}`).GetText());
    
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
    
    // RESPONSE（响应）
    function successFunction(response) {
        let data = createAddressDetailsObject(response);
        pasteAddressDetails(data);
        reload();
    }
    // 如果找到地址，则创建地址详情对象
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
    // 用“-”替换缺失字段
    function checkMissingData(data) {
        Object.keys(data).forEach(key => {
            if(data[key] === undefined) data[key] = '-';
        })
        return data;
    }
    
    // PASTE（粘贴）
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
        // 递归执行直到“地址”值为空
        row++;
        makeRequest(worksheet.GetRange(`A${row}:A${row}`).GetText());
    }
    // 修改后需要重新加载表格
    function reload() {
        let reload = setInterval(function(){
            Api.asc_calculate(Asc.c_oAscCalculateType.All);
        })
    }
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetText](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md)

> 要使宏正常运行，请将 *yourAPIkey* 替换为从 [Geoapify](https://www.geoapify.com/) 获取的 API 密钥。

## 结果

![Write data](/assets/images/plugins/complete-address-information.png#gh-light-mode-only)![Write data](/assets/images/plugins/complete-address-information.dark.png#gh-dark-mode-only)
