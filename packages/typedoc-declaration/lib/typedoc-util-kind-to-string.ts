import {ReflectionKind} from "typedoc"
// import {
//   isAccessorKind,
//   isCallSignatureKind,
//   isClassKind,
//   isConstructorKind,
//   isConstructorSignatureKind,
//   isDocumentKind,
//   isEnumKind,
//   isEnumMemberKind,
//   isFunctionKind,
//   isGetSignatureKind,
//   isIndexSignatureKind,
//   isInterfaceKind,
//   isMethodKind,
//   isModuleKind,
//   isNamespaceKind,
//   isParameterKind,
//   isProjectKind,
//   isPropertyKind,
//   isReferenceKind,
//   isSetSignatureKind,
//   isTypeAliasKind,
//   isTypeLiteralKind,
//   isTypeParameterKind,
//   isVariableKind,
// } from "./typedoc-util-is-kind.ts"

export function kindToString(n: number): string {
  if (n in ReflectionKind) {
    return ReflectionKind[n]
  }

  // if (isProjectKind(n)) {
  //   return "Project"
  // }

  // if (isModuleKind(n)) {
  //   return "Module"
  // }

  // if (isNamespaceKind(n)) {
  //   return "Namespace"
  // }

  // if (isEnumKind(n)) {
  //   return "Enum"
  // }

  // if (isEnumMemberKind(n)) {
  //   return "EnumMember"
  // }

  // if (isVariableKind(n)) {
  //   return "Variable"
  // }

  // if (isFunctionKind(n)) {
  //   return "Function"
  // }

  // if (isClassKind(n)) {
  //   return "Class"
  // }

  // if (isInterfaceKind(n)) {
  //   return "Interface"
  // }

  // if (isConstructorKind(n)) {
  //   return "Constructor"
  // }

  // if (isPropertyKind(n)) {
  //   return "Property"
  // }

  // if (isMethodKind(n)) {
  //   return "Method"
  // }

  // if (isCallSignatureKind(n)) {
  //   return "CallSignature"
  // }

  // if (isIndexSignatureKind(n)) {
  //   return "IndexSignature"
  // }

  // if (isConstructorSignatureKind(n)) {
  //   return "ConstructorSignature"
  // }

  // if (isParameterKind(n)) {
  //   return "Parameter"
  // }

  // if (isTypeLiteralKind(n)) {
  //   return "TypeLiteral"
  // }

  // if (isTypeParameterKind(n)) {
  //   return "TypeParameter"
  // }

  // if (isAccessorKind(n)) {
  //   return "Accessor"
  // }

  // if (isGetSignatureKind(n)) {
  //   return "GetSignature"
  // }

  // if (isSetSignatureKind(n)) {
  //   return "SetSignature"
  // }

  // if (isTypeAliasKind(n)) {
  //   return "TypeAlias"
  // }

  // if (isReferenceKind(n)) {
  //   return "Reference"
  // }

  // if (isDocumentKind(n)) {
  //   return "Document"
  // }

  return "Unknown"
}
