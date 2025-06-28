import { getUser } from '@/utils/getUser';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
      <p className="text-gray-400 mt-2">Your dashboard content goes here.</p>
    </div>
  );
}
