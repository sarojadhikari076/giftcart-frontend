import { Email, LocationOn, Phone } from '@mui/icons-material'

export const contactData = [
  {
    label: 'Address',
    value: 'Loughborough, LE11 3DW',
    icon: <LocationOn />,
    link: 'https://google.com/maps?q=11+Devonshire+House,+Loughborough,+LE11+3DW'
  },
  {
    label: 'Send Us an Email',
    value: 'hello@giftcart.com',
    icon: <Email />,
    link: 'mailto:hello@giftcart.com'
  },
  {
    label: 'Telephone',
    value: '+44 123 456 7890',
    icon: <Phone />,
    link: 'tel:+441234567890'
  }
]
