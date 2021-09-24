import styled from "styled-components";
import { Mode } from "../../Shared/Text";
import { Link } from "../../Shared/Link";
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Mode>HOME</Mode>
        </Link>
        <Brightness4TwoToneIcon style={{ cursor: "pointer" }} />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
