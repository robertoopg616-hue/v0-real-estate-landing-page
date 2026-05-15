import { Metadata } from 'next'
import { ContactPageContent } from '@/components/contact/contact-page-content'

export const metadata: Metadata = {
  title: 'Contact Us | Premium Realty - Schedule Your Free Consultation',
  description:
    'Get in touch with our team of upsizing experts. Schedule your free consultation today and take the first step toward your dream home.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
