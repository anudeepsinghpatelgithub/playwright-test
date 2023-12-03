import { test, expect, APIRequestContext } from '@playwright/test';
import { Apis } from '../core/Apis';
import { PostsModel } from '../api/models/Post';

let apiContext: APIRequestContext;
let apis: Apis;
test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  apis = new Apis(apiContext);
});

test.describe('posts end point tests @api', async () => {
  test('get all posts', async ({}) => {
    const allPosts: PostsModel = await apis.posts.getAllPosts();
    expect(allPosts[0].title).toBeTruthy();
  });
});

test.afterAll(async ({}) => {
  await apiContext.dispose();
});
