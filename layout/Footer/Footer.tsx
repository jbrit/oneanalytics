import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { TypographyThree } from "$components/Typography/Typography.styles";
import Link from "next/link";
import { Copyright } from "svg/copyright";
import { Discord } from "svg/discord";
import { Medium } from "svg/medium";
import { Telegram } from "svg/telegram";
import { Twitter } from "svg/twitter";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <FlexibleDiv gap="7px">
        <Copyright />
        <TypographyThree weight="300">2022 OneAnalytics, Inc.</TypographyThree>
      </FlexibleDiv>
      <FlexibleDiv gap="14px">
        <Link href="/">
          <a>
            <Twitter />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Telegram />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Discord />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Medium />
          </a>
        </Link>
      </FlexibleDiv>
    </StyledFooter>
  );
};

export default Footer;
