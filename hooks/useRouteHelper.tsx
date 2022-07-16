import { useRouter } from "next/router";
import { MediaParamType, MediaType, Path } from "../types";
import { useMemo } from "react";

export default function useRouteHelper() {
  const router = useRouter();
  const currentPath = router.asPath;

  // set the mediaType to either 'movie' or 'tv' depending on the
  // current [mediaType]path (series / movies)
  const mediaType: MediaType = currentPath.includes("/series") ? "tv" : "movie";

  const mediaParam: MediaParamType = mediaType === "tv" ? "/series" : "/movies";

  const navigate = (path: Path) => {
    router.push(path);
  };
  return {
    mediaParam,
    mediaType,
    router,
    navigate,
    currentPath,
  };
}
