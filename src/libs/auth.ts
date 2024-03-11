import { cookies } from "next/headers";

export async function login(formData: FormData) {
  // call api verify user

  // create the session
  // const expires = new Date(Date.now() + 10 * 1000);
  // const session = await encrypt({user, expires});
  console.log(formData);
  cookies().set("auth", "test");
}

export async function logout() {
  // call api verify user
  cookies().delete("auth");
}
