// React Router params
export type RouterParams = {
  docName?: string
}

// The shape of the docs object expected from the API (the mock data
// also uses this)
export type Docs = Record<string, Doc>

export type Doc = {
  id: number
  name: string
  school: string
  department: string
  text: string
  related: string[]
}

export type Breadcrumbs = string[]

// Network request possible statuses
export enum Status {
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
}
