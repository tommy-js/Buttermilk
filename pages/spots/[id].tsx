import React, { useEffect } from "react";

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
    </div>
  );
}
