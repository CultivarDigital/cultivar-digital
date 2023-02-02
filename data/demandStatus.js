const demandStatus = [
  { label: 'Na fila', value: 'backlog' },
  { label: 'Em andamento', value: 'in-progress' },
  { label: 'Finalizadas', value: 'done' },
]
export const demandStatusLabel = (value) => {
  const status = demandStatus.find((status) => status.value === value)
  return status ? status.label : ''
}

export default demandStatus
