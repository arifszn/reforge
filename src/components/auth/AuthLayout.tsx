import { Outlet } from 'react-router';
import loginBg from '../../assets/img/login-bg.png';

const AuthLayout = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <img
          alt=""
          src={loginBg}
          width="918"
          height="1495"
          decoding="async"
          data-nimg="1"
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%] opacity-50"
          style={{ color: 'transparent' }}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-20 md:mt-auto md:h-screen">
              <div
                className="bg-white rounded-2xl shadow-2xl w-full sm:w-96"
                style={{
                  maxWidth: 'calc(100vw - 5rem)',
                  padding: '2.375rem 1rem 3rem',
                }}
              >
                <div className="p-8 space-y-4 md:space-y-6 md:p-10">
                  <Outlet />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
