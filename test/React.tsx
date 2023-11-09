/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-11T14:08:90+02:00
 * @Copyright: Technology Studio
**/

import React, { useEffect } from 'react'

// react-hooks/rules-of-hooks
type RulesOfHooksProps = { someProp?: string }
export const RulesOfHooksOk = (props: RulesOfHooksProps): null => {
  useEffect(() => {
    if (props.someProp != null && props.someProp !== '') {
      // localStorage.setItem('formData', name);
    }
  })
  return null
}

export const RulesOfHooksError = (props: RulesOfHooksProps): null => {
  if (props.someProp != null && props.someProp !== '') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function persistForm () {
      // localStorage.setItem('formData', name);
    })
  }
  return null
}

// react-hooks/exhaustive-deps
type ExhaustiveDepsProps = { someProp?: string }
export const ExhaustiveDepsOk = (props: ExhaustiveDepsProps): null => {
  useEffect(() => {
    if (props.someProp != null && props.someProp !== '') {
      // localStorage.setItem('formData', name);
    }
  }, [props.someProp])
  return null
}

export const ExhaustiveDepsError = (props: ExhaustiveDepsProps): null => {
  useEffect(() => {
    if (props.someProp != null && props.someProp !== '') {
      // localStorage.setItem('formData', name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

const Component = (_props: { test: string, test2: { a: string, b: string } }): null => null

export const FirstPropNewLineOk = (): JSX.Element => (
  <Component
    test='test'
    test2={{
      a: 'abc',
      b: 'def',
    }}
  />
)

export const FirstPropNewLineError = (): JSX.Element => (
  // eslint-disable-next-line react/jsx-first-prop-new-line
  <Component test='test'
    test2={{ a: 'abc', b: 'def' }} />
)

// TODO: add tests for:
// react/jsx-uses-vars
// react/display-name
