'use client';
import Wrapper from '@/assets/wrappers/LandingPage';
import { Logo } from '@/components';
import Link from 'next/link';

import { useAppContext } from '@/context/appContext';
import { useRouter } from 'next/navigation';

const Landing = () => {
  const router = useRouter();
  // const { user } = useAppContext();
  const user = null;
  return (
    <>
      {user && router.push('/')}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              {`I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
              bottle single-origin coffee chia. Aesthetic post-ironic venmo,
              quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
              narwhal.`}
            </p>
            <Link href='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src='/images/main.svg' alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
