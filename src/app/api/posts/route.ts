import { NextResponse } from 'next/server';
import { getPostsFromFileSystem } from '../../../lib/posts-server';

export async function GET() {
  const posts = getPostsFromFileSystem();
  return NextResponse.json(posts);
}