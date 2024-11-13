// import * as a from "typedoc"
import {type JSONOutput} from "typedoc"

// const r = await a.Application.bootstrapWithPlugins({})
// const g = r.serializer.projectToObject()

export function processProjectReflection(o: JSONOutput.ProjectReflection): void {
  if (o.children) {
    for (const c of o.children) {
      processDeclarationReflection(c)
    }
  }
}

export function processDeclarationReflection(o: JSONOutput.DeclarationReflection): void {
  if (isProjectKind(o.kind)) {
    const e = new Error("Project kind is not supported")
    return
  }

  if (isModuleKind(o.kind)) {
    const e = new Error("Module kind is not supported")
    return
  }

  if (isNamespaceKind(o.kind)) {
    const e = new Error("Namespace kind is not supported")
    return
  }

  if (isEnumKind(o.kind)) {
    const e = new Error("Enum kind is not supported")
    return
  }

  if (isEnumMemberKind(o.kind)) {
    const e = new Error("EnumMember kind is not supported")
    return
  }

  if (isVariableKind(o.kind)) {
    const e = new Error("Variable kind is not supported")
    return
  }

  if (isFunctionKind(o.kind)) {
    const e = new Error("Function kind is not supported")
    return
  }

  if (isClassKind(o.kind)) {
    const e = new Error("Class kind is not supported")
    return
  }

  if (isInterfaceKind(o.kind)) {
    const e = new Error("Interface kind is not supported")
    return
  }

  if (isConstructorKind(o.kind)) {
    const e = new Error("Constructor kind is not supported")
    return
  }

  if (isPropertyKind(o.kind)) {
    const e = new Error("Property kind is not supported")
    return
  }

  if (isMethodKind(o.kind)) {
    const e = new Error("Method kind is not supported")
    return
  }

  if (isCallSignatureKind(o.kind)) {
    const e = new Error("CallSignature kind is not supported")
    return
  }

  if (isIndexSignatureKind(o.kind)) {
    const e = new Error("IndexSignature kind is not supported")
    return
  }

  if (isConstructorSignatureKind(o.kind)) {
    const e = new Error("ConstructorSignature kind is not supported")
    return
  }

  if (isParameterKind(o.kind)) {
    const e = new Error("Parameter kind is not supported")
    return
  }

  if (isTypeLiteralKind(o.kind)) {
    const e = new Error("TypeLiteral kind is not supported")
    return
  }

  if (isTypeParameterKind(o.kind)) {
    const e = new Error("TypeParameter kind is not supported")
    return
  }

  if (isAccessorKind(o.kind)) {
    const e = new Error("Accessor kind is not supported")
    return
  }

  if (isGetSignatureKind(o.kind)) {
    const e = new Error("GetSignature kind is not supported")
    return
  }

  if (isSetSignatureKind(o.kind)) {
    const e = new Error("SetSignature kind is not supported")
    return
  }

  if (isTypeAliasKind(o.kind)) {
    const e = new Error("TypeAlias kind is not supported")
    return
  }

  if (isReferenceKind(o.kind)) {
    const e = new Error("Reference kind is not supported")
    return
  }

  if (isDocumentKind(o.kind)) {
    const e = new Error("Document kind is not supported")
    return
  }

  const e = new Element("Unknown kind")
  return
}

function isProjectKind(n: unknown): n is 1 {
  return typeof n === "number" && n === 1
}

function isModuleKind(n: unknown): n is 2 {
  return typeof n === "number" && n === 2
}

function isNamespaceKind(n: unknown): n is 4 {
  return typeof n === "number" && n === 4
}

function isEnumKind(n: unknown): n is 8 {
  return typeof n === "number" && n === 8
}

function isEnumMemberKind(n: unknown): n is 16 {
  return typeof n === "number" && n === 16
}

function isVariableKind(n: unknown): n is 32 {
  return typeof n === "number" && n === 32
}

function isFunctionKind(n: unknown): n is 64 {
  return typeof n === "number" && n === 64
}

function isClassKind(n: unknown): n is 128 {
  return typeof n === "number" && n === 128
}

function isInterfaceKind(n: unknown): n is 256 {
  return typeof n === "number" && n === 256
}

function isConstructorKind(n: unknown): n is 512 {
  return typeof n === "number" && n === 512
}

function isPropertyKind(n: unknown): n is 1024 {
  return typeof n === "number" && n === 1024
}

function isMethodKind(n: unknown): n is 2048 {
  return typeof n === "number" && n === 2048
}

function isCallSignatureKind(n: unknown): n is 4096 {
  return typeof n === "number" && n === 4096
}

function isIndexSignatureKind(n: unknown): n is 8192 {
  return typeof n === "number" && n === 8192
}

function isConstructorSignatureKind(n: unknown): n is 16384 {
  return typeof n === "number" && n === 16384
}

function isParameterKind(n: unknown): n is 32768 {
  return typeof n === "number" && n === 32768
}

function isTypeLiteralKind(n: unknown): n is 65536 {
  return typeof n === "number" && n === 65536
}

function isTypeParameterKind(n: unknown): n is 131072 {
  return typeof n === "number" && n === 131072
}

function isAccessorKind(n: unknown): n is 262144 {
  return typeof n === "number" && n === 262144
}

function isGetSignatureKind(n: unknown): n is 524288 {
  return typeof n === "number" && n === 524288
}

function isSetSignatureKind(n: unknown): n is 1048576 {
  return typeof n === "number" && n === 1048576
}

function isTypeAliasKind(n: unknown): n is 2097152 {
  return typeof n === "number" && n === 2097152
}

function isReferenceKind(n: unknown): n is 4194304 {
  return typeof n === "number" && n === 4194304
}

function isDocumentKind(n: unknown): n is 8388608 {
  return typeof n === "number" && n === 8388608
}
