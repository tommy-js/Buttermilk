import React, { useEffect } from "react";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { UserProfile } from "../../components/user/UserProfile/UserProfile";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Navbar />
      <UserProfile />
    </div>
  );
}
