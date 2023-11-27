import supabase from "../client/SupaClient";

export async function getCity(id) {
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    // Filters
    .eq("id", id);
  if (error) {
    console.log(error.message);
  }
  console.log(data);
  return data;
}

export async function getCities() {
  const { data, error } = await supabase.from("cities").select("*");

  if (error) {
    console.log(error);
    throw new Error("could not load cities");
  }
  return data;
}
