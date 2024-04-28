import LogoutButton from '@/components/profile/LogoutButton'
import MyOrders from '@/components/profile/MyOrders'
import ProfileHeader from '@/components/profile/ProfileHeader'
import Settings from '@/components/profile/Settings'
import { Box, Container, Tab, TabList, TabPanel, Tabs, Typography } from '@mui/joy'

const tabLists = ['Settings', 'My Orders']

export default function ProfilePage() {
  return (
    <Container sx={{ py: 5, minHeight: '90vh' }}>
      <ProfileHeader />
      <Tabs aria-label="Basic tabs" variant="outlined" defaultValue={0}>
        <TabList>
          {tabLists.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>
        <TabPanel value={0}>
          <Settings />
        </TabPanel>
        <TabPanel value={1}>
          <MyOrders />
        </TabPanel>
      </Tabs>
    </Container>
  )
}
