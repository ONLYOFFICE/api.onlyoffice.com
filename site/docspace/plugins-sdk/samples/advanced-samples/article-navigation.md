---
description: Add sidebar entries that open full React pages, built with Vite and the ONLYOFFICE Apps UI kit.
tags: ["Apps", "Plugins", "Advanced"]
---

# Article navigation plugin

This plugin adds two entries to the DocSpace sidebar (the *article*) using the `ArticleNavigation` scope. Clicking an entry opens a full portal page — not a dialog — and DocSpace renders the entry's `component` on that page, inside its own React tree:

| Sidebar entry     | Appears in       | Visible to             | Page shows                   |
| ------------------ | ----------------- | ----------------------- | ------------------------------ |
| **Sample files**    | Files section      | all user types           | signed-in user, a toast button |
| **Sample settings** | Settings section   | owner, full admin        | a toggle                       |

Because a navigation item's page renders inside the portal's own React tree, it can be a plain component built with [`@onlyoffice/apps-ui-kit`](https://github.com/ONLYOFFICE/docspace-ui-kit-react) — it gets the portal theme for free, and the [React hooks](/docspace/plugins-sdk/usage-sdk/coding-plugin.md#react-components) reach the portal through context.

:::note
**Import only from `@onlyoffice/apps-ui-kit`; do not use subpath imports.** The portal only substitutes the exact package specifier `@onlyoffice/apps-ui-kit`. A plugin that imports `@onlyoffice/apps-ui-kit/components/button` will fail to load.

```tsx
// ✅ Correct
import { Button } from "@onlyoffice/apps-ui-kit";

// ❌ Wrong — the portal cannot load this
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
```
:::

<details>
  <summary>Full example</summary>

``` tsx
import { useState, type ReactNode } from "react";

import {
  Button,
  ButtonSize,
  Heading,
  HeadingLevel,
  HeadingSize,
  Text,
  ToggleButton,
} from "@onlyoffice/apps-ui-kit";
import {
  useCurrentUser,
  usePluginActions,
} from "@onlyoffice/docspace-plugin-sdk/react";
import {
  type IArticleNavigationItem,
  type IArticleNavigationPlugin,
  type IPlugin,
  PluginStatus,
  Section,
  ToastType,
  UserRole,
} from "@onlyoffice/docspace-plugin-sdk";

const Page = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <div id={id} style={{ padding: "20px", maxWidth: "640px" }}>
    <Heading level={HeadingLevel.h1} size={HeadingSize.medium}>
      {title}
    </Heading>
    <Text fontSize="13px" lineHeight="20px" style={{ margin: "4px 0 24px" }}>
      {description}
    </Text>
    {children}
  </div>
);

const FilesPage = () => {
  const user = useCurrentUser();
  const { showToast } = usePluginActions();

  return (
    <Page
      id="article-navigation-sample-files-page"
      title="Sample files page"
      description="Opened from the sidebar entry that the plugin adds to the Files section."
    >
      <Text fontSize="13px" lineHeight="20px" style={{ marginBottom: "16px" }}>
        Signed in as <b>{user?.displayName ?? "…"}</b>.
      </Text>
      <Button
        id="article-navigation-sample-toast-btn"
        label="Show a toast"
        size={ButtonSize.normal}
        primary
        onClick={() =>
          showToast({
            type: ToastType.success,
            title: `Hello, ${user?.displayName ?? "there"}!`,
          })
        }
      />
    </Page>
  );
};

const SettingsPage = () => {
  const { showToast } = usePluginActions();
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    showToast({
      type: ToastType.info,
      title: enabled ? "Sample feature off" : "Sample feature on",
    });
  };

  return (
    <Page
      id="article-navigation-sample-settings-page"
      title="Sample settings page"
      description="Only portal administrators see the sidebar entry that opens this page."
    >
      <ToggleButton
        label="Enable the sample feature"
        isChecked={enabled}
        onChange={toggle}
      />
    </Page>
  );
};

const filesItem: IArticleNavigationItem = {
  key: "article-navigation-sample-files",
  label: "Sample files",
  icon: "plugin-icon.svg",
  component: FilesPage,
  appears: [Section.Files],
};

const settingsItem: IArticleNavigationItem = {
  key: "article-navigation-sample-settings",
  label: "Sample settings",
  icon: "plugin-icon.svg",
  component: SettingsPage,
  appears: [Section.Settings],
  usersTypes: [UserRole.owner, UserRole.fullAdmin],
};

class ArticleNavigationSample implements IPlugin, IArticleNavigationPlugin {
  status: PluginStatus = PluginStatus.active;

  onLoadCallback = async (): Promise<void> => {
    this.addArticleNavigationItem(filesItem);
    this.addArticleNavigationItem(settingsItem);
  };

  updateStatus = (status: PluginStatus): void => {
    this.status = status;
  };

  getStatus = (): PluginStatus => {
    return this.status;
  };

  setOnLoadCallback = (callback: () => Promise<void>): void => {
    this.onLoadCallback = callback;
  };

  articleNavigationItems: Map<string, IArticleNavigationItem> = new Map();

  addArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };

  getArticleNavigationItems = (): Map<string, IArticleNavigationItem> => {
    return this.articleNavigationItems;
  };

  updateArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };
}

const plugin = new ArticleNavigationSample();

export default plugin;
```

</details>

## Before you start

Make sure you have a DocSpace server running — version **4.0.0 or later**, since SDK 3.0.0 plugins require [`minDocSpaceVersion: "4.0.0"`](/docspace/plugins-sdk/more-information/migration.md#updating-a-plugin-to-sdk-300) — and install DocSpace Plugins SDK globally:

```bash
npm i -g @onlyoffice/docspace-plugin-sdk
```

## Step 1: Create a plugin

1. Initialize your plugin using the CLI:

   ``` sh
   npx create-docspace-plugin
   ```

2. Fill out [basic metadata](/docspace/plugins-sdk/usage-sdk/creating-plugin-template.md): plugin name, version, author, description, logo, license, homepage.

3. Select the required scope from the list of available options. Use the arrow keys to highlight `Article navigation`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["ArticleNavigation"]
}
```

## Step 3: Add the UI kit dependency

Install the [`@onlyoffice/apps-ui-kit`](https://www.npmjs.com/package/@onlyoffice/apps-ui-kit) package from npm:

```bash
npm install @onlyoffice/apps-ui-kit
```

This adds it to `dependencies` in `package.json`:

```json
{
  "dependencies": {
    "@onlyoffice/apps-ui-kit": "^4.0.0"
  }
}
```

The UI kit is only needed for type checking and editor support: it is not bundled into *plugin.js*. DocSpace supplies its own copy at load time and rewrites the `@onlyoffice/apps-ui-kit` specifier to it. The template's *vite.config.ts* already marks it as external with the pattern `/^@onlyoffice\/apps-ui-kit(\/.*)?$/`. Import components only from the package root, as noted at the top of this page.

## Step 4: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. To use JSX:

1. Rename `src/index.ts` to `src/index.tsx`:

   ```bash
   mv src/index.ts src/index.tsx
   ```

2. Update the entry point in `vite.config.ts`:

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import { fileURLToPath } from "url";

   const __dirname = fileURLToPath(new URL(".", import.meta.url));

   export default defineConfig({
     plugins: [react()],
     define: {
       "process.env.NODE_ENV": JSON.stringify("production"),
       "process.env": "{}",
     },
     build: {
       lib: {
         entry: `${__dirname}src/index.tsx`, // Changed from index.ts
         formats: ["es"],
         fileName: () => "plugin.js",
       },
       rolldownOptions: {
         external: [
           "react",
           "react-dom",
           "react/jsx-runtime",
           "@onlyoffice/docspace-plugin-sdk/react",
           /^@onlyoffice\/apps-ui-kit(\/.*)?$/,
         ],
         output: {
           codeSplitting: false,
           assetFileNames: (assetInfo: { name?: string }) =>
             assetInfo.name?.endsWith(".css")
               ? "plugin.css"
               : (assetInfo.name ?? "asset"),
         },
       },
     },
   });
   ```

3. Implement [`IPlugin`](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IPlugin.md) and [`IArticleNavigationPlugin`](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/plugins/IArticleNavigationPlugin.md) in `src/index.tsx`:

<details>
  <summary>ArticleNavigationSample class</summary>

```tsx
import {
  type IArticleNavigationItem,
  type IArticleNavigationPlugin,
  type IPlugin,
  PluginStatus,
} from "@onlyoffice/docspace-plugin-sdk";

class ArticleNavigationSample implements IPlugin, IArticleNavigationPlugin {
  status: PluginStatus = PluginStatus.active;

  onLoadCallback = async (): Promise<void> => {
    this.addArticleNavigationItem(filesItem);
    this.addArticleNavigationItem(settingsItem);
  };

  updateStatus = (status: PluginStatus): void => {
    this.status = status;
  };

  getStatus = (): PluginStatus => {
    return this.status;
  };

  setOnLoadCallback = (callback: () => Promise<void>): void => {
    this.onLoadCallback = callback;
  };

  articleNavigationItems: Map<string, IArticleNavigationItem> = new Map();

  addArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };

  getArticleNavigationItems = (): Map<string, IArticleNavigationItem> => {
    return this.articleNavigationItems;
  };

  updateArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };
}

const plugin = new ArticleNavigationSample();

// Add the pages and navigation items below the plugin initialization line

export default plugin;
```

</details>

The items are registered in `onLoadCallback` rather than right after construction, ensuring DocSpace is ready to receive them.

## Step 5: Build the pages with the UI kit

Each page is an ordinary React component. [`useCurrentUser`](/docspace/plugins-sdk/usage-sdk/coding-plugin.md#react-components) gives the signed-in profile, and [`usePluginActions`](/docspace/plugins-sdk/usage-sdk/coding-plugin.md#react-components) gives the portal UI actions — here, showing a toast that the portal draws itself:

<details>
  <summary>Pages</summary>

```tsx
import { useState, type ReactNode } from "react";
import { Button, ButtonSize, Heading, HeadingLevel, HeadingSize, Text, ToggleButton } from "@onlyoffice/apps-ui-kit";
import { useCurrentUser, usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { ToastType } from "@onlyoffice/docspace-plugin-sdk";

const Page = ({ id, title, description, children }: { id: string; title: string; description: string; children: ReactNode }) => (
  <div id={id} style={{ padding: "20px", maxWidth: "640px" }}>
    <Heading level={HeadingLevel.h1} size={HeadingSize.medium}>{title}</Heading>
    <Text fontSize="13px" lineHeight="20px" style={{ margin: "4px 0 24px" }}>{description}</Text>
    {children}
  </div>
);

const FilesPage = () => {
  const user = useCurrentUser();
  const { showToast } = usePluginActions();

  return (
    <Page id="article-navigation-sample-files-page" title="Sample files page" description="Opened from the sidebar entry that the plugin adds to the Files section.">
      <Text fontSize="13px" lineHeight="20px" style={{ marginBottom: "16px" }}>
        Signed in as <b>{user?.displayName ?? "…"}</b>.
      </Text>
      <Button
        id="article-navigation-sample-toast-btn"
        label="Show a toast"
        size={ButtonSize.normal}
        primary
        onClick={() => showToast({ type: ToastType.success, title: `Hello, ${user?.displayName ?? "there"}!` })}
      />
    </Page>
  );
};

const SettingsPage = () => {
  const { showToast } = usePluginActions();
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    showToast({ type: ToastType.info, title: enabled ? "Sample feature off" : "Sample feature on" });
  };

  return (
    <Page id="article-navigation-sample-settings-page" title="Sample settings page" description="Only portal administrators see the sidebar entry that opens this page.">
      <ToggleButton label="Enable the sample feature" isChecked={enabled} onChange={toggle} />
    </Page>
  );
};
```

</details>

`useCurrentFile` returns `null` on article navigation pages (surfaces with no file selection), but `useCurrentUser` and `usePluginRuntime` resolve normally here.

## Step 6: Register the navigation items

Register an [`IArticleNavigationItem`](/docspace/plugins-sdk/usage-sdk/coding-plugin/interfaces/items/IArticleNavigationItem.md) for each page. `key` becomes the last segment of the page URL, so it must be unique across every installed plugin. `icon` is an SVG file from the plugin's [`assets`](/docspace/plugins-sdk/usage-sdk/plugin-structure.md#assets) folder, drawn at 16x16. `appears` places the entry in a portal section, and `usersTypes` narrows it to a set of roles:

<details>
  <summary>Navigation items</summary>

```tsx
import { Section, UserRole, type IArticleNavigationItem } from "@onlyoffice/docspace-plugin-sdk";

const filesItem: IArticleNavigationItem = {
  key: "article-navigation-sample-files",
  label: "Sample files",
  icon: "plugin-icon.svg",
  component: FilesPage,
  appears: [Section.Files],
};

const settingsItem: IArticleNavigationItem = {
  key: "article-navigation-sample-settings",
  label: "Sample settings",
  icon: "plugin-icon.svg",
  component: SettingsPage,
  appears: [Section.Settings],
  usersTypes: [UserRole.owner, UserRole.fullAdmin],
};
```

</details>

## Step 7: Build the plugin

From the root of your plugin, run the following command:

```bash
npm run build
```

This runs `vite build && npx build-docspace-plugin`, which bundles `src/index.tsx` into `dist/plugin.js`, packs the `assets` folder contents, and produces `dist/plugin.zip`.

## Step 8: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Settings → Integration → Plugins**.
3. Click **Upload plugin**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 9: Test the plugin

1. Go to the **Files** section. The sidebar shows a **Sample files** entry for every user type.
2. Click it — the page shows your display name and a **Show a toast** button. Click the button and check that a success toast appears.
3. As a portal owner or full admin, go to the **Settings** section. The sidebar shows a **Sample settings** entry (other user types do not see it).
4. Click it, then toggle **Enable the sample feature** and check that an info toast appears.
