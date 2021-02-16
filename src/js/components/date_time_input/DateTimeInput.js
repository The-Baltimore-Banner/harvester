import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import { serializeDateTime, parseDateTime  } from 'js/utils/datetime'
import './styles.scss'

function DateTimeInput(props) {
  const {
    schema,
    value,
    setField,
    validateField,
  } = props

  const date = schema.config.date
  const time = schema.config.time

  const change = d => {
    setField(serializeDateTime(d, { date, time }))
    validateField()
  }

  return (
    <Datetime
      timeFormat={time}
      dateFormat={date}
      className='editable'
      value={value && parseDateTime(value, {date, time})}
      onChange={change}
    />
  )
}

DateTimeInput.propTypes = {
  schema: PropTypes.object,
  value: PropTypes.string,
  setField: PropTypes.func,
  validateField: PropTypes.func,
}

DateTimeInput.defaultProps = {}

export default DateTimeInput
