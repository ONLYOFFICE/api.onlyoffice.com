---
sidebar_position: 2
---

# Prerequisites

Before you begin, make sure you have the following:

- A running DocSpace instance, either cloud or self-hosted
- The URL of your server added to the **Developer Tools** section in DocSpace settings under the **JavaScript SDK** tab
- A server environment to serve your files from — opening an HTML file directly in the browser will not work
- A modern browser — Chrome, Firefox, Edge, or Safari (the SDK relies on `postMessage` and other standard web APIs)

>**Note:**
>
>If your DocSpace instance is served over HTTPS, your embedding page must also be served over HTTPS. Browsers block mixed content (an HTTPS page loading resources from HTTP), which will prevent the SDK from loading correctly.
>
>Additionally, we recommend configuring HTTPS on your server and setting `"SameSite": "none"` in `appsettings.json`. This is to allow cross-domain cookies in stricter browser environments. Without HTTPS, the SDK may still work in some setups, but cross-origin authentication and session handling can fail depending on your browser's cookie policy.
