import Link from 'next/link';
import { getUser } from '@/utils/getUser';

export default async function Navbar() {
  const user = await getUser();

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-700">
      <Link href="/" className="text-xl font-bold">NeuraLint</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <form action="/auth/signout" method="post">
              <button className="px-3 py-1 border rounded">Logout</button>
            </form>
          </>
        ) : (
          <Link href="/login" className="px-3 py-1 border rounded">Login</Link>
        )}
      </div>
    </nav>
  );
}
