---
sidebar_position: -3.5
---

# Styling plugin

You can style your plugin components by importing CSS files directly into the *.ts* source files.

## CSS Modules

Files with the *.module.css* extension are processed as [CSS Modules](https://github.com/css-modules/css-modules): each class name is scoped locally and exported as a property of the imported object. In practice, this means every class gets a unique generated name in the compiled CSS, such as *.button* becoming *.button__XmfZ_* — and the imported object's property (*styles.button*) holds that generated name, not the literal string *"button"*.

For example, add the following to *src/styles/button.module.css*:

``` css
.button {
  background: #ff6f3d;
  border-radius: 4px;
  margin-top: 12px;
}

.label {
  font-weight: 600;
}
```

Then, in *src/index.ts*, import the module and apply the scoped class names to a [Text](coding-plugin/interfaces/components/IText.md) and a [Button](coding-plugin/interfaces/components/IButton.md) component through their *className* prop:

``` ts
import { IText, IButton, ButtonSize, Components } from "@onlyoffice/docspace-plugin-sdk";
import styles from "./styles/button.module.css";

const label: IText = {
  text: "Your document is ready",
  className: styles.label,
};

const button: IButton = {
  label: "Convert file",
  size: ButtonSize.normal,
  onClick: () => {},
  className: styles.button,
};
```

This produces the following result:

![Styling with CSS Modules](/assets/images/docspace/styling-css-module.png#gh-light-mode-only)![Styling with CSS Modules](/assets/images/docspace/styling-css-module.dark.png#gh-dark-mode-only)

## Global stylesheets

Regular *.css* files (without the *.module* part) are not processed by CSS Modules, so class names are kept as-is instead of being scoped. Since a plain *.css* file does not give you a class map like *.module.css* does, import it for its side effects only, without using the default export. Reference class names directly as literal strings when styling a component through its *className* prop.

For example, add the following to *src/styles/card.css*:

``` css
.my-plugin-card {
  padding: 16px;
  border-radius: 8px;
  background: var(--plugin-bg, #f0f0f0);
}

.my-plugin-card__title {
  font-weight: 600;
  color: #333;
}
```

Then, in *src/index.ts*, import the stylesheet and reference the class names directly:

``` ts
import { IBox, IText, Components } from "@onlyoffice/docspace-plugin-sdk";
import "./styles/card.css";

const title: IText = {
  text: "The report is ready",
  className: "my-plugin-card__title",
};

const card: IBox = {
  className: "my-plugin-card",
  children: [{
    component: Components.text,
    props: title,
  }],
};
```

This produces the following result:

![Styling with a plain stylesheet](/assets/images/docspace/styling-global-css.png#gh-light-mode-only)![Styling with a plain stylesheet](/assets/images/docspace/styling-global-css.dark.png#gh-dark-mode-only)

Use plain *.css* mainly for third-party stylesheets that rely on fixed, unhashed class names (for example, a vendor library that references specific class names in its own code). For your own styles, prefer *.module.css*: rules such as *:root* or *@font-face* are never scoped by CSS Modules anyway, so they do not require a plain *.css* file either.

:::warning
Class selectors in plain *.css* files are not scoped, so they can unintentionally match elements elsewhere on the DocSpace page, not just in your plugin's UI.
:::

## Output

Both *.module.css* and *.css* files are extracted and bundled into a single *plugin.css* file in the *dist* folder, next to *plugin.js*. This file is minified together with the rest of the build.

## Type declarations for imports

A plain *.css* import such as `import "./styles/card.css"` needs no type declaration — it has no binding to type, so TypeScript does not check whether the module even exists.

A CSS Modules import does have a binding (`import styles from "./button.module.css"`), so TypeScript does need a type for `styles`. Rather than writing that declaration by hand, add a single reference to Vite's own ambient types in *src/vite-env.d.ts*:

``` ts
/// <reference types="vite/client" />
```

This one line is enough for both *.css* and *.module.css* imports — see [vite-env.d.ts](plugin-structure.md#vite-envdts) for details. It replaces the *custom.d.ts* file that shipped with the SDK 2.x, webpack-based template; that file is not part of the SDK 3.0.0 template and is no longer needed.

## Importing other file types

Vite handles imports of other file types (for example, images) out of the box, without any build configuration. TypeScript still needs the same *src/vite-env.d.ts* reference described above to type the import:

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

Imported assets are inlined as base64 data URIs directly inside *plugin.js*, so they are always included in the final archive — this held true even for a 170 KB test image, well past Vite's usual inlining threshold for regular (non-library) builds. There is no need to place them in the [assets](plugin-structure.md#assets) folder, which is reserved for the plugin's logo and other icons referenced from *config.json* and item properties.

This produces the following result:

![Importing an SVG image](/assets/images/docspace/styling-svg-import-result.png#gh-light-mode-only)![Importing an SVG image](/assets/images/docspace/styling-svg-import-result.dark.png#gh-dark-mode-only)
