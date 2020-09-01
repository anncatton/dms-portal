/** @jsx jsx */ import { jsx, css } from '@emotion/core';

import Facets from './Facets';
import RepoTable from './RepoTable';
import QueryBar from './QueryBar';
import { PageContentProps } from './index';
import { useTheme } from 'src/ThemeProvider';

const PageContent = (props: PageContentProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        flex: 1;
        margin: 0 15px 0 0;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-left: 0;
        `}
      >
        <div
          css={css`
            flex: 3;
            flex-direction: column;
            min-width: 250px;
            max-width: 270px;
            padding-top: 12px;
            background-color: ${theme.colors.white};
          `}
        >
          <div
            css={css`
              height: 30px;
            `}
          >
            Filters
          </div>
          <Facets {...props} />
        </div>
        <div
          css={css`
            margin-left: 15px;
            flex: 8.5;
            flex-direction: column;
          `}
        >
          <QueryBar {...props} />
          <RepoTable {...props} />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
