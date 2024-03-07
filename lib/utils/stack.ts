type RequireTagParams = {
  Name: string
  Version: string
  Env: 'dev' | 'staging' | 'prod' | 'test'
}

export interface StackParams {
  tags: RequireTagParams
}

export interface IStack<T, P> {
  create(scope: this, props: P): T
  setOutputs(resource: T): void
}
