/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Row, Col, Container } from 'react-grid-system';
import React from 'react';

import Facets from './Facets';
import RepoTable from './RepoTable';
import QueryBar from './QueryBar';
import { PageContentProps } from './index';
import { useTheme } from 'src/ThemeProvider';

const PageContent = (props: PageContentProps) => {
  const theme = useTheme();
  return (
    <Container xl>
      <Row>
        <Col
          md={2.2}
          css={css`
            max-width: 250px !important;
            padding-top: 12px;
            background-color: ${theme.colors.white};
          `}
        >
          <Row
            css={css`
              height: 30px;
            `}
          >
            Filters
          </Row>
          <Facets {...props} />
        </Col>
        <Col md={9.8}>
          <QueryBar {...props} />
          <RepoTable {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default PageContent;
