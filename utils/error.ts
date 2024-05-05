// Utility function to get error text from error object
export const getErrorText = (error: any) => {
  if (error.response) {
    return error.response.data.message
  }

  return 'Something went wrong'
}
