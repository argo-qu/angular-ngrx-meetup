export const removeArrayElement = (array: any[], deletingElementIndex: number) => {
  return array.slice(0, deletingElementIndex).concat(
    array.slice(deletingElementIndex + 1)
  )
}
