import { MediaType } from "../../types";

export function getMediaType(param: any) {
  const medParam: any = param || "movies"; // series | movies
  const mediaType: MediaType = medParam === "series" ? "tv" : "movie";
  const selectedMedia = medParam === "series" ? "Series" : "Movies";

  return {
    mediaType,
    selectedMedia,
  };
}
