import { createFileRoute, useParams } from '@tanstack/react-router'

// @ts-ignore
export const Route = createFileRoute('/posts/$postId')({
  component: PostsIndexComponent
})

function PostsIndexComponent() {
  const { postId } = Route.useParams()
  return <div>Select a post. {postId}</div>
}
