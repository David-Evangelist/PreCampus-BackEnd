// // src/utils/pickAllowedFields.ts
// export function pickAllowedFields<
//   T extends Record<string, any>,
//   K extends readonly (keyof T)[],
// >(payload: any, allowedFields: K): Partial<Pick<T, K[number]>> {
//   const result: Partial<Record<keyof T, any>> = {};

//   for (const key of allowedFields) {
//     if (payload[key] !== undefined) {
//       result[key] = payload[key];
//     }
//   }

//   return result as Partial<Pick<T, K[number]>>;
// }
export function pickAllowedFields<T extends Record<string, any>>(
  payload: any,
  allowedFields: readonly (keyof T)[]
): Partial<T> {
  const result: Partial<T> = {};

  for (const key of allowedFields) {
    if (payload[key] !== undefined) {
      result[key] = payload[key];
    }
  }

  return result;
}
