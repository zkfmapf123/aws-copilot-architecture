type RequireTagParams = {
  Name: string
  Version: string
  Env: 'dev' | 'staging' | 'prod' | 'test'
}

export interface StackParams {
  tags: RequireTagParams
}
