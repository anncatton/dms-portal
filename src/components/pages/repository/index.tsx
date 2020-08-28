import React from 'react';
import { Arranger } from '@arranger/components/dist/Arranger';
import PageContent from './PageContent';
import PageLayout from '../PageLayout';

import { RepoFiltersType } from './types';

export interface PageContentProps {
  sqon: RepoFiltersType;
  selectedTableRows: string[];
  setSelectedTableRows: (string) => void;
  projectId: string;
  index: string;
  api: Function;
  setSQON: Function;
  fetchData?: Function;
}

const RepositoryPage = () => {
  return (
    <PageLayout>
      <Arranger
        projectId={'table3_test'}
        graphqlField={'file'}
        index={'file-centric'}
        render={(props: PageContentProps) => {
          return <PageContent {...props} />;
        }}
      />
    </PageLayout>
  );
};

export default RepositoryPage;
