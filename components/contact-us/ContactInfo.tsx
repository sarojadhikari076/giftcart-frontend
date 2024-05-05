import { contactData } from '@/constants/contactData'
import { Box, Sheet, Typography, Link } from '@mui/joy'

export default function ContactInfo() {
  return (
    <Box mb={4} display="grid" gridTemplateColumns="repeat(auto-fit, minmax(16rem, 1fr))" gap={1}>
      {contactData.map(({ label, value, icon, link }) => (
        <Sheet sx={{ p: 1, borderRadius: 'sm' }} variant="outlined" key={label}>
          <Link
            href={link}
            startDecorator={icon}
            level="title-md"
            color="neutral"
            overlay
            target="_blank"
          >
            {label}
          </Link>
          <Typography level="body-sm">{value}</Typography>
        </Sheet>
      ))}
    </Box>
  )
}
