export type List = {
  todo: { id: string; title: string }[]
  doing: { id: string; title: string }[]
  done: { id: string; title: string }[]
}

export type sections = 'FrontEnd' | 'BackEnd' | 'NetworkSecurity' | 'DataAnalysis' | 'HumanResources' | 'Design'
