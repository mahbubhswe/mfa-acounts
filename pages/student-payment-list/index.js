import React from "react";
import ShowStudentList from "../../components/ShowStudentList";
import Protected from "../../components/Protected";

export default function Index() {
  return (
    <Protected pageTitle={"Payment List | MFA Accounts"}>
      <ShowStudentList/>
    </Protected>
  );
}
