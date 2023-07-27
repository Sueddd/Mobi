import { styled } from "styled-components";

const Pagenation = ({ numPages, page, setPage }) => {
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(10)
          .fill()
          .map((_, i) => (
            <Button
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === 10}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};
export default Pagenation;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  position: relative;
  top: 50px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background-color: red;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: gray;
    cursor: revert;
    transform: rever;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
  }
`;
