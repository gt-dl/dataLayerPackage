export type ErrorParamsProps = {
  error_name: string
  error_message: string
}

export type ErrorEventProps = Pick<ErrorParamsProps, 'error_message'>