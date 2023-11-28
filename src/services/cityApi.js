import supabase from "../client/SupaClient";
import { getDate, formattedDate } from "../utils/date";

export async function getCity(id) {
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("city not found");
  }
  updateCurrentCity(data);
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

export async function updateCurrentCity(city) {
  const { data, error } = await supabase
    .from("currentCity")
    .update(city)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("current city could not be updated");
  }
  return data;
}

export async function getCurrentCity() {
  const { data, error } = await supabase
    .from("currentCity")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("current city could not be loaded");
  }
  return data;
}

export async function postCity(newCity) {
  const { data, error } = await supabase
    .from("cities")
    .insert([{ ...newCity }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("could not add city");
  }
  console.log(Date.now());
  updateCurrentCity({ ...newCity, currentCity_id: data.at(0).id });
  return data;
}

export async function deleteCity(id) {
  const { data, error } = await supabase.from("cities").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("city not found");
  }
  //this needs fixing
  updateCurrentCity({
    cityName: "",
    country: "",
    date: null || "2023-01-01 00:00:00+00:00",
    emoji: "",
    position: {},
    notes: "",
    currentCity_id: 0,
  });
  return data;
}
