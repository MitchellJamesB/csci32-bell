export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}
export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
    case Variant.SECONDARY:
      return 'bg-red-500 hover:bg-red-600 active:bg-red-700'
    case Variant.TERTIARY:
      return 'bg-green-500 hover:bg-green-600 active:bg-green-700'
  }
}
export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'outline-blue-500'
    case Variant.SECONDARY:
      return 'outline-red-500'
    case Variant.TERTIARY:
      return 'outline-green-500'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border-2 border-blue-600'
    case Variant.SECONDARY:
      return 'border-2 border-red-600'
    case Variant.TERTIARY:
      return 'border-2 border-green-600'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
  }
}
