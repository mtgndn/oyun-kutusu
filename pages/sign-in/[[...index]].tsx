// pages/sign-in/[[...index]].tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',   // Tam ekran yüksekliği
      backgroundColor: '#1a202c', // İstersen arkaplan rengi, koyu ton örneği (Tailwind'in bg-gray-900)
      padding: '1rem',
    }}>
      <div style={{ width: '400px', maxWidth: '100%' }}>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
}
