/* eslint-disable no-console */
/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-11T16:08:42+02:00
 * @Copyright: Technology Studio
**/

// TODO: add tests for:
// jsx-a11y/role-has-required-aria-props

import React from 'react'

// jsx-a11y/aria-props
export const AriaPropsOk = (): React.JSX.Element => (
  <button aria-label='Close' aria-hidden='true'>Close</button>
)

export const AriaPropsError = (): React.JSX.Element => (
  // eslint-disable-next-line jsx-a11y/aria-props
  <button aria-labeled='Close' aria-hidden='true'>Close</button>
)

// jsx-a11y/label-has-associated-control
export const LabelHasAssociatedControlOk = (): React.JSX.Element => (
  <label>
    Name
    <input type='text' id='name' />
  </label>
)

export const LabelHasAssociatedControlError = (): React.JSX.Element => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label>Name</label>
)

// jsx-a11y/mouse-events-have-key-events
export const MouseEventsHaveKeyEventsOk = (): React.JSX.Element => (
  <div
    onMouseOver={() => { console.log('Mouse over') }}
    onFocus={() => { console.log('Focus') }}
    tabIndex={0}
  >
    Hover or focus here
  </div>
)

export const MouseEventsHaveKeyEventsError = (): React.JSX.Element => (
  // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
  <div onMouseOver={() => { console.log('Mouse over') }}>
    Hover here
  </div>
)

// jsx-a11y/role-supports-aria-props
export const RoleSupportsAriaPropsOk = (): React.JSX.Element => (
  <div role='banner' aria-label='Header Banner'>Header</div>
)

export const RoleSupportsAriaPropsError = (): React.JSX.Element => (
  // eslint-disable-next-line jsx-a11y/role-supports-aria-props
  <div role='img' aria-pressed='true'>Not an interactive element</div>
)
