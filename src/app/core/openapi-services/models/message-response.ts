/* tslint:disable */
/* eslint-disable */
import { UserResponse } from '../models/user-response';
export interface MessageResponse {
  content?: string;
  createdAt?: string;
  id?: number;
  receiver?: UserResponse;
  sender?: UserResponse;
}
