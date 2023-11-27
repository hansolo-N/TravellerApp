import supabase from "../client/SupaClient";

export async function getCity(id) {
  let { data, error } = await supabase.from("cities").select("id");

  if (error) {
    console.log(error);
    throw new Error("could not load cities");
  }

  return data;
}

export async function getCities() {
  const { data, error } = await supabase.from("cities").select("*");

  //   console.log(data);

  if (error) {
    console.log(error);
    throw new Error("could not load cities");
  }

  return data;
}
