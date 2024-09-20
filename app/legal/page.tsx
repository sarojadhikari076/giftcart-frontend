import { Container, Typography } from '@mui/joy'

export default function LegalPage() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography level="h3" mb={2} color="primary" id="terms-of-service">
        Terms of Service
      </Typography>
      <Typography mb={4} level="body-sm" lineHeight={2}>
        Welcome to GiftCart, your go-to destination for all your online shopping needs. By accessing
        or using the GiftCart website (the &quot;Site&quot;), you agree to comply with and be bound
        by the following terms and conditions of use. Please read these terms carefully before using
        the Site. If you do not agree with any part of these terms, you may not access the Site.
        <br /> <b>1. Use of the Site:</b> GiftCart grants you a limited, non-exclusive,
        non-transferable, and revocable license to access and make personal use of the Site. You may
        not modify, reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site for
        any commercial purpose without explicit written consent from GiftCart. Furthermore, you
        agree not to use the Site in any manner that could damage, disable, overburden, or impair
        the Site or interfere with any other party&apos;s use and enjoyment of the Site.
        <br />
        <b>2. Product Information and Availability:</b> GiftCart makes every effort to provide
        accurate and up-to-date information regarding the products offered on the Site, including
        descriptions, pricing, and availability. However, we do not warrant that product
        descriptions or other content on the Site are accurate, complete, reliable, current, or
        error-free. In the event that a product is listed at an incorrect price or is unavailable,
        we reserve the right to refuse or cancel any orders placed for such products, whether or not
        the order has been confirmed and payment has been processed.
        <br /> <b>3. User Conduct: </b> When using the Site, you agree to abide by all applicable
        laws and regulations and to be solely responsible for all acts or omissions that occur under
        your account or password, including the content of your transmissions through the Site. You
        agree not to upload, post, transmit, or distribute any material that is unlawful,
        defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable. GiftCart
        reserves the right to terminate your access to the Site or take other appropriate action if
        you violate these terms or engage in any conduct that we deem to be harmful to our business
        or other users.
      </Typography>

      <Typography level="h3" id="privacy-policy" color="primary" mb={2}>
        Privacy Policy
      </Typography>
      <Typography level="body-sm" lineHeight={2} mb={4}>
        At GiftCart, we are committed to protecting your privacy and ensuring the security of your
        personal information. This Privacy Policy outlines how we collect, use, and safeguard your
        data when you visit our website or make a purchase from us.
        <br /> <b>1. Information We Collect:</b> When you visit the GiftCart website, we may collect
        certain information about your device, including your IP address, browser type, operating
        system, and other technical details. We may also collect personal information that you
        voluntarily provide to us, such as your name, email address, shipping address, and payment
        information.
        <br /> <b>2. Use of Information:</b> We use the information we collect to process and
        fulfill your orders, communicate with you about your purchases, and provide you with
        customer support. Additionally, we may use your personal information to send you promotional
        offers, updates, and other marketing communications that may be of interest to you.
        <br /> <b>3. Data Security:</b> We take the security of your data seriously and implement
        appropriate technical and organizational measures to protect it from unauthorized access,
        disclosure, alteration, or destruction. However, no method of transmission over the internet
        or electronic storage is completely secure, so we cannot guarantee absolute security.
        <br /> <b>4. Third-Party Services:</b> We may use third-party service providers to help us
        operate our business and provide services to you, such as payment processing and shipping.
        These third parties may have access to your personal information only to perform these tasks
        on our behalf and are obligated not to disclose or use it for any other purpose.
        <br /> <b>5. Updates to this Policy:</b> We may update this Privacy Policy from time to time
        to reflect changes in our practices or for other operational, legal, or regulatory reasons.
        We encourage you to review this Policy periodically for any updates or changes.
      </Typography>

      <Typography level="h3" id="sales-and-refunds" color="primary" mb={2}>
        Sales and Refunds
      </Typography>
      <Typography level="body-sm" lineHeight={2}>
        Thank you for choosing GiftCart for your online shopping needs. Below are our policies
        regarding sales, returns, and refunds.
        <br /> <b>1. Sales:</b> All sales are final. Once an order is placed and payment is
        processed, it cannot be canceled or modified. We encourage you to review your order
        carefully before completing your purchase to ensure accuracy.
        <br /> <b>2. Refunds:</b> At GiftCart, we aim to provide the best quality products and
        service. If you are dissatisfied with your purchase for any reason, please contact us within
        7 days of receiving your order to initiate a refund request. To qualify for a refund, the
        item must be unused, in its original packaging, and in the same condition as when you
        received it. Refunds may be subject to a restocking fee.
        <br /> <b>3. Refund Process:</b> Once your return is received and inspected, we will notify
        you of the approval or rejection of your refund. If approved, your refund will be processed,
        and a credit will automatically be applied to your original method of payment within a
        certain number of days. Please note that shipping costs are non-refundable.
      </Typography>
    </Container>
  )
}
