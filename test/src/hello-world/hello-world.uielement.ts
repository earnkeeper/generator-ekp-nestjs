import {
  Col,
  Container,
  MilestoneWrapper,
  PageHeaderTile,
  Row,
  UiElement,
} from '@earnkeeper/ekp-ui';
import { HELLO_WORLD_MILESTONES, HELLO_WORLD_DOCUMENT } from '../util/collectionNames';

export default function element(): UiElement {
  return Container({
    children: [
      Row({
        children: [
          Col({
            children: [
              PageHeaderTile({
                title: 'Hello World',
                icon: 'cil-bullhorn',
              }),
            ],
          }),
        ],
      }),
      MilestoneWrapper({
        milestones: `$.${HELLO_WORLD_MILESTONES}`,
        child: tableRow(),
      }),
    ],
  });
}

function tableRow(): UiElement {
  return Row({
    children: [
      Col({
        children: [
          Datatable({
            columns: tableColumns(),
            data: `$.${HELLO_WORLD_DOCUMENT}.*`,
            defaultSortAsc: true,
            defaultSortFieldId: 'expiresIn',
            filterable: false,
            pagination: false,
          }),
        ],
      }),
    ],
  });
}

function tableColumns(): DatatableColumn[] {
  return [
    {
      id: 'name',
      value: '$.name',
    },
    {
      id: 'value',
      value: '$.value',
    },
  ];
}
