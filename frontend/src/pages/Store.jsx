import { LikeOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";

import { useItemActions } from "../hooks/store.actions";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../features/session/sessionSlice";
import { filteredItemsSelector } from "../features/storeSlice";

const data = [
  {
    title: "Catan",
    description:
      "A game of settlement building where players trade resources and expand their territories.",
  },
  {
    title: "Carcassonne",
    description:
      "Players build medieval cities, roads, and farms by placing tiles on the board.",
  },
  {
    title: "Ticket to Ride",
    description:
      "Players collect train cards to build railway routes across various maps.",
  },
  {
    title: "Pandemic",
    description:
      "Players cooperate to treat infections around the world and find cures to save humanity.",
  },
  {
    title: "7 Wonders",
    description:
      "A card drafting game where players build an ancient civilization and its wonders.",
  },
  {
    title: "Dominion",
    description:
      "A deck-building game where players compete to gather the most valuable kingdom.",
  },
  {
    title: "Splendor",
    description:
      "Players collect gems and cards to become the most influential merchant in Renaissance Europe.",
  },
  {
    title: "Gloomhaven",
    description:
      "A tactical combat game with dungeon crawling and story-driven campaigns.",
  },
  {
    title: "Terraforming Mars",
    description:
      "Players compete to develop the most successful project to terraform the planet Mars.",
  },
  {
    title: "Azul",
    description:
      "A tile-placement game where players decorate a palace with beautiful tiles.",
  },
  {
    title: "The Resistance",
    description:
      "A social deduction game where players work as a team or betray others to achieve their goal.",
  },
  {
    title: "Betrayal at House on the Hill",
    description:
      "Players explore a haunted mansion and one player becomes a traitor midway through.",
  },
  {
    title: "Blood Rage",
    description:
      "A Viking-themed game of area control, card drafting, and combat during Ragnarok.",
  },
  {
    title: "Everdell",
    description:
      "Players build a city in a magical woodland setting through worker placement and tableau building.",
  },
  {
    title: "Scythe",
    description:
      "A game of resource management, area control, and engine building set in an alternate history.",
  },
  {
    title: "Wingspan",
    description:
      "Players build a network of bird habitats by collecting food, laying eggs, and drawing cards.",
  },
  {
    title: "Kingdomino",
    description:
      "Players draft and place domino-like tiles to build their kingdoms and score points.",
  },
  {
    title: "Root",
    description:
      "An asymmetrical game where players take on unique factions vying for control of a woodland.",
  },
  {
    title: "Tzolk'in: The Mayan Calendar",
    description:
      "A worker placement game where players manage resources and use the rotating calendar to take actions.",
  },
  {
    title: "Agricola",
    description:
      "Players build and manage their farms while feeding their families and developing resources.",
  },
  {
    title: "Spirit Island",
    description:
      "Players control powerful spirits defending an island from colonizing invaders.",
  },
  {
    title: "Santorini",
    description:
      "A strategic abstract game where players build towers and aim to reach the top.",
  },
  {
    title: "Clank!",
    description:
      "A deck-building adventure game where players explore dungeons while avoiding the dragon's wrath.",
  },
  {
    title: "Cosmic Encounter",
    description:
      "Players lead alien races to conquer the galaxy using diplomacy, alliances, and unique powers.",
  },
  {
    title: "Puerto Rico",
    description:
      "Players manage plantations and shipping goods to Europe, aiming for economic success.",
  },
  {
    title: "Brass: Birmingham",
    description:
      "A complex economic game where players develop industries and trade networks in 18th century England.",
  },
  {
    title: "Patchwork",
    description:
      "A two-player game where players compete to build the best quilt using various fabric pieces.",
  },
  {
    title: "Decrypto",
    description:
      "Players communicate secret codes to their teammates while trying to intercept the opposing team's messages.",
  },
  {
    title: "Codenames",
    description:
      "A party game where teams compete to make contact with all their secret agents through word clues.",
  },
  {
    title: "Camel Up",
    description:
      "A betting game where players wager on which camel will win a chaotic race.",
  },
  {
    title: "King of Tokyo",
    description:
      "Players control giant monsters vying to be the last one standing in the city of Tokyo.",
  },
  {
    title: "Sheriff of Nottingham",
    description:
      "Players take turns as the sheriff, inspecting merchants’ goods for contraband.",
  },
  {
    title: "The Quacks of Quedlinburg",
    description:
      "Players brew potions by drawing ingredients from a bag, pushing their luck to avoid a disastrous explosion.",
  },
  {
    title: "Small World",
    description:
      "Players control fantasy races with unique powers and vie for control of the map.",
  },
  {
    title: "Sagrada",
    description:
      "Players draft dice to create stained glass windows in a beautiful abstract puzzle.",
  },
  {
    title: "Onitama",
    description:
      "A tactical two-player game of martial arts where players aim to capture the opponent's master.",
  },
  {
    title: "The Crew",
    description:
      "A cooperative trick-taking game where players work together to complete missions in space.",
  },
  {
    title: "Lost Ruins of Arnak",
    description:
      "Players explore an island filled with ruins, monsters, and lost artifacts through deck-building and worker placement.",
  },
  {
    title: "Cartographers",
    description:
      "A roll-and-write game where players draw maps based on Tetris-like shapes to score points.",
  },
  {
    title: "Pax Pamir",
    description:
      "Players take on roles as Afghan leaders trying to influence the region during the 19th century.",
  },
  {
    title: "Forbidden Island",
    description:
      "Players work together to collect treasures and escape a sinking island before it's too late.",
  },
  {
    title: "Love Letter",
    description:
      "A light card game where players aim to deliver a love letter to the princess while outsmarting others.",
  },
  {
    title: "Tigris & Euphrates",
    description:
      "An abstract game where players build civilizations in Mesopotamia, managing conflicts and expansion.",
  },
  {
    title: "Anachrony",
    description:
      "A complex game of time travel, resource management, and post-apocalyptic civilization building.",
  },
  {
    title: "Spirit of the Forest",
    description:
      "A set collection game where players compete to collect nature spirits and elements.",
  },
  {
    title: "Arkham Horror: The Card Game",
    description:
      "A cooperative card game set in the Lovecraftian mythos where players investigate eerie mysteries.",
  },
  {
    title: "Star Realms",
    description:
      "A fast-paced deck-building game where players compete to control the galaxy with powerful spaceships and bases.",
  },
  {
    title: "KeyForge",
    description:
      "A unique deck game where players compete using decks created from unique combinations of cards.",
  },
  {
    title: "Mystic Vale",
    description:
      "A deck-building game with card-crafting mechanics where players restore a cursed land.",
  },
  {
    title: "The Isle of Cats",
    description:
      "Players rescue cats from an island by fitting them onto their ships using polyomino tiles.",
  },
  {
    title: "Quoridor",
    description:
      "An abstract strategy game where players race to cross the board while blocking opponents with walls.",
  },
];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Store() {
  const loggedIn = useSelector(selectIsLoggedIn);
  const [search, setSearch] = useState("");

  const storeActions = useItemActions();
  const items = useSelector(filteredItemsSelector);

  useEffect(() => {
    if (loggedIn) storeActions.getAllItemsWithAuth();
    else storeActions.getAllItems();
  }, []);

  useEffect(() => {
    storeActions.setFiltered(search);
  }, [search]);
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={(value) => setSearch(value.toLowerCase())}
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={LikeOutlined}
                text={item.likes}
                key="list-vertical-like-o"
              />,
            ]}
            extra={
              item.file_name ? (
                <img
                  height={"150vh"}
                  src={`${process.env.REACT_APP_API_BASE_URL}/file/download/${item.file_name}`}
                />
              ) : (
                ""
              )
            }
          >
            <List.Item.Meta title={<p>{item.title}</p>} />
            {item.description}
          </List.Item>
        )}
      />
    </>
  );
}
