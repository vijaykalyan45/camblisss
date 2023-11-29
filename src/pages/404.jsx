import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ErrorPageMain from "@components/error/error-page-main";
import FooterOne from "@layout/footers/footer-one";
import ContactSection from "@components/common/contact/contact-area";


export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      <Header />
      <main>
        <ErrorPageMain />
        <ContactSection />
      </main>
      <FooterOne />
    </Wrapper>
  )
}