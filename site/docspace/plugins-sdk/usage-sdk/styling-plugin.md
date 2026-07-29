---
sidebar_position: -3.5
---

# Styling plugin

You can style your plugin components by importing CSS files directly into the *.ts* source files.

## CSS Modules

Files with the *.module.css* extension are processed as [CSS Modules](https://github.com/css-modules/css-modules): each class name is scoped locally and exported as a property of the imported object.

``` ts
import styles from "./styles/button.module.css";

const className = styles.testClass;
```

For example, the following styles from *src/styles/button.module.css* are applied to a [Button](coding-plugin/plugin-components/button.md) component through its *className*:

``` css
.testClass {
  background: #ff6f3d;
  border-radius: 4px;
  margin-top: 12px;
}
```

This produces the following result:

![Styling with CSS Modules](/assets/images/docspace/styling-css-module.png#gh-light-mode-only)![Styling with CSS Modules](/assets/images/docspace/styling-css-module.dark.png#gh-dark-mode-only)

## Global stylesheets

Regular *.css* files (without the *.module* part) are not processed by CSS Modules, so class names are kept as-is instead of being scoped. Import them for their side effects only, without using the default export:

``` ts
import "./global.css";
```

Use plain *.css* mainly for third-party stylesheets that rely on fixed, unhashed class names (for example, a vendor library that references specific class names in its own code). For your own styles, prefer *.module.css*: rules such as *:root* or *@font-face* are never scoped by CSS Modules anyway, so they do not require a plain *.css* file either.

:::caution
Class selectors in plain *.css* files are not scoped, so they can unintentionally match elements elsewhere on the DocSpace page, not just in your plugin's UI.
:::

## Output

Both *.module.css* and *.css* files are extracted and bundled into a single *plugin.css* file in the *dist* folder, next to *plugin.js*. This file is minified together with the rest of the build.

## custom.d.ts

TypeScript does not know how to handle *.css* imports by default. The [custom.d.ts](plugin-structure.md#customdts) file in the plugin template declares the module type for them:

``` ts
declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```

This declaration already ships with the plugin template. However, *custom.d.ts* is located in the plugin root folder, so make sure it is listed in the *tsconfig.json* file *include* array, otherwise TypeScript will not apply it and *.css* imports will fail to compile:

``` json
"include": ["./src/**/*", "./custom.d.ts"]
```

## Importing other file types

The template's *webpack.config.js* only includes loaders for *.ts* and *.css* files. To import other file types (for example, images) directly in your source files, you need to:

1. Add a matching rule to *webpack.config.js*. Use the *asset/inline* type: it embeds the file as a base64 data URI directly inside *plugin.js*, so it is always included in the final archive:

   ``` js
   {
     test: /\.svg$/i,
     type: "asset/inline",
   },
   ```

2. Add a matching module declaration to *custom.d.ts*, for example:

   ``` ts
   declare module "*.svg" {
     const src: string;
     export default src;
   }
   ```

3. Reference the imported binding somewhere in your code, for example by passing it to an [Image](coding-plugin/plugin-components/image.md) component's *src* prop:

   ``` ts
   import icon from "./images/icon.svg";

   const demoBox: IBox = {
     children: [{
       component: Components.img,
       props: {
         src: icon,
         alt: "Sample icon",
       },
     }],
   };
   ```

Following steps 1–3 produces the following result:

![Importing an SVG image](/assets/images/docspace/styling-svg-import-result.png#gh-light-mode-only)![Importing an SVG image](/assets/images/docspace/styling-svg-import-result.dark.png#gh-dark-mode-only)
