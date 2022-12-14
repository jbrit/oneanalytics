import Footer from "layout/Footer/Footer";
import Header from "layout/Header/Header";
import { FC } from "react";
import { Content, Layout as StyledLayout } from "./Layout.styles";
import { ILayoutProps } from "./Layout.types";

const Layout: FC<ILayoutProps> = ({
  search,
  children,
  headerChildren,
  contentJustify,
}) => {
  return (
    <StyledLayout>
      <Header>{headerChildren}</Header>
      <Content contentJustify={contentJustify}>{children}</Content>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
