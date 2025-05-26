---
sidebar_position: -3
---

# Debugging

To debug ONLYOFFICE macros, follow the instructions below.

1. Open the **View** tab and click **Macros**.

2. Use the **debugger** command in your script:

   <!-- This code is related to macros. -->

   <!-- eslint-skip -->

   ``` ts
   debugger;
   let doc = Api.GetDocument();
   let paragraph = doc.GetElement(0);
   paragraph.AddText("Hello world!");
   ```

3. To run your script in debug mode:

   - **For ONLYOFFICE Docs**: open the developer console by pressing the **F12** button.
   - **For Desktop Editors**: use the [instruction](../../desktop-editors/usage-api/debugging/running-in-debug-mode-on-windows.md) for debugging in ONLYOFFICE Desktop Editors.

4. Click ![Play icon](/assets/images/plugins/play.svg) to run your script.

   > Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it.

   ![Debugger](/assets/images/plugins/debugger.png#gh-light-mode-only)![Debugger](/assets/images/plugins/debugger.dark.png#gh-dark-mode-only)

The **debugger** command works as a breakpoint and pauses the execution at the script point where this command is inserted.

If you just need to display the specific values in the browser developer console, you can use the **console.log()** method. Pass a value you want to check or just a message string as an argument of this method and open the developer console by pressing the **F12** button to see the result:

<!-- This code is related to macros. -->

<!-- eslint-skip -->

``` ts
console.log(123);
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Hello world!");
```
