import {buildRegex} from "case-police"
import abbreviates from "case-police/dict/abbreviates.json" with {type: "json"}
import brands from "case-police/dict/brands.json" with {type: "json"}
import general from "case-police/dict/general.json" with {type: "json"}
import products from "case-police/dict/products.json" with {type: "json"}
import softwares from "case-police/dict/softwares.json" with {type: "json"}
import {type Root} from "mdast"
import {lintRule} from "unified-lint-rule"
import {type VFile} from "vfile"

export const remarkLintCasePolice =
  lintRule("@onlyoffice:no-unicode", rule)

function rule(t: Root, f: VFile): void {}
