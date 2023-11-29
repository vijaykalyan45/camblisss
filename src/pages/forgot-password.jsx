import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ForgotArea from "@components/login-register/forgot-area";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";



export default function forgotPassword() {
  return (
    <Wrapper>
      <SEO pageTitle='Faime' />
      <Breadcrumb title="Forgot Password" subTitle="Forgot Password" />
      <ForgotArea />
    </Wrapper>
  )
}