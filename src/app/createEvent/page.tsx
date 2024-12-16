import CreateEventForm from '@/components/CreateEventForm';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';

// eslint-disable-next-line no-multi-assign
const CreateEvent = async () => {
// Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  return (
    <main>
      <CreateEventForm />
    </main>
  );
};

export default CreateEvent;
