const demandTypes = [
  { value: 'feature', label: 'Funcionalidade', icon: 'mdi-star' },
  { value: 'bug', label: 'Correção', icon: 'mdi-bug' },
  { value: 'improvement', label: 'Melhoria', icon: 'mdi-wrench' },
]

export const getDemandType = (value) => {
  return demandTypes.find((type) => type.value === value)
}

export const demandTypeIcon = (value) => {
  const type = getDemandType(value)
  return type ? type.icon : ''
}

export const demandTypeLabel = (value) => {
  const type = getDemandType(value)
  return type ? type.label : ''
}

export default demandTypes
