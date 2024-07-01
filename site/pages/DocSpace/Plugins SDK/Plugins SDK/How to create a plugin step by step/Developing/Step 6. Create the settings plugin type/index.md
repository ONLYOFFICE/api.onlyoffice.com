Configure the settings plugin type to provide users with the administrator settings.

1. Create a container where the plugin settings will be placed:

   ```
   const descriptionText: TextGroup = {
       component: Components.text,
       props: {
           text: "To generate API token visit https://www.assemblyai.com",
           color: "#A3A9AE",
           fontSize: "12px",
           fontWeight: 400,
           lineHeight: "16px",
       },
   };

   const descGroup: BoxGroup = {
       component: Components.box,
       props: { children: [descriptionText] },
   };

   const parentBox: IBox = {
       displayProp: "flex",
       flexDirection: "column",
       // marginProp: "16px 0 0 0",
       children: [tokenGroup, descGroup],
   };
   ```

   In the settings description, indicate that it is necessary to generate an API token in order to be able to work with the plugin.

2. Configure the administrator settings with the *ISettings* object:

   ```
   const adminSettings: ISettings = {
       settings: parentBox,
       saveButton: userButtonComponent,
       onLoad: async () => {
           assemblyAI.fetchAPIToken();

           tokenInput.value = assemblyAI.apiToken;

           if (!assemblyAI.apiToken) return { settings: parentBox };

           plugin.setAdminPluginSettings(adminSettings);

           return { settings: parentBox };
       },
   };
   ```

   Specify the *onLoad* event which defines which plugin settings will be displayed when the settins block is loaded.

Each settings item is determined in separate files ([buttons](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/speech-to-text/src/Settings/Button.ts), [token](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/speech-to-text/src/Settings/Token.ts)).

![Speech settings](/content/img/docspace/speech-settings.png)
