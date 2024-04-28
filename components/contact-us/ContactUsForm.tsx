import { contactData } from '@/constants/contactData'

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Typography,
  Sheet,
  Link
} from '@mui/joy'

function ContactUsForm() {
  return (
    <Box flex={1}>
      <Box
        mb={4}
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(16rem, 1fr))"
        gap={1}
      >
        {contactData.map(({ label, value, icon, link }) => (
          <Sheet
            sx={{ p: 1, borderRadius: 'sm' }}
            variant="outlined"
            key={label}
          >
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
      <Stack gap={1} maxWidth="50rem">
        <Typography level="title-lg">Please fill out the form below</Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter your email" />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea minRows={5} maxRows={8} placeholder="Enter your message" />
        </FormControl>
        <Button sx={{ alignSelf: 'start' }}>Submit</Button>
      </Stack>
    </Box>
  )
}

export default ContactUsForm
