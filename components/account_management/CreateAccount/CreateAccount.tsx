import React from "react";
import { Header } from "../Header/Header";
import { SubText } from "../SubText/SubText";
import { CreateAccountInputs } from "../CreateAccountInputs/CreateAccountInputs";
import { Create } from "../Create/Create";
import { SigninButton } from "../SigninButton/SigninButton";

export const CreateAccount: React.FC = () => {
  return (
    <div>
      <Header />
      <SubText subtext="Create a Buttermilk account" />
      <CreateAccountInputs />
      <Create />
      <SigninButton />
    </div>
  );
};
