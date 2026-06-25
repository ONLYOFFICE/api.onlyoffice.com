---
hide_table_of_contents: true
description: 根据部分数据自动补全地址字段。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 补全地址信息

完善基础地址数据，补充详细地址信息并插入到表格中。

```ts
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
    
    // RESPONSE（响应）
    function successFunction(response) {
        let data = createAddressDetailsObject(response);
        pasteAddressDetails(data);
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
                [data.country, data.county, data.city, data.post_code, data.full_address_line]
            ]);
        }
        range.AutoFit(false, true);
        // 递归执行直到”地址”值为空
        row++;
        makeRequest(oWorksheet.GetRange(`A${row}:A${row}`).GetText());
    }
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetText](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [AutoFit](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md)

:::note
要使宏正常运行，请将 *YOUR_API_KEY* 替换为从 [Geoapify](https://www.geoapify.com/) 获取的 API 密钥。
:::

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/complete-address-information" dark />
