import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>{' '}
        <Link to='/posts' className='[&.active]:font-bold'>
          posts
        </Link>{' '}
        <Link
          to='/posts/$postId'
          params={{
            postId: '1'
          }}
          search={{
            pageIndex: 3,
            sortBy: 'price',
            desc: true
          }}
          className='[&.active]:font-bold'
        >
          posts/$postId
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})
