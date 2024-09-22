// Utility function to get error text from error object
export const getErrorText = (error: any) => {
  if (error.response) {
    // If the error message is a string, return it
    if (typeof error.response.data.message === 'string') {
      return error.response.data.message
    }

    // If the error message is an array, return the first element
    if (Array.isArray(error.response.data.message)) {
      return error.response.data.message[0]
    }

    return error.response.data.message
  }

  return 'Something went wrong'
}
