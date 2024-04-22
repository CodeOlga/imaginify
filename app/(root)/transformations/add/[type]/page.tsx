import { auth } from "@clerk/nextjs";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";

import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect("/sign-in");
  // console.log("Идентификатор пользователя:", userId);
  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;

// ===============================
// // Adrian
// import Header from "@/components/shared/Header";
// import TransformationForm from "@/components/shared/TransformationForm";
// import { transformationTypes } from "@/constants";
// import { getUserById } from "@/lib/actions/user.actions";
// import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// const AddTransformationTypePage = async ({
//   params: { type },
// }: SearchParamProps) => {
//   const { userId } = auth();
//   const transformation = transformationTypes[type];

//   if (!userId) redirect("/sign-in");

//   const user = await getUserById(userId);

//   return (
//     <>
//       <Header title={transformation.title} subtitle={transformation.subTitle} />

//       <section className="mt-10">
//         <TransformationForm
//           action="Add"
//           userId={user._id}
//           type={transformation.type as TransformationTypeKey}
//           creditBalance={user.creditBalance}
//         />
//       </section>
//     </>
//   );
// };

// export default AddTransformationTypePage;

// ============================
// // GPT
// import { auth } from "@clerk/nextjs";
// import Header from "@/components/shared/Header";
// import TransformationForm from "@/components/shared/TransformationForm";
// import { transformationTypes } from "@/constants";
// import { getUserById } from "@/lib/actions/user.actions";
// import { redirect } from "next/navigation";

// const AddTransformationTypePage = async ({
//   params: { type },
// }: SearchParamProps) => {
//   const { userId } = auth();
//   const transformation = transformationTypes[type];

//   if (!userId) {
//     redirect("/sign-in");
//     return null; // Возвращаем null, чтобы компонент не отрисовывался, если userId не определен
//   }

//   let user;
//   try {
//     user = await getUserById(userId);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     // Добавьте здесь обработку ошибки, если это необходимо
//     // Например, можно перенаправить пользователя на страницу с сообщением об ошибке
//     return <p>Error fetching user. Please try again later.</p>;
//   }

//   return (
//     <>
//       <Header title={transformation.title} subtitle={transformation.subTitle} />
//       <TransformationForm
//         action="Add"
//         userId={user._id}
//         type={transformation.type as TransformationTypeKey}
//         creditBalance={user.creditBalance}
//       />
//     </>
//   );
// };

// export default AddTransformationTypePage;
