/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-11T14:08:90+02:00
 * @Copyright: Technology Studio
**/

import { useEffect } from 'react'

// react-hooks/rules-of-hooks
type RulesOfHooksProps = { someProp?: string }
export const RulesOfHooksOk = (props: RulesOfHooksProps): null => {
  useEffect(() => {
    if (props.someProp) {
      // localStorage.setItem('formData', name);
    }
  })
  return null
}

export const RulesOfHooksError = (props: RulesOfHooksProps): null => {
  if (props.someProp) {
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
    if (props.someProp) {
      // localStorage.setItem('formData', name);
    }
  }, [props.someProp])
  return null
}

export const ExhaustiveDepsError = (props: ExhaustiveDepsProps): null => {
  useEffect(() => {
    if (props.someProp) {
      // localStorage.setItem('formData', name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

// TODO: add tests for:
// react/jsx-first-prop-new-line
// react/jsx-uses-vars
// react/display-name
