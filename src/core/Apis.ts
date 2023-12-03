import { APIRequest, APIRequestContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { Posts } from '../api/actions/Posts';

export class Apis {
  constructor(private context: APIRequestContext) {}

  public readonly posts = new Posts(this.context);
}
