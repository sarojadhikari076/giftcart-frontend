export type TeamMember = {
  id: number
  name: string
  role: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Saroj Adhikari',
    role: 'Founder',
    image: '/images/member-1.jpeg'
  },
  {
    id: 2,
    name: 'Ruku Ghimire',
    role: 'Co-Founder',
    image: '/images/member-2.jpeg'
  },
  {
    id: 3,
    name: 'Suman Dahal',
    role: 'Supplies Manager',
    image: '/images/member-3.png'
  },
  {
    id: 4,
    name: 'Rajesh Shrestha',
    role: 'Marketing Manager',
    image: '/images/member-4.jpeg'
  },
  {
    id: 5,
    name: 'Sushil Tamang',
    role: 'Customer Support',
    image: '/images/member-5.jpeg'
  },
  {
    id: 6,
    name: 'Sarita Bhandari',
    role: 'Sales Manager',
    image: '/images/member-6.webp'
  }
]
