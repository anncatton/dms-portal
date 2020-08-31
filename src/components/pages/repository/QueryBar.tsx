/** @jsx jsx */ import { jsx, css } from '@emotion/core';

import { CurrentSQON } from '@arranger/components/dist/Arranger';
import { Row } from 'react-grid-system';
import { useTheme } from 'src/ThemeProvider';
import defaultTheme from '../../../theme';
import { PageContentProps } from '.';

const getCss = (theme: typeof defaultTheme) => css`
  ${theme.shadow.default};
  & .sqon-view {
    background-color: transparent;
    display: flex;
    flex: 1;
    align-items: center;
    padding: 12px 0 12px 12px;
    margin: 0;
    font-family: Lato, sans-serif;
    color: ${theme.colors.accent_dark};
    & .sqon-group {
      flex-wrap: wrap;
      margin-top: 3px;
      margin-bottom: 3px;
    }
    & .sqon-view-empty {
      display: none;
    }
    & .sqon-bubble {
      display: flex;
      align-items: center;
      height: 22px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 300;
      letter-spacing: 0.2px;
      margin-right: 7px;
      flex: none;
    }
    & .sqon-bubble.sqon-clear {
      border: solid 1px ${theme.colors.grey_5};
      background-color: ${theme.colors.white};
      color: ${theme.colors.accent_dark};
      &:hover {
        background-color: ${theme.colors.secondary_light};
      }
      padding: 0 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;
      border-radius: 5px;
    }
    & .sqon-field {
      text-transform: uppercase;
      font-weight: normal;
    }
    & .sqon-op {
      color: inherit;
      font-weight: normal;
      margin-right: 7px;
    }
    & .sqon-value {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.white};
      padding: 0 7px 0 12px;
      margin-right: 4px;
      cursor: pointer;
      padding: 0 7px;
      margin-right: 6px;
      ${css(theme.typography.label)};
      cursor: pointer;
    }
    & .sqon-less,
    .sqon-more {
      background-color: ${theme.colors.accent_light};
      color: ${theme.colors.white};
      padding: 0 12px;
      text-transform: uppercase;
      cursor: pointer;
      margin-right: 6px;
      cursor: pointer;
      justify-content: center;
      display: flex;
      align-items: center;
      height: 22px;
      border-radius: 8px;
      flex: none;
      ${css(theme.typography.label)};
    }
    & .sqon-more {
      width: 20px;
      padding: 0 5px;
      justify-content: center;
    }
    & .sqon-less {
      padding: 0 10px;
    }
    & .sqon-value-group {
      font-size: 22px;
      line-height: 22px;
      color: ${theme.colors.accent};
    }
    & .sqon-value-group-start {
      margin-right: 6px;
      margin-left: 2px;
    }
    & .sqon-value-group-end {
      margin-right: 10px;
    }
    & .sqon-value:after {
      content: url(data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%228%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%3Cline%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%228%22%20y2%3D%228%22%20/%3E%0A%20%20%3Cline%20x1%3D%228%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%228%22%20/%3E%0A%3C/svg%3E);
      margin-left: 9px;
    }

    & .sqon-value-single {
      margin-right: 10px;
    }
    & .sqon-empty-message {
      font-weight: normal;
    }
  }
`;

const QueryBar = (props: PageContentProps) => {
  const theme = useTheme();
  return (
    <Row
      gutterWidth={2}
      css={css`
        min-height: 48px;
        margin: 10px 0;
        background-color: ${theme.colors.white};
        border-radius: 5px;
        ${getCss(theme)}
      `}
    >
      <CurrentSQON {...props} />
    </Row>
  );
};

export default QueryBar;
