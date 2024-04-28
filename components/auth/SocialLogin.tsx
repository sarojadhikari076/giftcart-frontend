import { Facebook, Google, Twitter, GitHub } from '@mui/icons-material'
import { Box, Chip, Divider, IconButton } from '@mui/joy'
const socialLogins = [Facebook, Google, Twitter, GitHub]

function SocialLogin() {
  return (
    <>
      <Divider sx={{ my: 2 }}>
        <Chip variant="outlined">Or continue with</Chip>
      </Divider>
      <Box display="flex" justifyContent="center" gap={2}>
        {socialLogins.map((SocialIcon, index) => (
          <IconButton key={index} size="sm" variant="outlined">
            <SocialIcon />
          </IconButton>
        ))}
      </Box>
    </>
  )
}

export default SocialLogin
