interface inspectFuncParams<T> {
  func(num: T): boolean
  errorMessage: string
}

/**
 * @desc value 자체를 검증하는 함수입니다.
 */
export const inspectFunc = <T>(value: T, inspectFuncParams: inspectFuncParams<T>[]): string[] => {
  const errorMessages: string[] = []

  for (const { func, errorMessage: msg } of inspectFuncParams) {
    if (!func(value)) errorMessages.push(msg)
  }

  return errorMessages
}
