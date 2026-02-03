---
sidebar_position: -2
---

# For web editors

To debug ONLYOFFICE plugins in the web editors, follow the instructions below,

1. Add the **debugger** command to your script:

   ```javascript
   (function (window, undefined) {
     window.Asc.plugin.init = function () {
       this.callCommand(function () {
         debugger;
         var oDocument = Api.GetDocument();
         var oParagraph = Api.CreateParagraph();
         oParagraph.AddText("Test Example");
         oDocument.InsertContent([oParagraph]);
       });
     };
   })(window, undefined);
   ```

2. Open the developer console by pressing the **F12** button.

3. Open the **Plugins** tab and run the plugin.
   :::tip
   Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it.
   :::
   ![Builder debugger](/assets/images/plugins/plugin-debugging.png)

### Debugging overview

When developing ONLYOFFICE plugins, debugging is essential for identifying and resolving issues. The plugin environment has several specific characteristics that make debugging unique:

- **Isolated environment -** Plugins run in a separate iframe, which means they have their own JavaScript context
- **Asynchronous communication -** Plugins interact with the editor through asynchronous API calls
- **Multiple contexts -** You need to handle both plugin context and editor context
- **Scope management -** Variables need careful handling between different scopes
- **Cross-platform considerations -** Web and desktop editors require different debugging approaches

To effectively debug your plugin, you can use various tools and techniques available in modern browsers. The most common approaches include:

- Console logging for tracking execution flow and variable states
- Breakpoints for step-by-step code execution
- Frame inspection for managing different execution contexts
- Network monitoring for API calls and resource loading

#### Console output

Use console methods to inspect values and application state:

```javascript
console.log("Debug:", value);
console.info("Info:", info);
console.warn("Warning:", warnValue);
console.error("Error:", errorObj);
```

:::tip
Select the plugin's frame in the Console drop-down before evaluating expressions so logs and evaluations run in the correct context.
:::

#### Breakpoints

1.  **Programmatic breakpoints** -
    Insert a debugger statement where you want execution to pause.

    ```javascript
    (function (window, undefined) {
        window.Asc.plugin.init = function () {
            this.callCommand(function () {
                debugger;
                // Your code
            });
        };
    })(window, undefined);
    ```

    :::tip
    Make sure DevTools are open before running the plugin script.
    :::

2.  **Chrome DevTools breakpoints**

- Open Sources tab
- Find your plugin file
- Click on the line number to set a breakpoint

#### Frame Management

- Plugin runs in a separate iframe
- Select the appropriate frame in the console to access plugin context:
  - `frameEditor`: Main editor frame
  - `iframe_{asc_id}`: Frame of the specific plugin

![Developer console](/assets/images/plugins/debugging-iframes.png)

:::tip
Always ensure the plugin iframe is selected before inspecting variables, setting breakpoints, or executing code snippets.
:::

### Debugging checklist

1. Confirm the plugin is installed and enabled.
2. Ensure all files (`index.html`, `config.json`, `assets`) are present and reachable.
3. Validate `config.json` structure and paths.
4. Check the console for errors before continuing.

### Common issues

**CORS**

- Start your local server with the `--cors` flag (`http-server --cors`).
- Ensure [document server](https://www.onlyoffice.com/download-docs#docs-community) is installed and accessible.
- Serve plugin resources over HTTPS when required by the editor.

**JWT**

- Verify the secret key in Document Server config: `%ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json` (`services.CoAuthoring.secret.browser.string`)
- Ensure tokens are valid (not expired) and correctly formed (`header.payload.signature`).
