import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Profile from './Profile';
import navItems from './navItems';

export default function DesktopHeader({ renderSide }) {
  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const isLoggedIn = true;

  return (
    <header className="md:flex items-center justify-between w-full bg-white h-[72px] px-36 drop-shadow-3xl fixed top-0 hidden z-20">
      <Image src="/assets/wabi-sabi-logo.svg" alt="Logo" width={144} height={63} />
      {renderSide &&
        (isLoggedIn ? (
          <div className="relative flex items-center justify-end">
            <DesktopNavbar />
            <Profile />
          </div>
        ) : (
          <nav className="flex flex-row items-center gap-x-2">
            <Link href="/account/register">
              <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">Sign up</p>
            </Link>
            <Link href="/account/login">
              <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">Log in</p>
            </Link>
          </nav>
        ))}
    </header>
  );
}

DesktopHeader.propTypes = {
  renderSide: PropTypes.bool.isRequired,
};

function DesktopNavbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center mr-6">
      <ul className="flex items-end gap-6 ml-auto list-none">
        {navItems.map((menu) => (
          <li
            className={`list-none relative h-9 flex items-center cursor-pointer border-0 menu-items ${
              menu.url === '/home' && 'order-first'
            }`}
            key={menu.url}
          >
            <Link href={menu.url}>
              <img src={router.pathname === menu.url ? menu.active : menu.inactive}
                className="object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
