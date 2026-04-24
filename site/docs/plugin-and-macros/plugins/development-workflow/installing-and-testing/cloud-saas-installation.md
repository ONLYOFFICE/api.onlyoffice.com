---
sidebar_position: 3
---

# ONLYOFFICE Cloud

You can add a plugin to the **Cloud service** as an **extension** for Google Chrome, Opera, or Microsoft Edge.

## Step 1. Creating extensions

1. Sign in to [GitHub](https://github.com/) or create a new account.

2. Fork the plugin marketplace repository: [onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io).

   Your fork will be at `https://github.com/YOUR-USERNAME/onlyoffice.github.io`.

3. Build a GitHub Pages site from your fork. See the [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).

4. Clone the fork to your local machine.

5. Add your plugin folder to `onlyoffice.github.io/sdkjs-plugins/content/` and push it to the remote repository.

6. Open `onlyoffice.github.io/store/plugin-dev/extension/inject.js` and set the `URL_TO_PLUGIN` variable to your plugin's GitHub Pages URL:

   ```ts
   const URL_TO_PLUGIN = "https://YOUR-USERNAME.github.io/onlyoffice.github.io/sdkjs-plugins/content/helloworld/"
   ```

The `onlyoffice.github.io/store/plugin-dev/extension` folder is the extension you will load into the browser.

:::note
When adding an extension to [ONLYOFFICE App Directory](https://www.onlyoffice.com/app-directory/en), the **Title** and **Summary** are filled in automatically with the **name** and **description** parameters from the `manifest.json` file. You cannot change them later in the store.
:::

## Step 2. Uploading the extension to the browser

### Google Chrome

1. Open `chrome://extensions/`.
2. Enable **Developer mode** and click **Load unpacked**.
3. Select the `store/plugin-dev/extension` folder.
4. Open ONLYOFFICE Cloud and verify the plugin appears in the editors.

#### Removing from Chrome

Click **Remove** on the extension card and confirm. The plugin disappears from ONLYOFFICE Cloud after page reload.

### Opera

1. Click the extensions icon → **Manage extensions**.
2. Enable **Developer mode** and click **Load unpacked**.
3. Select the `store/plugin-dev/extension` folder.
4. Open ONLYOFFICE Cloud and verify the plugin appears in the editors.

#### Removing from Opera

To hide the plugin temporarily, click **Disable** or turn off the switcher. To remove it completely, click **Remove** and confirm. The plugin disappears after page reload.

### Microsoft Edge

1. Open `edge://extensions/`.
2. Enable **Developer mode** and click **Load unpacked**.
3. Select the `store/plugin-dev/extension` folder.
4. Open ONLYOFFICE Cloud and verify the plugin appears in the editors.

#### Removing from Edge

Disable the extension with the switcher to hide the plugin, or click **Remove** and confirm to delete it. The plugin disappears after page reload.

## Additional resources

- [For web editors](../developing/for-web-editors.md) — Development workflow
- [Test environment setup](./test-environment-setup.md)
