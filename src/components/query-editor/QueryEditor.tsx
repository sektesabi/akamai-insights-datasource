import { QueryEditorProps } from '@grafana/data';
import React, { useLayoutEffect, useState } from 'react';

import { DatasourceService } from '../../services/datasource.service';
import { initialModel } from '../../types/discovery-api.model';
import { MyDataSourceOptions, MyQuery } from '../../types/types';
import { DataSourceForm } from './DataSourceForm/DataSourceForm';

type Props = QueryEditorProps<DatasourceService, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery, datasource }: Props) {
  const [ model, setState ] = useState(initialModel);

  useLayoutEffect(() => {
    const subscription = DatasourceService.discoveryApi(datasource.id).subscribe({
      next: data => setState(data)
    });

    return () => subscription.unsubscribe();
  }, [ datasource.id ]);

  return (
    <DataSourceForm
      model={model}
      query={query}
      onChange={onChange}
      onRunQuery={onRunQuery}
      datasource={datasource}
    />
  );
}
