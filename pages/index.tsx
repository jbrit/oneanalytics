import Layout from "layout/Layout/Layout";
import type { NextPage } from "next";
import MultiSearch from "$components/MultiSearch/MultiSearch";
import { useState } from "react";
import { HomeContent } from "layout/HomeContent/HomeContent";
import { FlexibleDiv } from "$components/FlexibleDiv/FlexibleDiv.styles";
import { TypographyThree } from "$components/Typography/Typography.styles";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const router = useRouter();

  return (
    <Layout
      headerChildren={
        <FlexibleDiv justifyContent="center" alignItems="center">
          <Image
            width={288}
            height={51}
            alt=""
            objectFit="cover"
            // layout="responsive"
            src="/logo.png"
          />
        </FlexibleDiv>
      }
      search=""
    >
      <HomeContent>
        <FlexibleDiv
          gap="32px"
          flexDir="column"
          alignItems="stretch"
          width="100%"
        >
          <MultiSearch
            inputs={inputs}
            setInputs={setInputs}
            onSearch={() =>
              router.push(`/transactions?search=${inputs.join(",")}`)
            }
          />
          <TypographyThree textAlign="center">
            Multiple hash,{" "}
            <TypographyThree as="span" color="rgba(127, 129, 132, 0.87)">
              transaction or address search is
            </TypographyThree>{" "}
            allowed
          </TypographyThree>
        </FlexibleDiv>
      </HomeContent>
    </Layout>
  );
};

export default Home;
