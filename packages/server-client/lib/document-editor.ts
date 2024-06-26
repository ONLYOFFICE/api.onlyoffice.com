import type {DocEditorConfigurableOptions} from "@onlyoffice/document-server-types"
import type {Client} from "./client.ts"

export type AssignResponse = DocEditorConfigurableOptions

export class DocumentEditorService {
  #c: Client

  constructor(c: Client) {
    this.#c = c
  }

  async sign(config: DocEditorConfigurableOptions): Promise<[AssignResponse, Request, Response]> {
    const u = this.#c.url("editors/configcreate")
    const req = this.#c.request("POST", u, config)
    const [r, res] = await this.#c.fetch<DocEditorConfigurableOptions>(req)
    return [r, req, res]
  }
}
