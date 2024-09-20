import MyOrders from '@/components/profile/MyOrders'
import ProfileHeader from '@/components/profile/ProfileHeader'
import Settings from '@/components/profile/Settings'
import { Container, Tab, TabList, TabPanel, Tabs } from '@mui/joy'

const tabLists = ['My Orders', 'Settings']

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
          <MyOrders />
        </TabPanel>
        <TabPanel value={1}>
          <Settings />
        </TabPanel>
      </Tabs>
    </Container>
  )
}
