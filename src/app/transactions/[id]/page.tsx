import React from "react";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Transaction {id}</h1>
    </div>
  );
}
