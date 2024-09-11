"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";
import CartModal from "./CartModal";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const { cart, counter, getCart } = useCartStore();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);

    // console.log("SFSSs", logoutUrl)
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    setOpen((prev) => !prev)
  }

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-30">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/login" className="block relative">
          <div className="mt-2 cursor-pointer" onClick={handleProfile}>
            {/* TEMPORARY PLACEHOLDER IMAGE */}
            {isProfileOpen? <Image
              src="/profile.png"
              alt=""
              width={22}
              height={22}
              className="cursor-pointer bg-slate-700"
            />: "Login"}
          </div>
          {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-slate-700 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      </Link>
     <div
        className="relative cursor-pointer"
        onClick={handleCart}
        // onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" className="bg-white rounded m-2" alt="" width={30} height={30} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      </div>
      )}

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default Menu;
