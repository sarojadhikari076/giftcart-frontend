import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Person,
  Phone,
  Search,
  ShoppingBag,
  Twitter
} from '@mui/icons-material'

export const preNavLinks = [
  {
    label: 'Privacy Policy',
    href: '/legal#privacy-policy'
  },
  {
    label: 'Sales and Refunds',
    href: '/legal#sales-and-refunds'
  },
  {
    label: 'Terms of Service',
    href: '/legal#terms-of-service'
  }
]

export const mainLeftNavLinks = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Products',
    href: '/products'
  },
  {
    label: 'Contact Us',
    href: '/contact-us'
  },
  {
    label: 'About Us',
    href: '/about-us'
  },
  {
    label: 'FAQs',
    href: '/faqs'
  }
]

export const mainRightNavLinks = [
  {
    icon: <ShoppingBag />,
    href: '/user/carts',
    label: 'Carts'
  },
  {
    icon: <Search />,
    href: '/products',
    label: 'Search'
  },
  {
    icon: <Person />,
    href: '/auth/login',
    label: 'Login'
  }
]

export const socialIcons = [
  {
    icon: <Facebook />,
    href: 'https://www.facebook.com'
  },
  {
    icon: <Twitter />,
    href: 'https://www.twitter.com'
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com'
  },
  {
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com'
  }
]

export const footerLinks = [
  {
    title: 'Shop Info',
    links: [
      {
        label: 'Contact Us',
        href: '/contact-us'
      },
      {
        label: 'About Us',
        href: '/about-us'
      },
      {
        label: 'Terms & Condition',
        href: '/legal#terms-and-conditions'
      },
      {
        label: 'Privacy Policy',
        href: '/legal#privacy-policy'
      },
      {
        label: 'FAQs & Help',
        href: '/faqs'
      },
      {
        label: 'Return Policy',
        href: '/legal#sales-and-refunds'
      }
    ]
  },
  {
    title: 'Account',
    links: [
      {
        label: 'Shop Details',
        href: '/about-us'
      },
      {
        label: 'My Account',
        href: '/user/profile'
      },
      {
        label: 'Shopping Cart',
        href: '/user/carts'
      },
      {
        label: 'Order History',
        href: '/user/profile'
      }
    ]
  }
]

export const contactUsLinks = [
  {
    label: 'Devonshire House, Loughborough, LE11 3TU, United Kingdom',
    href: '/contact-us',
    icon: <LocationOn />
  },
  {
    label: 'sarojadhikari076@gmail.com',
    href: 'mailto:sarojadhikari076@gmail.com',
    icon: <Mail />
  },
  {
    label: '+44 123 456 7890',
    href: 'tel:+441234567890',
    icon: <Phone />
  }
]
