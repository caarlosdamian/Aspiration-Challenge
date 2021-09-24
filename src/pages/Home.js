import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "../components/Shared/Text";
import Flex, { Center } from "../components/Shared/Flex";
import { getData } from "../api/getData";

const Wrapper = styled(Flex)`
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res?.data?.topic?.relatedTopics || []);
    });
  }, []);
  return (
    <Wrapper>
      <Center>
        <Flex marginTop="10px">
          <Text size="60px">Github Api</Text>
        </Flex>
      </Center>
      <Center></Center>
    </Wrapper>
  );
};

export default Home;
