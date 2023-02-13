import service from "./api";

export const listJewel = () =>
  service.get("/jewel").then((response) => response.data);

export const jewelDetail = (id) =>
  service.get(`/jewel/${id}`).then((response) => response.data);
