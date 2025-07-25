---
sidebar_position: -7
---

# Customizing

## How to whitelabel ONLYOFFICE Docs?

The below options can be edited for whitelabeling your version of ONLYOFFICE Docs, changing the information which will be displayed at the **About** page and visible to all editor users.

> Please note that changing these options is only available to the [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx) users.

- *editorConfig.customization.customer* options:

  - *editorConfig.customization.customer.address* is used to specify the postal address of the company or person;
  - *editorConfig.customization.customer.info* is used to give some additional information about the company or person;
  - *editorConfig.customization.customer.logo* is used to specify the path to the image logo;
  - *editorConfig.customization.customer.logoDark* is used to specify the path to the image logo for the dark theme;
  - *editorConfig.customization.customer.mail* is used to specify the email address of the company or person;
  - *editorConfig.customization.customer.name* is used to specify the name of the company or person who gives access to the editors or the editor authors;
  - *editorConfig.customization.customer.www* is used to specify the home website address of the company or person.

- *editorConfig.customization.logo* options:

  - *editorConfig.customization.logo.image* is used to specify the path to the image file used to show in the common work mode (i.e. in view and edit modes for all editors) or in the embedded mode;
  - *editorConfig.customization.logo.imageDark* is used to specify the path to the image file used for the dark theme;
  - *editorConfig.customization.logo.url* is used to specify the absolute URL which will be used when someone clicks the logo image (you can leave as an empty string or null to make the logo not clickable).

With all the above fields filled, the *customization* configuration will look like this:

``` ts
const config = {
  editorConfig: {
    customization: {
      customer: {
        address: "My City, 123a-45",
        info: "Some additional information",
        logo: "https://example.com/logo-big.png",
        logoDark: "https://example.com/dark-logo-big.png",
        mail: "john@example.com",
        name: "John Smith and Co.",
        www: "example.com",
      },
      logo: {
        image: "https://example.com/logo.png",
        imageDark: "https://example.com/dark-logo.png",
        url: "https://example.com",
      },
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Further information about the customization can be found [at this page](../../usage-api/config/editor/customization/customization-standard-branding.md).

## How to change the default language of the ONLYOFFICE Docs interface?

If the interface language is present in the [list of available ONLYOFFICE Docs languages](https://helpcenter.onlyoffice.com/docs/installation/docs-available-languages.aspx?from=api), you can simply use the *editorConfig.lang* property in the configuration file to set it to the necessary locale, like this:

``` ts
const config = {
  editorConfig: {
    lang: "de",
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

If the language is not available and you want to translate it or have already translated it to your own language, please see [this article](https://helpcenter.onlyoffice.com/docs/installation/docs-community-add-language-docker.aspx?from=api) to find out how to install it to your ONLYOFFICE Docs.

Further information about the language settings can be found [at this page](../../usage-api/config/editor/editor.md).

## How to enable or disable the chat and/or the comments panel in the editors?

The chat and comments are enabled by default. To disable them use the *document.permissions.comment* and *document.permissions.chat* parameters with the values set to **false** in the configuration file respectively:

``` ts
const config = {
  document: {
    permissions: {
      chat: false,
      comment: false,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

This will disable both the **Chat** and **Comments** buttons and their functionality.

Further information about the customization can be found [at this page](../../usage-api/config/editor/customization/customization-standard-branding.md).

## How to customize the editors interface, e.g. adjust the top toolbar view?

You can either display the full top toolbar or its compact version. To control this the *editorConfig.customization.compactToolbar* parameter is used. With the default **false** value the top toolbar will have its usual view. If you want to display its compact variant, the configuration will have to look like this:

``` ts
const config = {
  editorConfig: {
    customization: {
      compactToolbar: true,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Further information about the customization can be found [at this page](../../usage-api/config/editor/customization/customization-standard-branding.md).

## How to view and change the document additional parameters, e.g. its owner or uploading date?

The document owner and uploading date is affected by the *document.info.owner* and *document.info.uploaded* parameter respectively. You can pass these settings from some database of yours to the document configuration file the following way:

``` ts
const config = {
  document: {
    info: {
      owner: "John Smith",
      uploaded: "2010-07-07 3:46 PM",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

This values will be displayed in the **File** > **Document Info...** menu option.

Further information about these settings can be found [at this page](../../usage-api/config/document/info.md).

## How to optimize the appearance of editors for a desktop computer, or for a mobile device, or for embedding into a web page?

There are three main appearances of the editors, optimized for different use:

- **desktop**, which is optimized for the display in desktop computer browsers:

  ``` ts
  const config = {
    type: "desktop",
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

- **mobile**, which is optimized for the display in mobile device browsers:

  ``` ts
  const config = {
    type: "mobile",
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

- **embedded**, which is optimized for the embedding the documents into a website page:

  ``` ts
  const config = {
    type: "embedded",
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

You can use any appearance for mobile devices or to embed the document to your webpage, but it is more logical to use the specific display type.

Further information about the display type can be found [at this page](../../usage-api/config/config.md#type).

## How to connect plugins to ONLYOFFICE Docs so that they become visible for all editor users?

To enable plugins for all ONLYOFFICE Docs users, you need the following:

- Get the plugins (this can be done using our plugin repository on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins) or you can write your own plugin).
- Put the plugins to the folder accessible by Document Editor.
- Change the configuration file the following way:

``` ts
const config = {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where *editorConfig.plugins.autostart* is the array of the GUIDs for the plugins that you want to start automatically when ONLYOFFICE Docs is started (as defined in the plugin [config.json](../../../plugin-and-macros/structure/configuration/configuration.md#guid) file), and *editorConfig.plugins.pluginsData* is the array of the **config.json** configuration files for all the plugins that you want to be available to ONLYOFFICE Docs users.

Further information about enabling the plugins for ONLYOFFICE Docs can be found [at this page](../../usage-api/config/editor/plugins.md).

## How to disable feature tips in editors?

To disable the tooltips about new features in the editor on first loading, use the *features.featuresTips* configuration parameter and set its value to **false**:

``` ts
const config = {
  editorConfig: {
    customization: {
      features: {
        featuresTips: false
      }
    }
  }
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Further information about the feature customization can be found [at this page](../../usage-api/config/editor/customization/customization-standard-branding.md#features).

## How to change the font and text size in the editor interface?

To customize the font name and size of the interface elements (buttons, tabs, etc.), use the *font* configuration block and edit the *font.name* and *font.size* parameters:

``` ts
const config = {
  editorConfig: {
    customization: {
      font: {
        name: "Arial",
        size: 14
      }
    }
  }
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

> Please note that these parameters are available only for the [extended white label license](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) of ONLYOFFICE Docs Developer.

Further information about the interface font customization can be found [at this page](../../usage-api/config/editor/customization/customization-white-label.md#font).

## How to hide the active user's icon and the current username in the editor header?

To hide the icon with the user's avatar/initials in the editor header, use the *layout* configuration block and set the *layout.header.user* parameter to **false**. You can also hide the button with the editing users setting the *layout.header.users* parameter to **false**:

``` ts
const config = {
  editorConfig: {
    customization: {
      layout: {
        header: {
          user: false,
          users: false,
        }
      }
    }
  }
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

> Please note that these parameters are available only for the [extended white label license](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) of ONLYOFFICE Docs Developer.

Further information about the editor header settings can be found [at this page](../../usage-api/config/editor/customization/customization-white-label.md#layoutheader).
