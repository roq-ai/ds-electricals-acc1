import { RequestInterface } from 'interfaces/request';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  request?: RequestInterface[];
  organization?: OrganizationInterface;
  _count?: {
    request?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
