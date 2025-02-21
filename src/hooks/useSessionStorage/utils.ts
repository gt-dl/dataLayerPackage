import type { SessionStorageProps } from "./types"

export function getAllProductDataFromSessionStorage() {
  const sessionStorageStringOrNull = window.sessionStorage.getItem('datalayerpackage')
  if (sessionStorageStringOrNull === null) return null

  const sessionStorageObj: SessionStorageProps = JSON.parse(sessionStorageStringOrNull)
  return sessionStorageObj
}