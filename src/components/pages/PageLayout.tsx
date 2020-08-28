/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'src/ThemeProvider';

const PageLayout = ({ children }: { children: any }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.grey_2};
      `}
    >
      <div
        css={css`
          height: 50px;
          background-color: ${theme.colors.white};
          ${theme.shadow.default};
          position: sticky;
          top: 0;
          left: 0;
          z-index: 5;
          width: 100%;
        `}
      >
        Header
      </div>
      {children}
      <div
        css={css`
          height: 50px;
          background-color: ${theme.colors.white};
          border-top: 1px solid ${theme.colors.grey_3};
        `}
      >
        Footer
      </div>
    </div>
  );
};

export default PageLayout;
