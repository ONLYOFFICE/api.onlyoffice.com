# Generate summary column with AI

This example demonstrates how to generate one-sentence summary comments for Olympic medal performance using the ONLYOFFICE spreadsheet API and OpenAI's GPT-4 model. The script loops through a dataset of countries and their gold, silver, and bronze medal counts, generates a short summary per row, and inserts it into the corresponding comment column.

```ts editor-xlsx zoom=80 templateUrl=https://static.onlyoffice.com/assets/docs/samples/demo.xlsx
const OPENAI_API_KEY = "sk-proj..." // replace with your OpenAI API key

function commentOnCountry(row, country, gold, silver, bronze, total) {
    const prompt = `Write a short one-sentence summary about ${country}'s Olympic medal performance. They won ${gold} gold, ${silver} silver, and ${bronze} bronze medals, for a total of ${total}. Use a confident and slightly analytical tone. Return just the sentence. Maximum 70 chars.`

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a sports data analyst." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7
        })
    })
    .then(res => res.json())
    .then(json => {
        const result = json.choices?.[0]?.message?.content?.trim();
        if (!result) return;
        const worksheet = Api.GetActiveSheet();
        const commentCell = worksheet.GetRangeByNumber(row, 7); // Column H
        commentCell.SetValue(`${result}`);
    });
}

const worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(7, 50);
for (let i = 2; i < 27; i++) {
    worksheet.SetRowHeight(i, 50);
}

const commentsRange = worksheet.GetRange("H3:H27")
commentsRange.SetWrap(true);
commentsRange.SetFontSize(12);

// use AI to generate comments if OpenAI API key is provided
if (OPENAI_API_KEY != "sk-proj...") {
    const data = worksheet.GetRange("A:G27").GetValue();

    for (let i = 2; i < data.length; i++) {
        const row = data[i];
        const country = row[2];
        const gold = row[3];
        const silver = row[4];
        const bronze = row[5];
        const total = row[6];

        if (country && gold && silver && bronze && total) {
            commentOnCountry(i, country, gold, silver, bronze, total);
        }
    }
} else { // Paste sample data if OpenAI API key is not provided
    const sample_data = [
        ["USA dominated with a total of 121 Olympic medals, including 46 golds."],
        ["GB dominated with a total of 67 Olympic medals; 27 gold, 23 silver, 17 bronze."],
        ["China excelled with 70 Olympic medals: 26 gold, 18 silver, and 26 bronze."],
        ["Russia secured 56 Olympic medals, with a balanced distribution across gold, silver, and bronze."],
        ["Germany clinched 42 Olympic medals, including 17 Golds, excelling in competition."],
        ["Japan bagged a robust 41 Olympic medals, with a strong showing of 12 golds."],
        ["France secured a strong 42 Olympic medals, with gold making up nearly 24%."],
        ["South Korea showcased impressive prowess with a 21-medal haul in the Olympics."],
        ["Italy's solid Olympic performance yielded 28 medals, including 8 golds."],
        ["Australia clinched 29 Olympic medals, with a strong showing of 8 golds."],
        ["Netherlands clinched 19 Olympic medals: 8 gold, 7 silver, and 4 bronze."],
        ["Hungary's robust performance yielded 15 Olympic medals, with over half as gold."],
        ["Brazil clinched 19 Olympic medals, with a solid haul of 7 gold, 6 silver, 6 bronze."],
        ["Spain showed a solid performance at the Olympics, securing 17 medals in total."],
        ["Kenya dominated with 13 Olympic medals, evenly balanced in gold and silver."],
        ["Jamaica's 11-medal haul, led by 6 golds, demonstrates their strong Olympic prowess."],
        ["Croatia displayed strong Olympics performance with 10 medals, half being gold."],
        ["Cuba made a solid impact with 11 Olympic medals, including 5 golds."],
        ["New Zealand secured 18 Olympic medals, with gold leading at 22%."],
        ["Canada clinched 22 Olympic medals: 4 gold, 3 silver, and a dominating 15 bronze."],
        ["Uzbekistan secured 13 Olympic medals, with a strong lead in gold at four."],
        ["Kazakhstan showed strong Olympic performance with a total of 17 medals."],
        ["Colombia secured 8 Olympic medals, with a strong showing of 3 golds."],
        ["Switzerland secured 7 Olympic medals: 3 golds, 2 silvers, and 2 bronzes."],
        ["Iran showcased solid performance at the Olympics with a total of 8 medals."]
    ];
    commentsRange.SetValue(sample_data);
}

```

## Script execution steps

### Step 1. Create AI-powered comment function

This step generates a summary sentence for each country's Olympic medal results.

- Constructs a natural language prompt with medal data
- Sends it to OpenAI's `chat/completions` endpoint using GPT-4
- Extracts and trims the resulting sentence
- Uses [GetRangeByNumber](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber/) and [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/) to insert it in column H

<details>
  <summary>Comment generation function</summary>

```ts
function commentOnCountry(row, country, gold, silver, bronze, total) {
    const prompt = `Write a short one-sentence summary about ${country}'s Olympic medal performance. They won ${gold} gold, ${silver} silver, and ${bronze} bronze medals, for a total of ${total}. Use a confident and slightly analytical tone. Return just the sentence. Maximum 70 chars.`

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a sports data analyst." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7
        })
    })
    .then(res => res.json())
    .then(json => {
        const result = json.choices?.[0]?.message?.content?.trim();
        if (!result) return;
        const worksheet = Api.GetActiveSheet();
        const commentCell = worksheet.GetRangeByNumber(row, 7); // Column H
        commentCell.SetValue(`${result}`);
    });
}
```

</details>

### Step 2. Iterate over medal data rows

This step configures formatting and loops over the rows of the spreadsheet.

- Sets column width and row height using [SetColumnWidth](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth/) and [SetRowHeight](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/SetRowHeight/)
- Enables text wrapping and sets font size using [SetWrap](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetWrap/) and [SetFontSize](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetFontSize/)
- Iterates from row 2 to 27, skipping headers
- Calls `commentOnCountry()` for each country with full medal data
- Uses `sample_data` if no OpenAI API key was provided

<details>
  <summary>Row iteration script</summary>

```ts
const worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(7, 50);
for (let i = 2; i < 27; i++) {
    worksheet.SetRowHeight(i, 50);
}

const commentsRange = worksheet.GetRange("H3:H27")
commentsRange.SetWrap(true);
commentsRange.SetFontSize(12);

// use AI to generate comments if OpenAI API key is provided
if (OPENAI_API_KEY != "sk-proj...") {
    const data = worksheet.GetRange("A:G27").GetValue();

    for (let i = 2; i < data.length; i++) {
        const row = data[i];
        const country = row[2];
        const gold = row[3];
        const silver = row[4];
        const bronze = row[5];
        const total = row[6];

        if (country && gold && silver && bronze && total) {
            commentOnCountry(i, country, gold, silver, bronze, total);
        }
    }
} else { // Paste sample data if OpenAI API key is not provided
    const sample_data = [
        ["USA dominated with a total of 121 Olympic medals, including 46 golds."],
        // ...
        ["Iran showcased solid performance at the Olympics with a total of 8 medals."]
    ];
    commentsRange.SetValue(sample_data);
}
```

</details>
