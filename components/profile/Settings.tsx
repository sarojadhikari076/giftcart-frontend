import { Box } from '@mui/joy'
import BasicDetailsForm from './BasicDetailsForm'
import UpdatePasswordForm from './UpdatePasswordForm'

export default function Settings() {
  return (
    <Box display="flex" flexWrap="wrap" gap={4}>
      <BasicDetailsForm />
      <UpdatePasswordForm />
    </Box>
  )
}
