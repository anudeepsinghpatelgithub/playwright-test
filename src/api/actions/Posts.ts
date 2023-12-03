import { expect } from '@playwright/test';
import { BaseActions } from './BaseActions';
import { GET_POSTS } from '../../core/ApiEndPoints';
import { PostsModel } from '../models/Post';

export class Posts extends BaseActions {
  async getAllPosts(): Promise<PostsModel> {
    const response = await this.executeGet(GET_POSTS);
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }
}
