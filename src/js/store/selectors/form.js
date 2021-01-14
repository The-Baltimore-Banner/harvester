export const getFieldSchema = (state, fieldId) => {
  return state.form.schema.columns.find(col => col.id === fieldId)
}

export const getFieldValue = (state, fieldId) => {
  return state.form.fields[fieldId]
}

export const getFieldIdByKey = (state, key) => {
  if (!key) return
  const col = state.form.schema.columns.find(c => c.config.key === key)
  return col && col.id
}

export const getFieldErrors = (state, fieldId) => {
  return state.form.errors[fieldId]
}

export const getFieldOptions = (state, fieldId) => {
  const loaded = state.form.options.loaded[fieldId] || []
  const created = state.form.options.created[fieldId] || []
  return [...loaded, ...created]
}
