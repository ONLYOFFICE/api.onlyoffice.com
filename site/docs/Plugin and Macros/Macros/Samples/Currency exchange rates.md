---
order: -9
---

## Description

Returns information about the exchange rates for the last several days and fills in the table with the received values. A macro for the USD-EUR currency pair is presented here but you can get information about other exchange rates by modifying the *sCurPair* variable value ("EUR\_USD", "BTC\_USD", etc).

> In this macro, the third-party service *CurrencyConverterApi.com* is used to get information about the exchange rates. There is a limit on the number of requests per hour. If this limit is exceeded, the macro will not work. If you want to use this macro, it is better to register on the service website and use your own key in the macro code.

You can [assign this macro](../Writing%20macros.md#assigning-macros) to the autoshape. When you click on it, a macro is executed, the table is filled in with the relevant data and the corresponding chart is rebuilt.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    var sCurPair = "USD_EUR";

    function formatDate(d) {
        var month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    function previousWeek(){
        var today = new Date();
        var prevweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
        return prevweek;
    }

    var sDate = formatDate(previousWeek());
    var sEndDate = formatDate(new Date());
    var apiKey = 'e5ed9f0b2b3aa6f4158f';
    var sUrl = 'https://free.currconv.com/api/v7/convert?q='
            + sCurPair + '&compact=ultra' + '&date=' + sDate + "&endDate=" + sEndDate + '&apiKey=e5ed9f0b2b3aa6f4158f';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", sUrl, false);
    xmlHttp.send();
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var oData = JSON.parse(xmlHttp.responseText);
        for(var key in oData) {
            var sheet = Api.GetSheet("Sheet1");
            var oRange = sheet.GetRangeByNumber(0, 1);
            oRange.SetValue(key);
            var oDates = oData[key];
            var nRow = 1;
            for(var date in oDates) {
                oRange = sheet.GetRangeByNumber(nRow, 0);
                oRange.SetValue(date);
                oRange = sheet.GetRangeByNumber(nRow, 1);
                oRange.SetValue(oDates[date]);
                nRow++;
            }
        }
    }
})();
```

Methods used: GetSheet, GetRangeByNumber, SetValue

## Result

![Currency pair USD - EUR](/assets/images/plugins/currencies-usd-eur.png)
