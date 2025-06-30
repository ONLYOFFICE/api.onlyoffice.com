import { TextControl, DateControl, PictureControl, ComboboxControl, CheckboxControl } from ".";

export type Control = TextControl | DateControl | PictureControl | ComboboxControl | CheckboxControl;

export type NonApiProps = {
  name: string;
};

export type NamedControl = Control & NonApiProps;
