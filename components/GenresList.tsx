import { Menu } from "antd";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { Genre } from "../types";
import {fetchGenres} from "../api";
import useRouteHelper from "../hooks/useRouteHelper";

const GenresList: React.FC<{}> = () => {

    const { mediaType, mediaParam, currentPath } = useRouteHelper();

    const [genres, setGenres] = useState<{ movie: Genre[]; tv: Genre[] }>({
        movie: [],
        tv: [],
    });
    useEffect(() => {
        const fetchGenre = async () => {

            // @ts-ignore
            if (genres[mediaType].length) {
                // return if genre is fetched
                return;
            }
            try {
                const genreReq = await fetchGenres(mediaType);
                const genreResponse = await genreReq.json();
                const genresData = genreResponse.genres
                //set the fetched genre
                setGenres({ ...genres, [mediaType]: genresData });
            } catch (e) {
                // show error message Toast
            }
        };
        fetchGenre();
    }, [mediaType, genres]);

    // set appropriate genreList based on the media type
    const genreList = mediaType === "tv" ? genres.tv : genres.movie;




    return (
      <Menu
          mode="inline"
          // @ts-ignore
          selectedKeys={0}
          style={{
              height: "100%",
              borderRight: 0,
          }}
      >
          {genreList.map((item) => (
              <Menu.Item
                  key={item.id}
                  className={` ${
                      currentPath ===
                      `${mediaParam}/genre/${item.id}?name=${item.name}` &&
                      `ant-menu-item-selected`
                  } `}
              >
                  <Link
                      href={`${mediaParam}/genre/${item.id}?name=${item.name}`}
                  >
                      {item.name}
                  </Link>
              </Menu.Item>
          ))}
      </Menu>
  );
};

export default GenresList;
