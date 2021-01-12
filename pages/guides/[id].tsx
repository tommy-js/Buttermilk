import React, { useEffect } from "react";
import { GuidePage } from "../../components/guide_page/GuidePage/GuidePage";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { useRouter } from "next/router";

export default function Guide() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Navbar />
      <GuidePage />
    </div>
  );
}
