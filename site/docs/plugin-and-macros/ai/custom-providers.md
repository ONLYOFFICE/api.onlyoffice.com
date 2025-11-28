---
sidebar_position: -3
---

# Adding custom providers

Any custom provider can be added to the AI plugin. To do this, follow the instructions below.

## Prerequisites {#prerequisites}

- **Base URL**. The web address where API requests are sent. In some cases, the base URL may include an endpoint that specifies the model being used:

    ``` ini
    https://ai-provider-base-url
    ```

- **Model version**. The version of the accessed model. Sometimes, the model version is included in the base URL:

    ``` ini
    https://ai-provider-base-url/v1
    ```

    In this example, the model version is **v1**.

- **API key**. A unique key provided by the service provider, used for authentication.

## Step 1. Create the external JavaScript file {#create-js-file}

To add a custom provider and display it in the list of available providers within the AI plugin, create and upload an external JS file. An example of such a file can be found [here](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/internal/openai.js).

Custom providers parsed from this file are instances of the [`Provider`](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/provider.js) class, which extends `AI.Provider`. This class manages all available providers within the plugin.

#### Provider class

``` ts
class Provider {
    constructor(name, url, key, addon) {
        this.name  = name  || "";
        this.url   = url   || "";
        this.key   = key   || "";
        this.addon = addon || "";

        this.models = [];
        this.modelsUI = [];
    }
}
```

#### Parameters

| Name  | Type   | Example                                            | Description                                                                                                 |
|-------|--------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| name  | string | `"Alibaba Cloud"`                                  | The name of the provider that will be displayed in the plugin.                                              |
| url   | string | `"https://dashscope.aliyuncs.com/compatible-mode"` | The web address to which the API request will be sent.                                                      |
| key   | string | `"yourAPIKey"`                                     | The API key issued by the provider. This is an optional field. Some providers may require a key for access. |
| addon | string | `"v1"`                                             | A URL addon (e.g., version tag).                                                                            |

#### Example

``` ts
"use strict";

class Provider extends AI.Provider {

    constructor() {
        super("Alibab Cloud", "https://dashscope.aliyuncs.com/compatible-mode", "yourAPIKey", "v1");
    }
}
```

## Step 2. Add the custom provider

To add the custom provider to the AI plugin:

1. Open the **AI** tab in the top toolbar of ONLYOFFICE editors.
2. Select **Settings**.
3. In the **AI configuration** window, select **Edit AI models**.
4. In the **AI Models list** window, click ![Edit icon](/assets/images/plugins/edit.svg#gh-light-mode-only)![Edit icon](/assets/images/plugins/edit.dark.svg#gh-dark-mode-only) to edit models.
5. In the **Edit AI Model** window, click **Custom providers**.

    ![Custom providers](/assets/images/plugins/custom-providers.png#gh-light-mode-only)![Custom providers](/assets/images/plugins/custom-providers.dark.png#gh-dark-mode-only)

6. Click ![Plus icon](/assets/images/plugins/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only) and upload the JavaScript file containing your custom provider settings.

    ![Add custom provider](/assets/images/plugins/add-custom-provider.png#gh-light-mode-only)![Add custom provider](/assets/images/plugins/add-custom-provider.dark.png#gh-dark-mode-only)

7. Click **Back** to exit **Custom providers** window.
8. Select your custom provider from the list in the **Edit AI Model** window and click **OK**.
9. Click **Back** to exit the **AI Models list** window.
10. Set the custom provider model for a specific task in the **AI configuration** window.

The AI plugin is fully configured and ready to handle a wide range of tasks.
