'use client'

import { useLoadingStore } from "@/lib/store"
import {PropagateLoader as Spinner} from 'react-spinners'

export default function Loading() {
  const isLoading = useLoadingStore(state => state.isLoading)

  return (
    <div className={`${isLoading ? "z-[100] opacity-100" : "z-[-100] opacity-0"} transition-all duration-300 absolute w-[100dvw] h-[100dvh] left-0 top-0 bg-black/80 flex justify-center items-center overflow-hidden`}>
      <Spinner loading={isLoading} size={30} color="#0A8DFF" speedMultiplier={0.6} />
    </div>
  )
}
