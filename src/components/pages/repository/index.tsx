import React from 'react';
import { Arranger } from '@arranger/components/dist/Arranger';
import PageContent from './PageContent';
import PageLayout from '../PageLayout';

import { RepoFiltersType } from './types';

export interface PageContentProps {
  sqon: RepoFiltersType;
  selectedTableRows: string[];
  setSelectedTableRows: (id: string) => void;
  projectId: string;
  index: string;
  api: ({
    endpoint,
    body,
    headers,
    method,
  }: {
    endpoint: string;
    body: string;
    headers: any;
    method: string;
  }) => Promise<any>;
  setSQON: (sqon: RepoFiltersType) => void;
  fetchData?: (projectId: string) => Promise<any>;
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
