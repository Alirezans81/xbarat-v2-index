'use client'

import { useEffect } from "react"
import { useGetLocaleFile, useGetLocales } from "@/apis/common/language/hooks"
import { useLoadingStore, useLocaleFileStore, useLocalesStore } from "@/lib/store"

export default function OnLoad() {
  const setLoading = useLoadingStore(state => state.setLoading)
  const locales = useLocalesStore(state => state.locales)
  const updateLocales = useLocalesStore(state => state.updateLocales)
  const updateLocaleFile = useLocaleFileStore(state => state.updateLocaleFile)

  const { getLocales, isLoading: getLocalesIsLoading } = useGetLocales()
  useEffect(() => {
    getLocalesIsLoading && setLoading(true)
  }, [getLocalesIsLoading, setLoading])
  
  useEffect(() => {
    getLocales(updateLocales)
  }, [])
  
  const {getLocaleFile, isLoading: getLocaleFileIsLoading} = useGetLocaleFile()
  useEffect(() => {
    getLocaleFileIsLoading === false && setLoading(false)
  }, [getLocaleFileIsLoading, setLoading])

  useEffect(() => {
    locales[0] && getLocaleFile(locales[0].file, updateLocaleFile)
  }, [locales])

  return <></>
}
