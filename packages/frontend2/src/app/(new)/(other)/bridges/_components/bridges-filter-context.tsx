'use client'
import { notUndefined } from '@l2beat/shared-pure'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import {
  type BridgesRiskEntry,
  type BridgesSummaryEntry,
} from '~/server/features/bridges/types'

export type BridgesFilterContextValue = {
  validatedBy?: string
  type?: string
}

export type MutableBridgesFilterContextValue = BridgesFilterContextValue & {
  set: (value: Partial<BridgesFilterContextValue>) => void
  reset: () => void
}

const BridgesFilterContext = createContext<
  MutableBridgesFilterContextValue | undefined
>(undefined)

const defaultValues: BridgesFilterContextValue = {
  type: undefined,
  validatedBy: undefined,
}

export function useBridgesFilterValues() {
  const context = useContext(BridgesFilterContext)
  if (!context) {
    throw new Error(
      'useBridgesFilterValues must be used within a BridgesFilterContextProvider',
    )
  }
  return context
}

type BridgesFilterEntry = BridgesRiskEntry | BridgesSummaryEntry

export function useBridgesFilter() {
  const bridgesFilters = useBridgesFilterValues()

  const filter = useCallback(
    (entry: BridgesFilterEntry) => {
      const checks = [
        bridgesFilters.type !== undefined
          ? entry.category === bridgesFilters.type
          : undefined,
        bridgesFilters.validatedBy !== undefined
          ? entry.validatedBy?.value === bridgesFilters.validatedBy
          : undefined,
      ].filter(notUndefined)
      return checks.length === 0 || checks.every(Boolean)
    },
    [bridgesFilters],
  )

  return filter
}

export function BridgesFilterContextProvider({
  children,
}: { children: React.ReactNode }) {
  const [value, setValue] = useState<BridgesFilterContextValue>(defaultValues)

  const set = useCallback(
    (newValue: Partial<BridgesFilterContextValue>) => {
      setValue((prev) => ({ ...prev, ...newValue }))
    },
    [setValue],
  )

  const reset = useCallback(() => setValue(defaultValues), [setValue])

  const contextValue = useMemo(
    () => ({ ...value, set, reset }),
    [value, set, reset],
  )

  return (
    <BridgesFilterContext.Provider value={contextValue}>
      {children}
    </BridgesFilterContext.Provider>
  )
}
