
import RegisterArea from "@components/login-register/register-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";

export default function Register() {
  return (
    <Wrapper>
      <SEO pageTitle='Faime' />
      <Breadcrumb title="Register" subTitle="Register" />
      <RegisterArea />
    </Wrapper>
  )
}