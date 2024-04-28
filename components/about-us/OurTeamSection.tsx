import { teamMembers } from '@/constants/teamMembers'
import { Typography, Box, Container, Avatar, Sheet } from '@mui/joy'

function OurTeamSection() {
  return (
    <Container maxWidth="md">
      <Typography level="h2" textAlign="center" color="primary" mb={2}>
        Our Team
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {teamMembers.map((member) => (
          <Sheet
            key={member.id}
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 1 14rem'
            }}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              size="lg"
              sx={{ height: 100, width: 100 }}
            />
            <Typography level="title-lg" color="primary" mt={1}>
              {member.name}
            </Typography>
            <Typography level="body-sm" textColor="neutral.500">
              {member.role}
            </Typography>
          </Sheet>
        ))}
      </Box>
    </Container>
  )
}

export default OurTeamSection
