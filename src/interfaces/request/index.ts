import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RequestInterface {
  id?: string;
  service_id?: string;
  user_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  service?: ServiceInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_id?: string;
  user_id?: string;
  status?: string;
}
