import {
  APIRequestContext,
  APIResponse,
  expect,
  Locator,
  Page,
} from '@playwright/test';

export abstract class BaseActions {
  constructor(protected context: APIRequestContext) {}

  protected async executePost(
    resource: string,
    body: any,
    headers?: { [key: string]: string } | {}
  ): Promise<APIResponse> {
    return await this.context.post(`${process.env.API_BASE_URL}${resource}`, {
      headers,
      data: body,
    });
  }

  protected async executeGet(
    resource: string,
    headers?: { [key: string]: string } | {}
  ): Promise<APIResponse> {
    console.log(`${process.env.API_BASE_URL}${resource}`);
    return await this.context.get(`${process.env.API_BASE_URL}${resource}`, {
      headers,
    });
  }

  protected async executeDelete(
    resource: string,
    headers?: { [key: string]: string }
  ): Promise<APIResponse> {
    console.log(`${process.env.API_BASE_URL}${resource}`);
    return await this.context.delete(`${process.env.API_BASE_URL}${resource}`, {
      headers,
    });
  }
}
