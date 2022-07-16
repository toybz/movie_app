import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu} from 'antd';
import React from 'react';

const {Header, Content, Sider} = Layout;


const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const App = () => (
    <Layout>
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={items2}
                />
            </Sider>
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default App;

const ser = {
    "page": 1,
    "results": [{
        "adult": false,
        "backdrop_path": "/jlQJDD0L5ZojjlS0KYnApdO0n19.jpg",
        "genre_ids": [28, 12, 14, 878],
        "id": 19995,
        "original_language": "en",
        "original_title": "Avatar",
        "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        "popularity": 289.262,
        "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        "release_date": "2009-12-10",
        "title": "Avatar",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 25694
    }, {
        "adult": false,
        "backdrop_path": "/wEQ0Pu2jEyqHKOJRAdAKaeTFCML.jpg",
        "genre_ids": [878, 28, 12],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 160.829,
        "poster_path": "/fjaoD0ZfPOf2C5BalCziPUaf4Zk.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99],
        "id": 287003,
        "original_language": "en",
        "original_title": "Avatar: Scene Deconstruction",
        "overview": "The deconstruction of the Avatar scenes and sets",
        "popularity": 43.425,
        "poster_path": "/uCreCQFReeF0RiIXkQypRYHwikx.jpg",
        "release_date": "2009-12-18",
        "title": "Avatar: Scene Deconstruction",
        "video": false,
        "vote_average": 9,
        "vote_count": 3
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99],
        "id": 111332,
        "original_language": "en",
        "original_title": "Avatar: Creating the World of Pandora",
        "overview": "The Making-of James Cameron's Avatar. It shows interesting parts of the work on the set.",
        "popularity": 44.98,
        "poster_path": "/d9oqcfeCyc3zmMal6eJbfj3gatc.jpg",
        "release_date": "2010-02-07",
        "title": "Avatar: Creating the World of Pandora",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 18
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [28, 878, 12, 14],
        "id": 216527,
        "original_language": "en",
        "original_title": "Avatar 4",
        "overview": "",
        "popularity": 15.239,
        "poster_path": "/pHxxkaRtiCTDX3tOi1V7aZfOPKO.jpg",
        "release_date": "2026-12-16",
        "title": "Avatar 4",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [28, 18, 878, 12, 14],
        "id": 83533,
        "original_language": "en",
        "original_title": "Avatar 3",
        "overview": "",
        "popularity": 19.38,
        "poster_path": "/ocmG9jo7aorZtjmewSbfwQuJr95.jpg",
        "release_date": "2024-12-18",
        "title": "Avatar 3",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99],
        "id": 278698,
        "original_language": "en",
        "original_title": "Avatar Spirits",
        "overview": "Bryan Konietzko and Michael Dante DiMartino, co-creators of the hit television series, Avatar: The Last Airbender, reflect on the creation of the masterful series.",
        "popularity": 19.403,
        "poster_path": "/oBWVyOdntLJd5bBpE0wkpN6B6vy.jpg",
        "release_date": "2010-06-22",
        "title": "Avatar Spirits",
        "video": false,
        "vote_average": 8.8,
        "vote_count": 12
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [28, 12, 14, 878],
        "id": 393209,
        "original_language": "en",
        "original_title": "Avatar 5",
        "overview": "",
        "popularity": 11.998,
        "poster_path": "/qeAknsrFRHRvjIq2HrlBsmYy2KL.jpg",
        "release_date": "2028-12-20",
        "title": "Avatar 5",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 421403,
        "original_language": "en",
        "original_title": "Avatar",
        "overview": "Indranath’s son is ill, Guru Omkarananda suggests he pray to the goddess Kamala. His son improves but bad luck follows Indranath; his son and daughter die. Unable to stand the grief the Queen/Kalyani loses her mental equilibrium. Goddess Kamala manifests as Rupasi, the daughter of Omkarananda. Virodhananda and his son Tribhanga are the incarnation of Narad and Narayan on earth. The kingdom goes through difficult times. Omkarananda is arrested and Rupasi goes to meet Bastabesh/Indranath who is attracted to her. Rupasi takes refuge in Birodhananda’s house to avoid Bastabesh’s advances. Birodhananda is interested in getting his son Tribhanga married to Rupasi. Bastabesh goes after Rupasi/Kamala who blinds him. Finally the gods perform their miracle and a repentant Bastabesh is restored his sight and kingdom.",
        "popularity": 7.896,
        "poster_path": null,
        "release_date": "1941-09-16",
        "title": "Avatar",
        "video": false,
        "vote_average": 8,
        "vote_count": 4
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99],
        "id": 183392,
        "original_language": "en",
        "original_title": "Capturing Avatar",
        "overview": "Capturing Avatar is a feature length behind-the-scenes documentary about the making of Avatar. It uses footage from the film's development, as well as stock footage from as far back as the production of Titanic in 1995. Also included are numerous interviews with cast, artists, and other crew members. The documentary was released as a bonus feature on the extended collector's edition of Avatar.",
        "popularity": 7.622,
        "poster_path": "/bof9FHKd2rayPEGl0naYdem0baF.jpg",
        "release_date": "2010-11-16",
        "title": "Capturing Avatar",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 34
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [14, 16, 12, 28, 10770],
        "id": 993553,
        "original_language": "en",
        "original_title": "Avatar: The Last Airbender - Sozin's Comet",
        "overview": "In the climatic series finale, Zuko confronts Azula, and Aang finally faces the Firelord.",
        "popularity": 21.471,
        "poster_path": "/xlCmdmBff2kdg8j593XcTA6jYM9.jpg",
        "release_date": "2008-07-18",
        "title": "Avatar: The Last Airbender - Sozin's Comet",
        "video": true,
        "vote_average": 7.5,
        "vote_count": 2
    }, {
        "adult": false,
        "backdrop_path": "/yR48vwK8EUQ260YyKCXW843HfZC.jpg",
        "genre_ids": [10402],
        "id": 993545,
        "original_language": "fr",
        "original_title": "Avatar - Au Hellfest 2022",
        "overview": "",
        "popularity": 2.054,
        "poster_path": "/4TPUPtp5hgbr8ZCtenHAQa3d9mY.jpg",
        "release_date": "2022-06-26",
        "title": "Avatar - Au Hellfest 2022",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": "/e8mmDO7fKK93T4lnxl4Z2zjxXZV.jpg",
        "genre_ids": [],
        "id": 668297,
        "original_language": "en",
        "original_title": "The Last Avatar",
        "overview": "The Last Avatar is a mystical adventure film, a story of a young man who leaves Hollywood to find himself. What he finds is beyond his wildest imagination. Based on ancient prophecy, contemporary truth seeking and the future of humanity, The Last Avatar is a film that takes transformational themes and makes them relevant for audiences of all ages. Filled with love, magic, mystery, conspiracy, psychics, underground cities, secret societies, light bodies and much more, The Last Avatar tells the story of the emergence of Kalki Avatar- the final Avatar of our current Age of Chaos. Kalki is also a metaphor for the innate power and potential that lies within humanity to awaken and create a world of truth, harmony and possibility.",
        "popularity": 1.841,
        "poster_path": "/XWz5SS5g5mrNEZjv3FiGhqCMOQ.jpg",
        "release_date": "2014-12-06",
        "title": "The Last Avatar",
        "video": false,
        "vote_average": 4.5,
        "vote_count": 2
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 931019,
        "original_language": "en",
        "original_title": "Avatar: Enter The World",
        "overview": "A behind the scenes look at the new James Cameron blockbuster “Avatar”, which stars Aussie Sam Worthington. Hastily produced by Australia’s Nine Network following the film’s release.",
        "popularity": 1.753,
        "poster_path": "/9MHY9pYAgs91Ef7YFGWEbP4WJqC.jpg",
        "release_date": "2009-12-05",
        "title": "Avatar: Enter The World",
        "video": false,
        "vote_average": 2,
        "vote_count": 1
    }, {
        "adult": false,
        "backdrop_path": "/fCK2T5ruQrqRsciJ01jjQSkNWVq.jpg",
        "genre_ids": [16, 28, 12, 14],
        "id": 613200,
        "original_language": "zh",
        "original_title": "全职高手之巅峰荣耀",
        "overview": "Prequel movie to the animated series The King's Avatar, dealing with Ye Xiu's original entry into the pro gaming world of Glory, and the first Pro League series tournament.",
        "popularity": 60.998,
        "poster_path": "/aQ7ZUDxcSf8U4ynCstNCMLgdhrD.jpg",
        "release_date": "2019-08-16",
        "title": "The King's Avatar: For the Glory",
        "video": false,
        "vote_average": 7,
        "vote_count": 20
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99, 878],
        "id": 100287,
        "original_language": "da",
        "original_title": "Min Avatar og mig",
        "overview": "is a creative documentary-fiction film and a film that might expand your sense of reality. It is the story about a man who enters the virtual world Second Life to pursue his personal dreams and ambitions. His journey into cyberspace becomes a magic learning experience, which gradually opens the gates to a much larger reality.",
        "popularity": 0.6,
        "poster_path": "/dZCj0jiOoDzAzbQM7ryYFEjkjs7.jpg",
        "release_date": "2010-11-10",
        "title": "My Avatar and Me",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [99],
        "id": 348369,
        "original_language": "en",
        "original_title": "Avatar Days",
        "overview": "Originally created for the Darklight Festival's '4 Day Movie' project, Avatar Days is a portrait of four online gamers in Dublin whose daily lives contrast with their virtual identities. Advanced 3D technologies and Motion Capture animation were used to insert the players' in-game characters in place of their real selves against the backdrop of the banal urban landscape which they inhabit.",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "2010-02-02",
        "title": "Avatar Days",
        "video": true,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": "/x43RWEZg9tYRPgnm43GyIB4tlER.jpg",
        "genre_ids": [],
        "id": 740017,
        "original_language": "es",
        "original_title": "Avatar: Agni Kai",
        "overview": "",
        "popularity": 0.6,
        "poster_path": null,
        "release_date": "2020-01-18",
        "title": "Avatar: Agni Kai",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": "/dj8g4jrYMfK6tQ26ra3IaqOx5Ho.jpg",
        "genre_ids": [10402],
        "id": 874700,
        "original_language": "en",
        "original_title": "Avatar Ages: Dreams",
        "overview": "On the night of dreams Avatar performed Hunter Gatherer in its entirety, plus a selection of their most popular songs.  Originally aired January 9th 2021",
        "popularity": 0.6,
        "poster_path": "/4twG59wnuHpGIRR9gYsqZnVysSP.jpg",
        "release_date": "2021-01-09",
        "title": "Avatar Ages: Dreams",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }, {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [10402],
        "id": 874768,
        "original_language": "en",
        "original_title": "Avatar Ages: Madness",
        "overview": "On the night of madness Avatar performed songs from Black Waltz and Hail The Apocalypse as voted on by the fans.",
        "popularity": 0.6,
        "poster_path": "/wVyTuruUctV3UbdzE5cncnpyNoY.jpg",
        "release_date": "2021-01-23",
        "title": "Avatar Ages: Madness",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }],
    "total_pages": 3,
    "total_results": 55
}