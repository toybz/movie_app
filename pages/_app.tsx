import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "../styles/globals.css";
import { Alert, Col, Layout, Menu, Row } from "antd";
import GenresList from "../components/GenresList";
import SearchContainer from "../components/SearchBar";
import Link from "next/link";
import useRouteHelper from "../hooks/useRouteHelper";
import HtmlHead from "../components/HtmlHead";
import useOfflineStatus from "../hooks/useOfflineStatus";

const { Header, Content, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const { mediaType, mediaParam, navigate } = useRouteHelper();

  const { isOffline } = useOfflineStatus();




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
          {/*SideMenu with the genre list*/}
        <Sider breakpoint={'md'} width={200}  collapsedWidth={0} className="site-layout-background">
          <Header>
            <span style={{ color: "white" }}>MOVIE APP</span>
          </Header>
          <GenresList  />
        </Sider>

        <Layout>
          {/*Top Navigation bar*/}
          <Header className="header" >
            <Row align="middle" >
              <Col sm={12} lg={6}>
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
              <Col sm={12} lg={16} lg-offset={2} id={'search'}>
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
            {/*App navigation*/}
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
            {/*Offline alert*/}
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
