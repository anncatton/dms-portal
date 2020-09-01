/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Tooltip } from 'react-tippy';

import styled from '@emotion/styled';
import { useTheme } from 'src/ThemeProvider';
import { Global } from '@emotion/core';
import { merge } from 'lodash';

type TooltipProps = {
  disabled?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  interactive?: boolean;
  popperOptions?: {};
  html?: React.ReactNode;
  unmountHTMLWhenHide?: boolean;
  style?: {};
  preventOverflow?: boolean;
  children: React.ReactNode;
};

const CustomTooltip: React.ComponentType<TooltipProps> = ({
  html,
  position = 'top',
  preventOverflow = false,
  ...rest
}) => {
  const theme = useTheme();

  const TooltipContainer = styled('div')`
    ${css(theme.typography.label as any)}
    background: ${theme.colors.grey_6};
    border-radius: 2px;
    max-width: 150px;
    padding: 2px 4px;
    color: white;
    font-weight: normal;
  `;

  return (
    <React.Fragment>
      <Global
        styles={css`
          .tippy-popper .leave {
            opacity: 0 !important;
          }
          .tippy-popper {
            & .tippy-tooltip {
              padding: 0 !important;
              & .arrow-small {
                border-${position}-color: ${theme.colors.grey_6} !important;
              }
            }
          }
        `}
      />
      <Tooltip
        arrow
        arrowSize="small"
        popperOptions={{
          modifiers: merge(
            {
              preventOverflow: {
                enabled: preventOverflow,
              },
              flip: {
                enabled: false,
              },
              hide: {
                enabled: false,
              },
            },
            rest.popperOptions
          ),
        }}
        html={<TooltipContainer id="tooltip">{html}</TooltipContainer>}
        position={position}
        {...rest}
      />
    </React.Fragment>
  );
};

export default CustomTooltip;
