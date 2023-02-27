const demandPriorities = [
  { value: 1, label: 'Alta', color: 'orange' },
  { value: 2, label: 'Média', color: 'warning' },
  { value: 3, label: 'Baixa', color: 'success' },
]

export const getDemandPriority = (value) => {
  return demandPriorities.find((p) => p.value === value)
}

export const demandPriorityLabel = (value) => {
  const priority = getDemandPriority(value)
  return priority ? priority.label : ''
}

export const demandPriorityColor = (value) => {
  const priority = getDemandPriority(value)
  return priority ? priority.color : ''
}

export default demandPriorities
