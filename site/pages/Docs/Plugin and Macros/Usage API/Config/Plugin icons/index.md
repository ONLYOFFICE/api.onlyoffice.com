Plugin icon image files that are specified in the [config.json](/plugin/config#icons2) file to display the plugin extensions. Here you can find all the available plugin icon parameters.

## Scaling

There can be several scaling types for plugin icons: 100%, 125%, 150%, 175%, 200%, etc. For each type the icon has its *normal* state:

```
"icons": [
    {
        "100%": { "normal": "icon.png" },
        "125%": { "normal": "icon@1.25.png" },
        "150%": { "normal": "icon@1.5x.png" },
        "175%": { "normal": "icon@1.75.png" },
        "200%": { "normal": "icon@2x.png" }
    }
]
```

The document editor chooses the necessary icons in the following way:

1. get the information about the current scaling and find an icon for it;
2. if there is no such an icon in the *config*, take the one which is the closest to the required size and round it up (150% instead of 140%).

## Style

The *style* parameter is also used to specify the icon appearance:

| Name  | Description                                                                   | Type   | Default |
| ----- | ----------------------------------------------------------------------------- | ------ | ------- |
| style | The theme type of the plugin icons. It can have the *light* or *dark* values. | string | "dark"  |

```
"icons": [
    {
        "style" : "dark"
    }
]
```

This parameter is only used when the icons are different in light and dark themes.