/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'src/ThemeProvider';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.grey_2};
        display: grid;
        grid-template-rows: 50px 1fr;
        min-height: 100vh;
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
      ></div>
      {children}
      <div
        css={css`
          height: 50px;
          background-color: ${theme.colors.white};
          border-top: 1px solid ${theme.colors.grey_3};
        `}
      ></div>
    </div>
  );
};

export default PageLayout;
