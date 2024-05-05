import http from '@/services/http'
import { Faq } from '@/types/faq'
import {
  AccordionGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography
} from '@mui/joy'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Find answers to your frequently asked questions',
  keywords: 'faq, frequently asked questions, help, support',
  creator: 'Saroj Adhikari',
  publisher: 'Saroj Adhikari'
}

export default async function FaqsPage() {
  const { faqs } = await http<{ faqs: Faq[] }>('/faqs', {
    method: 'GET'
  })

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography level="h3" textAlign="center" color="primary" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography textAlign="center" level="body-sm" mb={3} maxWidth="60ch" mx="auto">
        Find answers to your frequently asked questions below. If you don&apos;t find the answer
        you&apos;re looking for, please contact us.
      </Typography>
      <AccordionGroup variant="outlined" sx={{ borderRadius: 'md' }}>
        {faqs.map((faq) => (
          <Accordion key={faq._id}>
            <AccordionSummary>
              <Typography level="title-md">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography py={1} level="body-sm">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </Container>
  )
}
