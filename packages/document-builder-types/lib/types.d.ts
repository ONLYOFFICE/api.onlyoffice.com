/**
 * {@link https://api.onlyoffice.com/docbuilder/framework ONLYOFFICE Reference}
 */
export interface DocumentBuilder {
  /**
   * {@link https://api.onlyoffice.com/docbuilder/integrationapi/c/cdocbuilder/closefile ONLYOFFICE Reference}
   */
  CloseFile(): void

  /**
   * {@link https://api.onlyoffice.com/docbuilder/integrationapi/c/cdocbuilder/createfile ONLYOFFICE Reference}
   */
  CreateFile(extension: string): void

  /**
   * {@link https://api.onlyoffice.com/docbuilder/integrationapi/c/cdocbuilder/savefile ONLYOFFICE Reference}
   */
  SaveFile(extension: string, path: string, payload?: string): void
}
