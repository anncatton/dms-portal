/** @jsx jsx */ import { jsx } from '@emotion/core';

import { Aggregations } from '@arranger/components/dist/Arranger';
import { PageContentProps } from '.';

const Facets = (props: PageContentProps) => {
  return <Aggregations {...props} />;
};

export default Facets;
