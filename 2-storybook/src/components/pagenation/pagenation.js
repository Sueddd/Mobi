import { useState } from "react";
import * as S from "./pagenation.style";

const CustomPagenation = (props) => {
  const [page, setPage] = useState(1);
  const { variant, shape, size, num } = props;

  return (
    <>
      <S.Nav variant={variant} shape={shape} size={size}>
        <S.Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          variant={variant}
          shape={shape}
          size={size}
        >
          &lt;
        </S.Button>
        {Array(10)
          .fill()
          .map((_, i) => (
            <S.Button
              onClick={() => setPage(i + 1)}
              aria-curren={page === i + 1 ? true : null}
              variant={variant}
              shape={shape}
              size={size}
            >
              {i + 1}
            </S.Button>
          ))}
        <S.Button
          onClick={() => setPage(page + 1)}
          disabled={page === 10}
          variant={variant}
          shape={shape}
          size={size}
        >
          &gt;
        </S.Button>
      </S.Nav>
    </>
  );
};
export default CustomPagenation;
