import React, { useEffect } from "react";
import { SpotPage } from "../../components/spot_page/SpotPage/SpotPage";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { useRouter } from "next/router";

export default function Spot() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return (
    <div>
      <Navbar />
      <SpotPage />
    </div>
  );
}
