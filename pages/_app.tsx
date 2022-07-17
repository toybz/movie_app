import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Alert, Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import GenresList from "../components/GenresList";
import SearchContainer from "../components/SearchBar";
import Link from "next/link";
import useRouteHelper from "../hooks/useRouteHelper";
import HtmlHead from "../components/HtmlHead";
import { Genre } from "../types";
import { fetchGenres } from "../api";
import useOfflineStatus from "../hooks/useOfflineStatus";

const { Header, Content, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const { mediaType, mediaParam, navigate, currentPath } = useRouteHelper();

  //alert user if network is offline
  const { isOffline } = useOfflineStatus();
  useEffect(() => {
    if (isOffline) {
    }
  }, [isOffline]);

  //GENRE
  //state to store genre, so its fetched only once
  const [genres, setGenres] = useState<{ movie: Genre[]; tv: Genre[] }>({
    movie: [],
    tv: [],
  });
  useEffect(() => {
    const fetchGenre = async () => {
      // @ts-ignore
      if (genres[mediaType].length) {
        return;
      }
      try {
        const genreReq = await fetchGenres(mediaType);
        const genreResponse = await genreReq.json();
        const genresData = genreResponse.genres.map((genre: Genre) => {
          return {
            ...genre,
            isLinkActive:
              currentPath ===
              `${mediaParam}/genre/${genre.id}?name=${genre.name}`,
            path: `${mediaParam}/genre/${genre.id}?name=${genre.name}`,
          };
        });
        //set the fetched genre
        setGenres({ ...genres, [mediaType]: genresData });
      } catch (e) {
        // show error message Toast
      }
    };
    fetchGenre();
  }, [mediaType, genres]);

  const genreList = mediaType === "tv" ? genres.tv : genres.movie;
  // GENRE end

  const search = (query: string) => {
    if (!query) {
      return;
    }
    navigate(`${mediaParam}/search?query=${query}`);
  };

  return (
    <>
      <HtmlHead />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Header>
            <span style={{ color: "white" }}>MOVIE APP</span>
          </Header>
          <GenresList genres={genreList} />
        </Sider>

        <Layout>
          <Header className="header">
            <Row align="middle">
              <Col span={6}>
                <Menu
                  mode="horizontal"
                  theme={"dark"}
                  defaultSelectedKeys={[mediaType]}
                >
                  <Menu.Item key="movie">
                    <Link href={"/movies"}>Movie</Link>
                  </Menu.Item>

                  <Menu.Item key="tv">
                    <Link href={"/series"}>Series</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={16} offset={2}>
                <SearchContainer
                  placeholder={
                    mediaType === "tv" ? "Search Series" : "Search Movies"
                  }
                  onSubmit={search}
                />
              </Col>
            </Row>
          </Header>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Component {...pageProps} />
            </Content>
            {isOffline && (
              <div style={{ position: "fixed", bottom: 0, right: 0 }}>
                <Alert
                  message="Network is Offline. Now using cached data"
                  type="error"
                  className={"offline_container"}
                />
              </div>
            )}
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default MyApp;
