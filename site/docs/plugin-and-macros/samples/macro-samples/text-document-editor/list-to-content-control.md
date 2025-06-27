# List to content control

Converts a list of paragraphs to content controls.

```ts
(function () {
    // Function that returns sales tax data from api-ninjas.com
    let getSalesTax = async function (value) {

        if (undefined === value) {
            value = 90210;
        }

        // Convert to string and add missing zeros if needed
        let zipStr = value.toString();
        while (zipStr.length < 5) {
            zipStr = '0' + zipStr;
        }

        let url = 'https://api.api-ninjas.com/v1/salestax?zip_code=' + zipStr;

        let request = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'iuslyR4j2oD86GaGROHPjw==JNDwvSPrdmcodaVD',
                'Content-Type': 'application/json'
            }
        });

        let jsonData = await request.json();
        let taxRate = jsonData[0].state_rate;
        return taxRate;
    };

    /**
     * Function that returns state sales tax.
     * @customfunction
     * @param {number} value - zip code.
     * @returns {number} Returns state sales tax data.
     */
    async function salestax(value) {
        return await getSalesTax(value);
    }

    // Add the custom function 
    Api.AddCustomFunction(salestax);
})();
```

Methods used: [AddCustomFunction](../../../../office-api/usage-api/text-document-api/Api/Methods/AddCustomFunction.md)

## Result

![ListToContentControl](/assets/images/plugins/list-to-content-control.png#gh-light-mode-only)
![ListToContentControl](/assets/images/plugins/list-to-content-control.dark.png#gh-dark-mode-only)
